import {TextBlock} from "@/types/TextBlock";

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
    summary?: string;
    description: TextBlock;
    goal: TextBlock;
    targetAudience: TextBlock;
    outline: TextBlock;
    priceSingle: number;
    priceInhouse: number;
    duration: number;
    durationUnit?: DurationUnit;
    featured: boolean;
    type: CourseType;
    backgroundImageUrl?: string;
}
