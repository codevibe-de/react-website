import {TextBlock} from "@/types/TextBlock";

export enum CourseType {
    Seminar = 'Seminar',
    Rave = 'Rave',
}

export enum DurationUnit {
    Hours = 'Hours',
    Days = 'Days',
}

export enum PricingLevel {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
}

export interface Course {
    id: string;
    rank: number;
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
    pricing?: PricingLevel;
}
