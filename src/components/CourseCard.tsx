import Link from 'next/link';
import { Course, CourseType } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const courseSlug = `${course.id.toLowerCase()}-${course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

  return (
    <Link href={`/courses/${courseSlug}`} className="block">
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer bg-white hover:bg-blue-50">
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            {course.featured && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Featured
              </span>
            )}
            <span className={`inline-block text-xs px-2 py-1 rounded-full ${
              course.type === CourseType.Seminar 
                ? 'bg-green-100 text-green-800' 
                : 'bg-purple-100 text-purple-800'
            }`}>
              {course.type}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {course.duration} {course.duration === 1 ? 'Tag' : 'Tage'}
          </div>
          <div className="text-lg font-bold text-blue-600">
            €{course.priceSingle.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}