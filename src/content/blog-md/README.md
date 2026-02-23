# Blog Posts in Markdown

This directory contains blog posts written in Markdown. They are automatically converted to JSON during the build process.

## Creating a New Blog Post

1. Create a new `.md` file in this directory (e.g., `mein-neuer-post.md`)
2. Add frontmatter with metadata
3. Write your content using Markdown
4. Run `npm run build` or `node scripts/parse-blog-markdown.js` to generate JSON

## Frontmatter Format

```markdown
---
slug: url-friendly-slug
title: Your Blog Post Title
excerpt: A short description of your post (used in listings and SEO)
author: Author Name
publishedAt: 2026-02-19
coverImage: /path/to/image.jpg
tags: [Tag1, Tag2, Tag3]
---
```

### Required Fields:
- `slug` - URL-friendly identifier (no spaces, lowercase)
- `title` - Post title
- `excerpt` - Short description
- `author` - Author name
- `publishedAt` - Publication date (YYYY-MM-DD)

### Optional Fields:
- `coverImage` - Path to cover image
- `tags` - Array of tags

## Markdown Content

### Headings

```markdown
# Heading Level 1
## Heading Level 2
### Heading Level 3
```

### Paragraphs

Just write normal text. Consecutive lines will be combined into a single paragraph.

### Code Blocks

````markdown
```javascript
const hello = "world";
console.log(hello);
```
*Optional caption in italics below the code block*
````

Supported languages: `javascript`, `typescript`, `python`, `java`, `kotlin`, `go`, `bash`, `text`, and many more.

### Images

```markdown
![Alt text](/path/to/image.jpg)
*Optional caption in italics*
```

## Example Blog Post

````markdown
---
slug: my-first-post
title: Getting Started with Next.js
excerpt: Learn the basics of Next.js and build your first application
author: John Doe
publishedAt: 2026-02-19
coverImage: /blog/nextjs.jpg
tags: [Next.js, React, JavaScript]
---

# Introduction

Welcome to Next.js! This is a powerful React framework.

## Why Next.js?

Next.js offers many benefits including:
- Server-side rendering
- Static site generation
- API routes

## Your First Component

```jsx
export default function HelloWorld() {
  return <h1>Hello, World!</h1>
}
```
*A simple React component*

![Next.js Logo](/nextjs-logo.png)
*The Next.js logo*

## Conclusion

Next.js is great for building modern web applications.
````

## Tips

1. **Captions**: Add captions to code blocks and images by placing italic text on the next line
2. **Line Breaks**: Leave empty lines between different elements
3. **Tags**: Use square brackets for tags: `[Tag1, Tag2]`
4. **Dates**: Use ISO format for dates: `YYYY-MM-DD`
5. **Slugs**: Keep slugs short, lowercase, and URL-friendly

## Build Process

The markdown files are converted to JSON during:
- `npm run build` - Full build process
- `npm run prep` - Preparation step
- `node scripts/parse-blog-markdown.js` - Manual conversion

Generated JSON files are stored in `src/content/blog/` and used by the blog pages.
