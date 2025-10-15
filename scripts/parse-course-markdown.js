const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error('No frontmatter found in markdown file');
  }

  const [, frontmatter, markdown] = match;
  const metadata = {};

  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      // Parse different value types
      if (value === 'true') metadata[key.trim()] = true;
      else if (value === 'false') metadata[key.trim()] = false;
      else if (!isNaN(value) && value !== '') metadata[key.trim()] = Number(value);
      else metadata[key.trim()] = value.replace(/^["']|["']$/g, ''); // Remove quotes
    }
  });

  return { metadata, markdown };
}

function extractSections(markdown) {
  const sections = {};
  const lines = markdown.split('\n');
  let currentSection = null;
  let currentContent = [];

  lines.forEach(line => {
    const headerMatch = line.match(/^## (.+)$/);
    if (headerMatch) {
      if (currentSection) {
        sections[currentSection] = currentContent.join('\n').trim();
      }
      currentSection = headerMatch[1].toLowerCase();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  });

  if (currentSection) {
    sections[currentSection] = currentContent.join('\n').trim();
  }

  return sections;
}

function markdownToTextBlock(markdown) {
  if (!markdown) return { type: 'text', content: '' };

  return {
    type: 'markdown',
    content: markdown.trim()
  };
}

function normalizePricingLevel(pricing) {
  if (!pricing) return undefined;

  const normalized = pricing.toLowerCase();

  if (normalized === 'low') return 'Low';
  if (normalized === 'medium') return 'Medium';
  if (normalized === 'high') return 'High';

  console.warn(`Unknown pricing level: ${pricing}. Expected: Low, Medium, or High.`);
  return undefined;
}

function parseCourseMd(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { metadata, markdown } = parseFrontmatter(content);
  const sections = extractSections(markdown);

  const course = {
    id: metadata.id,
    rank: metadata.rank || 999,
    title: metadata.title,
    summary: metadata.summary,
    description: markdownToTextBlock(sections.description),
    goal: markdownToTextBlock(sections.goal),
    targetAudience: markdownToTextBlock(sections['target audience']),
    outline: markdownToTextBlock(sections.outline),
    priceSingle: metadata.priceSingle || 0,
    priceInhouse: metadata.priceInhouse || 0,
    duration: metadata.duration || 1,
    durationUnit: metadata.durationUnit || 'Days',
    featured: metadata.featured || false,
    type: metadata.type || 'Seminar',
    backgroundImageUrl: metadata.backgroundImageUrl,
    pricing: normalizePricingLevel(metadata.pricing)
  };

  return course;
}

function generateCoursesJson() {
  const coursesDir = path.join(__dirname, '../src/content/courses');
  const outputPath = path.join(__dirname, '../src/content/courses.json');

  if (!fs.existsSync(coursesDir)) {
    console.log('Creating courses directory...');
    fs.mkdirSync(coursesDir, { recursive: true });
    return;
  }

  const courses = [];
  const files = fs.readdirSync(coursesDir).filter(file => file.endsWith('.md'));

  files.forEach(file => {
    const filePath = path.join(coursesDir, file);
    try {
      const course = parseCourseMd(filePath);
      courses.push(course);
      console.log(`Parsed course: ${course.title}`);
    } catch (error) {
      console.error(`Error parsing ${file}:`, error.message);
    }
  });

  fs.writeFileSync(outputPath, JSON.stringify(courses, null, 2));
  console.log(`Generated courses.json with ${courses.length} courses`);
}

if (require.main === module) {
  generateCoursesJson();
}

module.exports = { parseCourseMd, generateCoursesJson };