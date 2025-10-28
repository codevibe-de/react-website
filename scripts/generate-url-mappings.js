#!/usr/bin/env node

/**
 * Script to generate url-mappings.json from course markdown files
 *
 * This script reads all course files from src/content/courses/,
 * extracts the oldUrl from frontmatter, and creates redirect mappings
 * to the new URL structure.
 */

const fs = require('fs');
const path = require('path');

// Paths
const COURSES_DIR = path.join(__dirname, '../src/content/courses');
const OUTPUT_FILE = path.join(__dirname, '../url-mappings.json');

/**
 * Extract frontmatter from markdown content
 */
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return null;
  }

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove quotes if present
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    frontmatter[key] = value;
  }

  return frontmatter;
}

/**
 * Convert filename to URL slug
 * Example: j01__java-grundlagen.md -> j01-java-grundlagen
 * Note: Course IDs use format like "J01" (without dash)
 */
function filenameToSlug(filename) {
  return filename
    .replace('.md', '')
    .replace(/__/, '-') // Replace only the first __ separator with -
    .toLowerCase();
}

/**
 * Generate URL mappings from course files
 */
function generateUrlMappings() {
  const mappings = [];

  // Read all markdown files from courses directory
  const files = fs.readdirSync(COURSES_DIR)
    .filter(file => file.endsWith('.md'))
    .sort();

  console.log(`Found ${files.length} course files\n`);

  for (const file of files) {
    const filePath = path.join(COURSES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);

    if (!frontmatter) {
      console.warn(`⚠️  No frontmatter found in ${file}`);
      continue;
    }

    // Only create mapping if oldUrl exists
    if (frontmatter.oldUrl) {
      const slug = filenameToSlug(file);
      const newUrl = `/seminare/${slug}`;

      // Keep the oldUrl as-is (can be relative path or full URL)
      mappings.push({
        source: frontmatter.oldUrl,
        destination: newUrl,
        permanent: true
      });

      console.log(`✓ ${frontmatter.oldUrl} -> ${newUrl}`);
    } else {
      console.log(`- ${file} (no oldUrl)`);
    }
  }

  return mappings;
}

/**
 * Main execution
 */
function main() {
  console.log('Generating URL mappings from course files...\n');

  try {
    const mappings = generateUrlMappings();

    // Sort mappings by source URL for consistency
    mappings.sort((a, b) => a.source.localeCompare(b.source));

    // Write to file with pretty formatting
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify(mappings, null, 2) + '\n',
      'utf-8'
    );

    console.log(`\n✅ Successfully generated ${mappings.length} URL mappings`);
    console.log(`📝 Written to: ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Error generating URL mappings:', error.message);
    process.exit(1);
  }
}

main();