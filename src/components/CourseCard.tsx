import Link from 'next/link';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const courseSlug = `${course.id.toLowerCase()}-${course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {course.featured && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
            Featured
          </span>
        )}
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          {course.duration} {course.duration === 1 ? 'Tag' : 'Tage'}
        </div>
        <div className="text-lg font-bold text-blue-600">
          €{course.priceSingle.toLocaleString()}
        </div>
      </div>
      
      <Link
        href={`/courses/${courseSlug}`}
        className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Mehr erfahren
      </Link>
    </div>
  );
}