import {ReferenceContent} from "@/types/ReferenceContent";
import {CallToAction} from "@/types/CallToAction";
import {BodyContent} from "@/types/BodyContent";

export type PostsContent = {
    title: string;
    posts: PostContent[]
}

export type PostContent = {
    id: number;
    title: string;
    description: string;
    metaTitle?: string;
    metaDescription?: string;
    slug: string;
    imageUrl: string;
    body: BodyContent;
    references?: ReferenceContent[];
    cta?: CallToAction;
}