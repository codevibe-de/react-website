import Link from 'next/link';
import {Course, CourseType, DurationUnit} from '@/types/Course';
import Badge from "@/components/Badge";

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({course}: CourseCardProps) {
    const courseSlug = `${course.id.toLowerCase()}-${course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

    return (
        <Link href={`/seminare/${courseSlug}`} className="block h-full group">
            <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer bg-white h-full flex flex-col overflow-hidden">
                {course.backgroundImageUrl && (
                    <div
                        className="relative w-full h-16 rounded-t-lg flex items-center justify-start p-3 course-card-bg"
                        style={{
                            backgroundImage: `url(${course.backgroundImageUrl})`,
                            backgroundSize: '140%',
                            backgroundPosition: '0% center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {course.type === CourseType.Seminar && (
                            <Badge color={"green"}>{course.type}</Badge>
                        )}
                        {course.type === CourseType.Rave && (
                            <Badge color={"purple"}>{course.type}</Badge>
                        )}
                        {course.featured && (
                            <Badge color={"red"}>NEU</Badge>
                        )}
                    </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                <div className="flex-grow">
                    {!course.backgroundImageUrl && (
                        <div className="flex gap-2 mb-2">
                            <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                                course.type === CourseType.Seminar
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-purple-100 text-purple-800'
                            }`}>
                              {course.type}
                            </span>
                            {course.featured && (
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    Featured
                                </span>
                            )}
                        </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-body-light group-hover:text-primary-700 transition-colors">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.summary}</p>
                </div>

                <div className="mt-auto">
                    <div className="text-sm text-gray-500">
                        {course.duration} {course.durationUnit === DurationUnit.Hours
                        ? (course.duration === 1 ? 'Stunde' : 'Stunden')
                        : (course.duration === 1 ? 'Tag' : 'Tage')
                    }
                    </div>
                </div>
                </div>
            </div>
        </Link>
    );
}