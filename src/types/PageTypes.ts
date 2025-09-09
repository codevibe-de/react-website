import {NavLink} from "@/types/NavLink";
import {BodyContent} from "@/types/BodyContent";
import {HeroContent} from "@/types/HeroContent";
import {PostContent, PostsContent} from "@/types/PostsContent";

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
}

export interface SolutionsPageData extends PageData {
    solutions: PostsContent;
}

export interface SolutionPageData extends PageData {
    hero: HeroContent;
    solution: PostContent;
}
