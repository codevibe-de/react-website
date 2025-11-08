import React from 'react';
import Image from 'next/image';

interface PageLayoutWithBannerProps {
    children: React.ReactNode;
    title: string;
}

export default function PageLayoutWithBanner({children, title}: PageLayoutWithBannerProps) {
    return (
        <div className="min-h-screen bg-white">
            {/* Banner Image */}
            <div className="w-full h-24 overflow-hidden">
                <Image
                    src="/top-banner.png"
                    alt="Codevibe Banner"
                    width={1536}
                    height={100}
                    className="w-full h-full object-cover"
                    priority
                    quality={99}
                />
            </div>

            {/* Page Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-headings">{title}</h1>
                <div className="bg-white rounded-lg shadow-sm p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}