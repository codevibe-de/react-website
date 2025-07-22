import { Course } from '@/types/course';
import coursesData from '@/data/courses.json';

export function getAllCourses(): Course[] {
  return coursesData as Course[];
}

export function getFeaturedCourses(): Course[] {
  return coursesData.filter(course => course.featured) as Course[];
}

export function getCourseById(id: string): Course | undefined {
  return coursesData.find(course => course.id.toLowerCase() === id.toLowerCase()) as Course | undefined;
}