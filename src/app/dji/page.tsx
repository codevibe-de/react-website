import DefaultLayout from "@/layouts/DefaultLayout";
import Hero from "@/components/Hero";
import {HeroContent} from "@/types/HeroContent";

export default function DjiPage() {
    const heroContent:HeroContent = {
        title: "DJI Kurse",
        subtitle: "Entdecken Sie unsere spezialisierten Kurse für DJI Drohnen und Softwareentwicklung.",
        backgroundImageUrl: "/philip-oroni-8kpm32LzzCU-unsplash.jpg",
        cta: {
            label: "Jetzt starten",
            href: "#",
            classes: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        }
    }
    return (
        <DefaultLayout pushContentDown={false}>
            <Hero content={heroContent}/>
            <div
                className="h-[60vh] bg-gradient-to-bl from-[#37306B] to-[#9E4784] flex items-center justify-center text-center">
                <div className="text-white px-4">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to CodeVibe</h1>
                    <p className="text-lg max-w-xl mx-auto">
                        Crafting elegant code & vibrant designs that resonate.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-center my-8">DJI Courses</h2>
                <p className="text-lg text-center max-w-2xl mx-auto mb-12">
                    Entdecken Sie unsere spezialisierten Kurse für DJI Drohnen und Softwareentwicklung.
                </p>
                {/* Hier können Sie spezifische Kurse oder Inhalte für DJI hinzufügen */}
            </div>
        </DefaultLayout>
    );
}