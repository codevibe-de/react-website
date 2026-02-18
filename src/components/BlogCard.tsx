import Link from 'next/link';
import Image from 'next/image';
import {BlogListItem} from '@/types/BlogPost';

interface BlogCardProps {
    post: BlogListItem;
}

export default function BlogCard({post}: BlogCardProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Link href={`/blog/${post.slug}`} className="block group">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {post.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                        <span className="font-medium">{post.author}</span>
                        <time dateTime={post.publishedAt}>{formattedDate}</time>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </Link>
    );
}
