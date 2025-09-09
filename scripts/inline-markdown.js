#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// This script inlines markdown files referenced in JSON files in the /src/content folder.
// It processes any JSON file that contains objects with 'body' arrays, looking for
// blocks with type 'markdown' and a 'file' property. It reads each markdown file,
// adds its content to the corresponding block in the JSON, and writes the updated
// JSON back to the same file.
// Internally it keeps the original file reference (`file`) for potential future use while
// always replacing the `content` field with the actual markdown content.
//
// Usage: node scripts/inline-markdown.js

// Paths
const CONTENT_DIR = path.join(__dirname, '../src/content');

console.log('Starting markdown inlining process...');

// Function to recursively process objects looking for body arrays
function processBodyElements(obj, filePath) {
  let hasChanges = false;
  
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      if (processBodyElements(item, filePath)) {
        hasChanges = true;
      }
    });
  } else if (typeof obj === 'object' && obj !== null) {
    // Check if this object has a 'body' property that's an array
    if (obj.body && Array.isArray(obj.body)) {
      console.log(`  Found body array with ${obj.body.length} blocks`);
      
      obj.body.forEach((block, blockIndex) => {
        if (block.type === 'markdown' && block.file) {
          console.log(`    - Inlining markdown from: ${block.file}`);
          
          try {
            // Read the markdown file
            const markdownPath = path.join(__dirname, '..', block.file);
            const markdownContent = fs.readFileSync(markdownPath, 'utf-8');
            
            // Add content field alongside existing file field, keep type as markdown
            obj.body[blockIndex] = {
              type: 'markdown',
              file: block.file,
              content: markdownContent
            };
            
            console.log(`    ✓ Successfully inlined markdown (${markdownContent.length} characters)`);
            hasChanges = true;
          } catch (error) {
            console.error(`    ✗ Failed to read markdown file: ${block.file}`, error.message);
            // Keep the original structure as fallback
          }
        }
      });
    }
    
    // Recursively process other properties
    Object.keys(obj).forEach(key => {
      if (processBodyElements(obj[key], filePath)) {
        hasChanges = true;
      }
    });
  }
  
  return hasChanges;
}

try {
  // Get all JSON files in the content directory
  const files = fs.readdirSync(CONTENT_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(CONTENT_DIR, file));
  
  console.log(`Found ${files.length} JSON files to process:`);
  files.forEach(file => console.log(`  - ${path.basename(file)}`));
  
  let totalFilesChanged = 0;
  
  // Process each JSON file
  files.forEach(filePath => {
    console.log(`\nProcessing: ${path.basename(filePath)}`);
    
    try {
      // Read the JSON file
      const jsonRaw = fs.readFileSync(filePath, 'utf-8');
      const jsonData = JSON.parse(jsonRaw);
      
      // Process the JSON data looking for body elements
      const hasChanges = processBodyElements(jsonData, filePath);
      
      if (hasChanges) {
        // Write the updated JSON back to the same file
        const updatedJson = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync(filePath, updatedJson, 'utf-8');
        console.log(`  ✓ Updated: ${path.basename(filePath)}`);
        totalFilesChanged++;
      } else {
        console.log(`  - No markdown inlining needed for: ${path.basename(filePath)}`);
      }
      
    } catch (error) {
      console.error(`  ✗ Error processing ${path.basename(filePath)}:`, error.message);
    }
  });
  
  console.log(`\n✓ Markdown inlining process completed!`);
  console.log(`Files processed: ${files.length}`);
  console.log(`Files updated: ${totalFilesChanged}`);
  
} catch (error) {
  console.error('✗ Error during markdown inlining:', error.message);
  process.exit(1);
}