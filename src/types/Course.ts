export enum CourseType {
  Seminar = 'Seminar',
  Rave = 'Rave',
}

export enum DurationUnit {
  Hours = 'Hours',
  Days = 'Days',
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
  durationUnit?: DurationUnit;
  featured: boolean;
  type: CourseType;
  backgroundImageUrl?: string;
}
