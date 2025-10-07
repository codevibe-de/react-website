import {TextBlock} from "@/types/TextBlock";
import TextBlockRenderer from "@/components/TextBlockRenderer";
import Image from "next/image";

type ContentWithImagesProps = {
    headLine: string;
    introText: string;
    subHeadLine: string;
    mainText: TextBlock[];
    imageUrls: string[];
};

export default function IllustratedText({
                                            headLine,
                                            introText,
                                            subHeadLine,
                                            mainText,
                                            imageUrls
                                        }: ContentWithImagesProps) {
    return (
        <div className="overflow-hidden bg-white py-12">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty text-body-light">
                        {headLine}
                    </h2>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">
                        {introText}
                    </p>
                </div>
                <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
                            {subHeadLine}
                        </h2>
                        <div className="mt-6 text-base/7 text-gray-600">
                            {mainText.map((block, index) => (
                                <TextBlockRenderer key={index} block={block} />
                            ))}
                        </div>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div
                            className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                            {imageUrls.map((url, index) => (
                                <div
                                    key={url}
                                    className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${
                                        index % 2 === 1 ? '-mt-8 lg:-mt-40' : ''
                                    }`}>
                                    <Image
                                        alt=""
                                        src={url}
                                        width={400}
                                        height={400}
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                                        className="w-full h-full object-cover"
                                        quality={90}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
