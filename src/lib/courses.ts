import {Course} from '@/types/Course';

export function getFeaturedCourses(courses: Course[]): Course[] {
    return courses.filter(course => course.featured) as Course[];
}

export function getCourseById(courses: Course[], id: string): Course | undefined {
    return courses.find(course => course.id.toLowerCase() === id.toLowerCase()) as Course | undefined;
}