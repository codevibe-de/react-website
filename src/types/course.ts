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
}

export interface CoursePreview {
  id: string;
  title: string;
  description: string;
  priceSingle: number;
  duration: number;
  featured: boolean;
}