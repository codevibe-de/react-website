'use client';

import {useMemo, useState, useEffect} from 'react';
import {useSearchParams} from 'next/navigation';
import CourseCard from '@/components/CourseCard';
import BlankPageLayout from "@/layouts/BlankPageLayout";
import Banner from "@/components/Banner";
import BodyContainer from "@/layouts/BodyContainer";
import {pageDataService} from "@/lib/PageDataService";

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();

    const pageData = pageDataService.getCoursesPageData();
    const allCourses = pageData.courses;

    // Initialize search term from URL parameters
    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam) {
            setSearchTerm(filterParam);
        }
    }, [searchParams]);

    const filteredCourses = useMemo(() => {
        let courses = allCourses;

        // Apply search filter
        if (searchTerm) {
            const lowercaseSearch = searchTerm.toLowerCase();
            courses = courses.filter(course =>
                course.title.toLowerCase().includes(lowercaseSearch) ||
                course.type.toLowerCase().includes(lowercaseSearch) ||
                course.description.toLowerCase().includes(lowercaseSearch)
            );
        }

        return courses;
    }, [allCourses, searchTerm]);

    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks} transparentNav={false}>
            <Banner backgroundImageUrl={'/abstract-image-with-curved-shapes-blend-light-pink-hues-that-create-mesmerizing-background-generative-ai.jpg'}
                    topGradient={false} height={'30vh'} overlayTransparency={10}

            >
                <div className="max-w-6xl mx-auto px-4 text-center text-white relative z-10">
                    <h1 className="text-4xl mb-6 text-shadow-lg">Unsere Kurse</h1>
                    <p className="text-xl max-w-3xl mx-auto text-shadow-md">
                        Entdecken Sie unser umfassendes Angebot<br/>an Entwicklerschulungen
                    </p>
                </div>
            </Banner>
            <BodyContainer>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="mb-8 flex flex-col items-center">
                        <div className="relative max-w-md w-full mb-2">
                            <input
                                type="text"
                                placeholder="Suchen Sie nach Kursen..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            )}
                        </div>
                        <p className="text-sm text-gray-500 text-center">
                            Suche nach Stichworten im Titel, Typ oder Beschreibung.
                        </p>
                    </div>

                    <div className="mb-4 text-gray-600">
                        {filteredCourses.length} {filteredCourses.length === 1 ? 'Kurs gefunden' : 'Kurse gefunden'}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course}/>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">Keine Kurse gefunden. Versuchen Sie andere
                                Suchbegriffe.</p>
                        </div>
                    )}
                </div>
            </BodyContainer>
        </BlankPageLayout>
    );
}