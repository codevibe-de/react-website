import {HeroContent} from "@/types/HeroContent";
import Image from "next/image";

type HeroProps = {
    content: HeroContent;
};

export default function Hero({content}: HeroProps) {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-18">
            <Image
                alt=""
                src={content.backgroundImageUrl}
                fill
                className="absolute inset-0 -z-10 object-cover object-right md:object-center"
                priority={true}
                sizes="100vw"
            />
            <div className="absolute inset-0 -z-10 bg-black/20"/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                                className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                            >
                                {content.cta.label}
                            </a>
                        </div>
                    )}
                </div>
                {content.stats &&
                    <div className="mx-auto mt-10 max-w-2xl">
                        <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 lg:grid-cols-4">
                            {content.stats.map((stat) => (
                                <div key={stat.description} className="flex flex-col-reverse gap-1">
                                    <dt className="text-base/7 text-gray-300">{stat.description}</dt>
                                    <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                }
            </div>
        </div>
    )
}
