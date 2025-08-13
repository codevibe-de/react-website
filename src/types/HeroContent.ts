import {CallToAction} from "@/types/CallToAction";

export type HeroContent = {
    backgroundImageUrl: string;
    title: string;
    subtitle: string;
    cta?: CallToAction;
    stats?: {
        value: string;
        description: string;
    }[];
};