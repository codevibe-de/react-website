import {BlogPost, BlogListItem} from '@/types/BlogPost';
import fs from 'fs';
import path from 'path';

class BlogService {
    private contentDir = path.join(process.cwd(), 'src/content/blog');

    private getAllBlogFiles(): string[] {
        try {
            if (!fs.existsSync(this.contentDir)) {
                return [];
            }
            return fs.readdirSync(this.contentDir).filter(file => file.endsWith('.json'));
        } catch (error) {
            console.error('Error reading blog directory:', error);
            return [];
        }
    }

    getAllPosts(): BlogListItem[] {
        const files = this.getAllBlogFiles();

        const posts = files.map(filename => {
            const filePath = path.join(this.contentDir, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const post: BlogPost = JSON.parse(fileContents);

            return {
                slug: post.slug,
                title: post.title,
                excerpt: post.excerpt,
                author: post.author,
                publishedAt: post.publishedAt,
                coverImage: post.coverImage,
                tags: post.tags
            } as BlogListItem;
        });

        // Sort by published date (newest first)
        return posts.sort((a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }

    getPostBySlug(slug: string): BlogPost | null {
        try {
            const files = this.getAllBlogFiles();

            for (const filename of files) {
                const filePath = path.join(this.contentDir, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const post: BlogPost = JSON.parse(fileContents);

                if (post.slug === slug) {
                    return post;
                }
            }

            return null;
        } catch (error) {
            console.error('Error reading blog post:', error);
            return null;
        }
    }

    getAllSlugs(): string[] {
        const files = this.getAllBlogFiles();
        return files.map(filename => {
            const filePath = path.join(this.contentDir, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const post: BlogPost = JSON.parse(fileContents);
            return post.slug;
        });
    }
}

export const blogService = new BlogService();
