import {NavLink} from "@/types/NavLink";
import {BodyContent} from "@/types/BodyContent";
import {HeroContent} from "@/types/HeroContent";
import {Course} from "@/types/Course";

interface PageMeta {
    title: string;
    description: string;
}

export interface PageData {
    title: string;
    meta?: PageMeta;
    topNavLinks: NavLink[];
    footerNavLinks: NavLink[];
    body?: BodyContent;
}

export interface HomePageData extends PageData {
    hero: HeroContent;
    featuredCourses: Course[];
}

export interface CoursesPageData extends PageData {
    hero: HeroContent;
    courses: Course[];
}

