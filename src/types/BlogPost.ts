export enum BlogSectionType {
    Heading = 'heading',
    Paragraph = 'paragraph',
    Code = 'code',
    Image = 'image'
}

export interface HeadingSection {
    type: BlogSectionType.Heading;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
}

export interface ParagraphSection {
    type: BlogSectionType.Paragraph;
    content: string;
}

export interface CodeSection {
    type: BlogSectionType.Code;
    language: string;
    code: string;
    caption?: string;
}

export interface ImageSection {
    type: BlogSectionType.Image;
    src: string;
    alt: string;
    caption?: string;
}

export type BlogSection = HeadingSection | ParagraphSection | CodeSection | ImageSection;

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    coverImage?: string;
    tags?: string[];
    sections: BlogSection[];
}

export interface BlogListItem {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    coverImage?: string;
    tags?: string[];
}
