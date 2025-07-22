'use client';

import { useState, useMemo } from 'react';
import { getAllCourses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const allCourses = getAllCourses();
  
  const filteredCourses = useMemo(() => {
    let courses = allCourses;
    
    // Apply category filter
    if (selectedFilter !== 'all') {
      courses = courses.filter(course => {
        switch (selectedFilter) {
          case 'languages':
            return ['K-01', 'J-01', 'G-01'].includes(course.id);
          case 'tools':
            return ['M-01', 'I-01', 'G-02'].includes(course.id);
          default:
            return true;
        }
      });
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      courses = courses.filter(course =>
        course.title.toLowerCase().includes(lowercaseSearch) ||
        course.description.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    return courses;
  }, [allCourses, searchTerm, selectedFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-eminence-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Unsere Kurse</h1>
          <p className="text-xl">
            Entdecken Sie unser umfassendes Angebot an Entwicklerschulungen
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Suchen Sie nach Kursen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Alle Kategorien</option>
              <option value="languages">Programmiersprachen</option>
              <option value="tools">Dev Tools</option>
            </select>
          </div>
        </div>

        <div className="mb-4 text-gray-600">
          {filteredCourses.length} {filteredCourses.length === 1 ? 'Kurs gefunden' : 'Kurse gefunden'}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Keine Kurse gefunden. Versuchen Sie andere Suchbegriffe.</p>
          </div>
        )}
      </div>
    </div>
  );
}