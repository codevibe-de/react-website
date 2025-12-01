import Link from 'next/link';
import DefaultLayout from '@/layouts/DefaultLayout';
import { pageDataService } from '@/lib/PageDataService';

export default function NotFound() {
    const homePageData = pageDataService.getHomePageData();

    return (
        <DefaultLayout
            navLinks={homePageData.topNavLinks}
            footerLinks={homePageData.footerNavLinks}
        >
            <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Large 404 */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-primary-300 select-none">
                            404
                        </h1>
                    </div>

                    {/* Message */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-body mb-4">
                        Seite nicht gefunden
                    </h2>
                    <p className="text-lg text-body-light mb-8 max-w-md mx-auto">
                        Die gesuchte Seite existiert leider nicht. Vielleicht finden Sie das Gesuchte auf unserer Startseite oder in der Seminarübersicht.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block min-w-[200px]"
                        >
                            Zur Startseite
                        </Link>
                        <Link
                            href="/seminare"
                            className="bg-white hover:bg-primary-50 text-primary-700 border-2 border-primary-300 px-8 py-3 rounded-lg font-semibold transition-colors inline-block min-w-[200px]"
                        >
                            Zu den Seminaren
                        </Link>
                    </div>

                    {/* Decorative element */}
                    <div className="mt-16 text-primary-200">
                        <svg
                            className="w-32 h-32 mx-auto opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}