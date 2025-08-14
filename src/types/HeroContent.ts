import {CallToAction} from "@/types/CallToAction";

export type HeroContent = {
    backgroundImageUrl: string;
    title: string;
    subtitle: string;
    /**
     * Optional fixed height for the hero section. Can be a number (pixels) or any valid CSS size string (e.g., '60vh', '480px').
     */
    height?: number | string;
    /**
     * Optional overlay transparency (0-100, default 20)
     */
    overlayTransparency?: number;
    cta?: CallToAction;
    stats?: {
        value: string;
        description: string;
    }[];
};