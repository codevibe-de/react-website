const fs = require('fs');
const path = require('path');

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
            let value = valueParts.join(':').trim();

            // Handle arrays (tags)
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
                metadata[key.trim()] = value;
            }
            // Handle booleans
            else if (value === 'true') metadata[key.trim()] = true;
            else if (value === 'false') metadata[key.trim()] = false;
            // Handle numbers
            else if (!isNaN(value) && value !== '') metadata[key.trim()] = Number(value);
            // Handle strings
            else metadata[key.trim()] = value.replace(/^["']|["']$/g, '');
        }
    });

    return { metadata, markdown: markdown.trim() };
}

function parseMarkdownToSections(markdown) {
    const sections = [];
    const lines = markdown.split('\n');
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Check for headings
        const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const content = headingMatch[2].trim();
            sections.push({
                type: 'heading',
                level,
                content
            });
            i++;
            continue;
        }

        // Check for code blocks
        const codeBlockMatch = line.match(/^```(\w+)?$/);
        if (codeBlockMatch) {
            const language = codeBlockMatch[1] || 'text';
            const codeLines = [];
            i++; // Skip the opening ```

            while (i < lines.length && !lines[i].match(/^```$/)) {
                codeLines.push(lines[i]);
                i++;
            }

            const code = codeLines.join('\n');

            // Check if next line is a caption (italic text or blockquote)
            let caption = undefined;
            if (i + 1 < lines.length) {
                const nextLine = lines[i + 1].trim();
                if (nextLine.startsWith('*') && nextLine.endsWith('*') && nextLine.length > 2) {
                    caption = nextLine.slice(1, -1);
                    i++; // Skip caption line
                }
            }

            sections.push({
                type: 'code',
                language,
                code,
                ...(caption && { caption })
            });
            i++; // Skip the closing ```
            continue;
        }

        // Check for images
        const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imageMatch) {
            const alt = imageMatch[1];
            const src = imageMatch[2];

            // Check if next line is a caption
            let caption = undefined;
            if (i + 1 < lines.length) {
                const nextLine = lines[i + 1].trim();
                if (nextLine.startsWith('*') && nextLine.endsWith('*') && nextLine.length > 2) {
                    caption = nextLine.slice(1, -1);
                    i++; // Skip caption line
                }
            }

            sections.push({
                type: 'image',
                src,
                alt,
                ...(caption && { caption })
            });
            i++;
            continue;
        }

        // Check for paragraphs (non-empty lines)
        if (line.trim()) {
            const paragraphLines = [];

            // Collect consecutive non-empty lines that aren't special markdown
            while (i < lines.length &&
                   lines[i].trim() &&
                   !lines[i].match(/^#{1,6}\s/) &&
                   !lines[i].match(/^```/) &&
                   !lines[i].match(/^!\[/)) {
                paragraphLines.push(lines[i]);
                i++;
            }

            if (paragraphLines.length > 0) {
                sections.push({
                    type: 'paragraph',
                    content: paragraphLines.join(' ').trim()
                });
            }
            continue;
        }

        // Skip empty lines
        i++;
    }

    return sections;
}

function parseBlogMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { metadata, markdown } = parseFrontmatter(content);
    const sections = parseMarkdownToSections(markdown);

    const blogPost = {
        slug: metadata.slug,
        title: metadata.title,
        excerpt: metadata.excerpt,
        author: metadata.author,
        publishedAt: metadata.publishedAt,
        coverImage: metadata.coverImage,
        tags: metadata.tags || [],
        sections
    };

    return blogPost;
}

function generateBlogJson() {
    const blogDir = path.join(__dirname, '../src/content/blog-md');
    const outputDir = path.join(__dirname, '../src/content/blog');

    if (!fs.existsSync(blogDir)) {
        console.log('Creating blog-md directory...');
        fs.mkdirSync(blogDir, { recursive: true });
        console.log('Please add markdown blog posts to src/content/blog-md/');
        return;
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

    if (files.length === 0) {
        console.log('No markdown files found in src/content/blog-md/');
        return;
    }

    files.forEach(file => {
        const filePath = path.join(blogDir, file);
        try {
            const blogPost = parseBlogMarkdown(filePath);
            const outputPath = path.join(outputDir, `${blogPost.slug}.json`);
            fs.writeFileSync(outputPath, JSON.stringify(blogPost, null, 2));
            console.log(`✓ Generated ${blogPost.slug}.json from ${file}`);
        } catch (error) {
            console.error(`✗ Error parsing ${file}:`, error.message);
        }
    });

    console.log(`\nGenerated ${files.length} blog post(s)`);
}

if (require.main === module) {
    generateBlogJson();
}

module.exports = { parseBlogMarkdown, generateBlogJson };
