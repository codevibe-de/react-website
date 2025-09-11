import {ReactNode} from "react";

type ContentWithImagesProps = {
    introLine: string;
    headLine: string;
    introText: string;
    subHeadLine: string;
    mainText: string;
    overlayTransparency?: number;
    topGradient?: boolean;
    children: ReactNode;
};

export default function ContentWithImages() {
    return (
        <div className="overflow-hidden bg-white py-12 dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                        KI krempelt die Softwareentwicklung um
                    </h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
                        Wo früher klassisches Coding im Mittelpunkt stand, halten heute intelligente Tools Einzug,
                        welche die Rollen und Prozesse neu definieren.
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                            Unser Ansatz
                        </h2>
                        <div className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                            <p className="mt-2">
                                Wir haben die Chance genutzt und unsere Trainings neu konzipiert – mit einem Ansatz, der
                                den gesamten Entwicklungsprozess im Zeitalter von KI neu denkt.
                            </p>
                            <p className="mt-2">
                                Der Kern bleibt dabei unverändert: Ein Kunde hat ein Problem, und am Ende muss eine
                                verlässliche Software-Lösung verfügbar sein.
                            </p>
                            <p className="mt-2">
                                Was sich verändert, ist der Weg dorthin:
                            </p>
                            <ul className="mt-4 list-disc list-inside space-y-2">
                                <li>KI als Partner im Entwicklungsalltag,</li>
                                <li>moderne Sprachkonzepte als stabiles Fundament,</li>
                                <li>und neue Methoden, um Software schneller und besser bereitzustellen.</li>
                            </ul>
                            <p className="mt-2">
                                Unsere Kurse geben Entwickler:innen genau diese Skills – für nachhaltige Lösungen in
                                einer
                                von KI geprägten Softwarewelt.
                            </p>

                        </div>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div
                            className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                            <div
                                className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                                <img
                                    alt=""
                                    src="/claude-code4.png"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div
                                className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div
                                className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div
                                className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
