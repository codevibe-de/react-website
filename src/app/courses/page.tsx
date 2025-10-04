'use client';

import {useMemo, useState, useEffect, Suspense} from 'react';
import {useSearchParams} from 'next/navigation';
import CourseCard from '@/components/CourseCard';
import BlankPageLayout from "@/layouts/BlankPageLayout";
import Banner from "@/components/Banner";
import BodyContainer from "@/layouts/BodyContainer";
import {pageDataService} from "@/lib/PageDataService";
import Badge from "@/components/Badge";

function CoursesPageContent() {
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
            courses = courses.filter(course => {
                const descriptionText = course.description.find(block => block.type === 'markdown')?.content || '';
                return course.title.toLowerCase().includes(lowercaseSearch) ||
                    course.type.toLowerCase().includes(lowercaseSearch) ||
                    descriptionText.toLowerCase().includes(lowercaseSearch) ||
                    (course.summary && course.summary.toLowerCase().includes(lowercaseSearch));
            });
        }

        return courses;
    }, [allCourses, searchTerm]);

    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks} transparentNav={false}>
            <Banner backgroundImageUrl={'/abstract-image-with-curved-shapes-blend-light-pink-hues-that-create-mesmerizing-background-generative-ai.jpg'}
                    topGradient={false} height={'20vh'} overlayTransparency={10}

            >
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-family-outfit text-shadow-lg">
                        Unsere Kurse
                    </h1>
                    <p className="text-lg sm:text-xl mt-4 md:text-2xl max-w-3xl mx-auto text-shadow-md">
                        Entdecken Sie unser umfassendes Angebot an Entwicklerschulungen
                    </p>
                </div>
            </Banner>
            <BodyContainer>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 flex flex-col items-center">
                        <div className="relative max-w-md w-full mb-2">
                            <input
                                type="text"
                                placeholder="Stichwortsuche..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input w-full px-4 py-2 pr-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
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
                        <Badge color='green'>Hello</Badge>
                        <p className="text-xs text-gray-500 text-center">
                            Sucht nach Stichworten im Titel, Beschreibung oder Typ
                        </p>
                        <div className="text-xs text-gray-500 text-center mt-1">
                            Beispiele: {' '}
                            <button
                                onClick={() => setSearchTerm('Git')}
                                className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                            >
                                Git
                            </button>
                            {', '}
                            <button
                                onClick={() => setSearchTerm('Spring Boot')}
                                className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                            >
                                Spring Boot
                            </button>
                            {', '}
                            <button
                                onClick={() => setSearchTerm('Rave AI')}
                                className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                            >
                                Rave AI
                            </button>
                        </div>
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

export default function CoursesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-pulse text-gray-500">Kurse werden geladen...</div>
                </div>
            </div>
        }>
            <CoursesPageContent />
        </Suspense>
    );
}