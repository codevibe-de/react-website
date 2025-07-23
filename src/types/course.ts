export enum CourseType {
  Seminar = 'Seminar',
  Rave = 'Rave'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  goal: string;
  targetAudience: string;
  outline: string;
  priceSingle: number;
  priceInhouse: number;
  duration: number;
  featured: boolean;
  type: CourseType;
}

export interface CoursePreview {
  id: string;
  title: string;
  description: string;
  priceSingle: number;
  duration: number;
  featured: boolean;
  type: CourseType;
}