import Image from "next/image";
import { ReactNode } from "react";

type BannerProps = {
    backgroundImageUrl: string;
    height?: number | string;
    overlayTransparency?: number;
    topGradient?: boolean;
    children: ReactNode;
};

export default function Banner({
    backgroundImageUrl,
    height,
    overlayTransparency = 20,
    topGradient = true,
    children
}: BannerProps) {
    const overlayOpacity = overlayTransparency / 100;

    return (
        <div 
            className="relative isolate overflow-hidden py-20 sm:py-24 md:py-28 wave-transition flex items-center"
            style={height ? { minHeight: height } : undefined}
        >
            <Image
                alt=""
                src={backgroundImageUrl}
                fill
                className="absolute inset-0 -z-10 object-cover object-left rounded-b-2xl"
                priority={true}
                quality={97}
            />
            <div
                className="absolute inset-0 -z-10 bg-black"
                style={{ opacity: overlayOpacity }}
            />
            {topGradient && (
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 25%)'
                    }}
                />
            )}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center min-h-full">
                {children}
            </div>
        </div>
    );
}