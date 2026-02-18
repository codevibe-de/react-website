import BlogCard from '@/components/BlogCard';
import BlankPageLayout from '@/layouts/BlankPageLayout';
import BodyContent from '@/components/BodyContent';
import {pageDataService} from '@/lib/PageDataService';
import {blogService} from '@/lib/BlogService';

export const metadata = {
    title: 'Blog - Codevibe',
    description: 'Artikel und Tutorials zu modernen Programmiersprachen und Entwicklungswerkzeugen',
};

export default function BlogPage() {
    const commonData = pageDataService.getHomePageData();
    const posts = blogService.getAllPosts();

    return (
        <BlankPageLayout
            navLinks={commonData.topNavLinks}
            footerLinks={commonData.footerNavLinks}
            transparentNav={false}
        >
            <div className="bg-white border-b-2 border-gray-100">
                <BodyContent>
                    <div className="py-12 px-4">
                        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
                            Blog
                        </h1>
                        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
                            Artikel und Tutorials zu modernen Programmiersprachen und Entwicklungswerkzeugen
                        </p>
                    </div>
                </BodyContent>
            </div>

            <div className="bg-gray-50 py-12">
                <BodyContent>
                    {posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                Noch keine Blog-Beiträge vorhanden.
                            </p>
                        </div>
                    ) : (
                        <div className="grid px-6 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => (
                                <BlogCard key={post.slug} post={post}/>
                            ))}
                        </div>
                    )}
                </BodyContent>
            </div>
        </BlankPageLayout>
    );
}
