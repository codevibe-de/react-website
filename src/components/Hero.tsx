import {HeroContent} from "@/types/HeroContent";
import Banner from "@/components/Banner";

type HeroProps = {
    content: HeroContent;
};

export default function Hero({content}: HeroProps) {
    return (
        <Banner
            backgroundImageUrl={content.backgroundImageUrl}
            height={content.height}
            overlayTransparency={content.overlayTransparency}
        >
            <div className="mx-auto max-w-2xl">
                <h2 className="text-7xl font-semibold tracking-tight text-white">{content.title}</h2>
                <p className="mt-8 text-2xl/8 font-medium text-pretty text-gray-100">
                    {content.subtitle}
                </p>
                {content.cta && (
                    <div className="mt-10">
                        <a
                            href={content.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-12 py-3 text-lg font-semibold text-white rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {content.cta.label}
                        </a>
                    </div>
                )}
            </div>
        </Banner>
    )
}
