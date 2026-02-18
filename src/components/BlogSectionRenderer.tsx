import {BlogSection, BlogSectionType} from '@/types/BlogPost';
import Image from 'next/image';
import React from 'react';
import CodeBlock from './CodeBlock';

interface BlogSectionRendererProps {
    section: BlogSection;
}

export default function BlogSectionRenderer({section}: BlogSectionRendererProps) {
    switch (section.type) {
        case BlogSectionType.Heading:
            const HeadingTag = `h${section.level}` as keyof React.JSX.IntrinsicElements;
            const headingClasses = {
                1: 'text-4xl font-bold mt-8 mb-4 text-gray-900',
                2: 'text-3xl font-bold mt-6 mb-3 text-gray-900',
                3: 'text-2xl font-semibold mt-5 mb-3 text-gray-800',
                4: 'text-xl font-semibold mt-4 mb-2 text-gray-800',
                5: 'text-lg font-semibold mt-3 mb-2 text-gray-700',
                6: 'text-base font-semibold mt-2 mb-2 text-gray-700',
            };

            return (
                <HeadingTag className={headingClasses[section.level]}>
                    {section.content}
                </HeadingTag>
            );

        case BlogSectionType.Paragraph:
            return (
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    {section.content}
                </p>
            );

        case BlogSectionType.Code:
            return (
                <CodeBlock
                    code={section.code}
                    language={section.language}
                    caption={section.caption}
                />
            );

        case BlogSectionType.Image:
            return (
                <figure className="my-8">
                    <div className="relative w-full" style={{minHeight: '300px'}}>
                        <Image
                            src={section.src}
                            alt={section.alt}
                            width={800}
                            height={400}
                            className="rounded-lg w-full h-auto"
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                    {section.caption && (
                        <figcaption className="text-sm text-gray-500 mt-3 text-center italic">
                            {section.caption}
                        </figcaption>
                    )}
                </figure>
            );

        default:
            return null;
    }
}
