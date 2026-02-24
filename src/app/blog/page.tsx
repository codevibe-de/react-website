import BlankPageLayout from '@/layouts/BlankPageLayout';
import BodyContent from '@/components/BodyContent';
import BlogSearch from '@/components/BlogSearch';
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
                    <div className="py-8 px-4">
                        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty text-body-light text-center">
                            Blog
                        </h2>
                    </div>
                    <BlogSearch posts={posts}/>
                </BodyContent>
            </div>
        </BlankPageLayout>
    );
}