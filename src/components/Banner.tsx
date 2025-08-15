import Image from "next/image";
import { ReactNode } from "react";

type BannerProps = {
    backgroundImageUrl: string;
    height?: number | string;
    overlayTransparency?: number;
    children: ReactNode;
};

export default function Banner({
    backgroundImageUrl,
    height,
    overlayTransparency = 20,
    children
}: BannerProps) {
    const overlayOpacity = overlayTransparency / 100;

    return (
        <div 
            className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-18"
            style={height ? { height } : undefined}
        >
            <Image
                alt=""
                src={backgroundImageUrl}
                fill
                className="absolute inset-0 -z-10 object-cover object-right md:object-center"
                priority={true}
                sizes="100vw"
            />
            <div
                className="absolute inset-0 -z-10 bg-black"
                style={{ opacity: overlayOpacity }}
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center min-h-full">
                {children}
            </div>
        </div>
    );
}