import React from 'react';
import {notFound} from 'next/navigation';
import {getCourseById} from '@/lib/courses';
import {Course, DurationUnit} from '@/types/Course';
import {pageDataService} from "@/lib/PageDataService";
import {PricingService} from "@/lib/PricingService";
import BlankPageLayout from "@/layouts/BlankPageLayout";
import Banner from "@/components/Banner";
import TextBlockComponent from '@/components/TextBlockComponent';

interface CourseDetailPageProps {
    params: Promise<{ slug: string }>;
}

function extractCourseIdFromSlug(slug: string): string {
    // Match course ID pattern like "j01", "g02", "k01", etc. (without dash) at the beginning of slug
    const match = slug.match(/^([a-z]\d+)/i);
    return match ? match[1].toUpperCase() : slug.split('-')[0].toUpperCase();
}

function createEmailSubject(course: Course): string {
    return `Anfrage für Seminar: ${course.id} - ${course.title}`;
}

const pageData = pageDataService.getCoursesPageData();

// export async function generateStaticParams() {
//     return pageData.courses.map((course) => ({
//         slug: `${course.id.toLowerCase()}-${course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
//     }));
// }

export default async function CourseDetailPage({params}: CourseDetailPageProps) {
    const {slug} = await params;
    const courseId = extractCourseIdFromSlug(slug);
    const course = getCourseById(pageData.courses, courseId);

    if (!course) {
        notFound();
    }

    const emailSubject = encodeURIComponent(createEmailSubject(course));
    const emailHref = `mailto:sales@codevibe.de?subject=${emailSubject}`;

    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks}>
            <Banner
                backgroundImageUrl={course.backgroundImageUrl || '/abstract-image-with-curved-shapes-blend-light-pink-hues-that-create-mesmerizing-background-generative-ai.jpg'}
                overlayTransparency={8} topGradient={false}>
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-family-outfit text-shadow-lg">
                        {course.title}
                    </h1>
                    <p className="text-lg sm:text-xl mt-4 md:text-2xl max-w-3xl mx-auto text-shadow-md">
                        Detaillierte Informationen zum Seminar
                    </p>
                </div>
            </Banner>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Beschreibung</h2>
                            <TextBlockComponent textBlock={course.description}
                                                className="text-gray-700 leading-relaxed"/>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Lernziele</h2>
                            <TextBlockComponent textBlock={course.goal} className="text-gray-700 leading-relaxed"/>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Zielgruppe</h2>
                            <TextBlockComponent textBlock={course.targetAudience}
                                                className="text-gray-700 leading-relaxed"/>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Seminarübersicht</h2>
                            <TextBlockComponent textBlock={course.outline} className="text-gray-700 leading-relaxed"/>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                            <h3 className="text-xl font-bold mb-4">Seminarinformationen</h3>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <span className="text-gray-600">Dauer:</span>
                                    <span className="font-semibold ml-2">
                    {course.duration} {course.durationUnit === DurationUnit.Hours
                                        ? (course.duration === 1 ? 'Stunde' : 'Stunden')
                                        : (course.duration === 1 ? 'Tag' : 'Tage')
                                    }
                  </span>
                                </div>

                                <div>
                                    <span className="text-gray-600">Einzelperson:</span>
                                    <span className="font-semibold ml-2">
                                        {(() => {
                                            const price = PricingService.getPricePerParticipant(course);
                                            return price !== null ? `${price.toLocaleString()} €` : 'auf Anfrage';
                                        })()}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-gray-600">Inhouse:</span>
                                    <span className="font-semibold ml-2">
                                        {(() => {
                                            const price = PricingService.getPriceInhouse(course);
                                            return price !== null ? `${price.toLocaleString()} €` : 'Auf Anfrage';
                                        })()}
                                    </span>
                                </div>
                            </div>

                            <a href={emailHref}
                               className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
                            >
                                Seminar anfragen
                            </a>

                            <p className="text-sm text-gray-500 mt-3 text-center">
                                Kontaktieren Sie uns für Termine und weitere Informationen
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BlankPageLayout>
    );
}