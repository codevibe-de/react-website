import Link from 'next/link';
import {getFeaturedCourses} from '@/lib/courses';
import CourseCard from '@/components/CourseCard';
import DefaultLayout from "@/layouts/DefaultLayout";
import {HeroContent} from "@/types/HeroContent";
import Banner from "@/components/Banner";
import {pageDataService} from "@/lib/PageDataService";

export default function Home() {
    const homePageData = pageDataService.getHomePageData();
    const featuredCourses = getFeaturedCourses();
    const heroContent: HeroContent = {
        title: "KI-getriebene Entwicklung",
        subtitle: "NEU -- ein 2-stündiger Walkthrough mit Claude Code und Junie.",
        backgroundImageUrl: "/blurry-background-new-darker.jpg",
        height: "60vh",
        overlayTransparency: 0,
        cta: {
            label: "Mehr erfahren",
            href: "#",
            classes: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        }
    }
    return (
        <DefaultLayout
            navLinks={homePageData.topNavLinks}
            footerLinks={homePageData.footerNavLinks}
            transparentNav={true}
        >
            <Banner backgroundImageUrl={heroContent.backgroundImageUrl} height={heroContent.height}
                    overlayTransparency={heroContent.overlayTransparency} topGradient={false}>
                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-white text-5xl mb-6 font-family-outfit text-shadow-lg">Code-Skills für die
                        KI-Revolution</h1>
                    <p className="text-white text-2xl mb-8 max-w-3xl mx-auto text-shadow-md">
                        Von den Grundlagen bis zur Expertenstufe – unsere modernen Kurse verbinden Coding Know-How
                        mit KI-Tools für zeitgemäße Softwareentwicklung
                    </p>
                    <Link
                        href="/courses"
                        className="bg-primary hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                    >
                        Alle Kurse ansehen
                    </Link>
                </div>
            </Banner>
            <div className="min-h-screen">
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl text-body-light font-bold text-center mb-12">Populär</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredCourses.map(course => (
                                <CourseCard key={course.id} course={course}/>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8" style={{color: '#66347F'}}>Über Codevibe</h2>
                        <p className="text-lg mb-8" style={{color: '#2A2557'}}>
                            Wir sind ein Team erfahrener Softwareentwickler und Trainer, die ihr Wissen
                            leidenschaftlich gerne weitergeben. Unsere Kurse sind praxisorientiert und
                            helfen Entwicklern dabei, ihre Fähigkeiten gezielt zu erweitern.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                     style={{backgroundColor: '#66347F20'}}>
                                    <span className="text-2xl">👩‍💻</span>
                                </div>
                                <h3 className="font-semibold mb-2" style={{color: '#66347F'}}>Erfahrene Trainer</h3>
                                <p style={{color: '#2A2557'}}>Professionelle Entwickler mit jahrelanger
                                    Praxiserfahrung</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                     style={{backgroundColor: '#66347F20'}}>
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="font-semibold mb-2" style={{color: '#66347F'}}>Praxisorientiert</h3>
                                <p style={{color: '#2A2557'}}>Hands-on Training mit realen Projekten und Use Cases</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                     style={{backgroundColor: '#66347F20'}}>
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="font-semibold mb-2" style={{color: '#66347F'}}>Moderne Technologien</h3>
                                <p style={{color: '#2A2557'}}>Aktuelle Tools und Best Practices aus der Industrie</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </DefaultLayout>
    );
}
