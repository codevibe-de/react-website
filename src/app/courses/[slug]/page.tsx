import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllCourses, getCourseById } from '@/lib/courses';
import { Course } from '@/types/course';

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

function extractCourseIdFromSlug(slug: string): string {
  return slug.split('-')[0];
}

function createEmailSubject(course: Course): string {
  return `Anfrage für Kurs: ${course.id} - ${course.title}`;
}

function formatOutline(outline: string): React.ReactNode {
  return outline.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index < outline.split('\n').length - 1 && <br />}
    </span>
  ));
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: `${course.id}-${course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
  }));
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const courseId = extractCourseIdFromSlug(slug);
  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const emailSubject = encodeURIComponent(createEmailSubject(course));
  const emailHref = `mailto:sales@codevibe.de?subject=${emailSubject}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/courses"
            className="inline-flex items-center text-blue-200 hover:text-white mb-4"
          >
            ← Zurück zu allen Kursen
          </Link>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <div className="flex items-center gap-6 text-blue-100">
            <span>{course.duration} {course.duration === 1 ? 'Tag' : 'Tage'}</span>
            <span>Kurs-ID: {course.id}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Beschreibung</h2>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Lernziele</h2>
              <p className="text-gray-700 leading-relaxed">{course.goal}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Zielgruppe</h2>
              <p className="text-gray-700 leading-relaxed">{course.targetAudience}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Kursübersicht</h2>
              <div className="prose prose-gray max-w-none">
                {formatOutline(course.outline)}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Kursinformationen</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-gray-600">Dauer:</span>
                  <span className="font-semibold ml-2">
                    {course.duration} {course.duration === 1 ? 'Tag' : 'Tage'}
                  </span>
                </div>
                
                <div>
                  <span className="text-gray-600">Einzelperson:</span>
                  <span className="font-semibold ml-2 text-blue-600">
                    €{course.priceSingle.toLocaleString()}
                  </span>
                </div>
                
                <div>
                  <span className="text-gray-600">Inhouse:</span>
                  <span className="font-semibold ml-2 text-blue-600">
                    €{course.priceInhouse.toLocaleString()}
                  </span>
                </div>
              </div>

              <a
                href={emailHref}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Kurs anfragen
              </a>
              
              <p className="text-sm text-gray-500 mt-3 text-center">
                Kontaktieren Sie uns für Termine und weitere Informationen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}