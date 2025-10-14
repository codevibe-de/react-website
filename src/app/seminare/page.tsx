'use client';

import {Suspense, useEffect, useMemo, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import CourseCard from '@/components/CourseCard';
import BlankPageLayout from "@/layouts/BlankPageLayout";
import {pageDataService} from "@/lib/PageDataService";
import BodyContent from "@/components/BodyContent";

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
            const searchParts = searchTerm.split(/\s+/).map(part => part.trim().toLowerCase()).filter(part => part.length > 0);

            courses = courses.filter(course => {
                const descriptionText = course.description.content || '';
                const searchableText = [
                    course.title.toLowerCase(),
                    course.type.toLowerCase(),
                    descriptionText.toLowerCase(),
                    (course.summary || '').toLowerCase()
                ];

                // All search parts must match at least one searchable field
                return searchParts.every(part =>
                    searchableText.some(text => text.includes(part))
                );
            });
        }

        // Sort by rank (ascending)
        courses = courses.sort((a, b) => a.rank - b.rank);

        return courses;
    }, [allCourses, searchTerm]);

    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks} transparentNav={false}>
            <div className="bg-white border-b-2 border-gray-100">
                <BodyContent>
                    <div className="py-8 px-4">
                        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty text-body-light text-center">
                            Unsere Seminare
                        </h2>
                    </div>
                    <div className="px-4 pb-8">
                        <div className="flex flex-col items-center">
                            <div className="relative max-w-md w-full mb-2">
                                <input
                                    type="text"
                                    placeholder="Stichwortsuche..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="text-center search-input w-full px-4 py-2 pr-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
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
                                    onClick={() => setSearchTerm('KI')}
                                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                                >
                                    KI
                                </button>
                            </div>
                        </div>
                    </div>
                </BodyContent></div>

            <div className="bg-gray-50 py-6">
                <BodyContent>
                    <div className="grid px-6 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course}/>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">Kein Seminar gefunden. Versuchen Sie andere
                                Suchbegriffe.</p>
                        </div>
                    )}
                </BodyContent>
            </div>
        </BlankPageLayout>
    );
}

export default function CoursesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-pulse text-gray-500">Seminare werden geladen...</div>
                </div>
            </div>
        }>
            <CoursesPageContent/>
        </Suspense>
    );
}