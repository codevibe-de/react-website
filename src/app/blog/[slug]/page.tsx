import {notFound} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import BlankPageLayout from '@/layouts/BlankPageLayout';
import BodyContent from '@/components/BodyContent';
import BlogSectionRenderer from '@/components/BlogSectionRenderer';
import {pageDataService} from '@/lib/PageDataService';
import {blogService} from '@/lib/BlogService';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = blogService.getAllSlugs();
    return slugs.map(slug => ({
        slug: slug,
    }));
}

export async function generateMetadata({params}: BlogPostPageProps) {
    const {slug} = await params;
    const post = blogService.getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Beitrag nicht gefunden - Codevibe',
        };
    }

    return {
        title: `${post.title} - Codevibe Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
    const {slug} = await params;
    const post = blogService.getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const commonData = pageDataService.getHomePageData();

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <BlankPageLayout
            navLinks={commonData.topNavLinks}
            footerLinks={commonData.footerNavLinks}
            transparentNav={false}
        >
            <article className="bg-white">
                {post.coverImage && (
                    <div className="relative w-full h-[400px] bg-gray-900">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"/>
                    </div>
                )}

                <BodyContent>
                    <div className="max-w-4xl mx-auto px-4 py-12">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <Link
                                href="/blog"
                                className="text-primary hover:text-primary-600 text-sm font-medium"
                            >
                                ← Zurück zum Blog
                            </Link>
                        </nav>

                        {/* Header */}
                        <header className="mb-12">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-between text-gray-600 mb-6">
                                <span className="font-medium">{post.author}</span>
                                <time dateTime={post.publishedAt} className="text-sm">
                                    {formattedDate}
                                </time>
                            </div>

                            {post.tags && post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </header>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            {post.sections.map((section, index) => (
                                <BlogSectionRenderer key={index} section={section}/>
                            ))}
                        </div>

                        {/* Footer */}
                        <footer className="mt-16 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <p className="text-gray-600 mb-4">
                                    Interessiert an unseren Kursen?
                                </p>
                                <Link
                                    href="/seminare"
                                    className="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Alle Seminare ansehen
                                </Link>
                            </div>
                        </footer>
                    </div>
                </BodyContent>
            </article>
        </BlankPageLayout>
    );
}
