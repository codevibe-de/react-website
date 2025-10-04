import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import DefaultLayout from "@/layouts/DefaultLayout";
import Banner from "@/components/Banner";
import {pageDataService} from "@/lib/PageDataService";
import BodyContainer from "@/layouts/BodyContainer";
import IllustratedText from "@/components/IllustratedText";

export default function Home() {
    const homePageData = pageDataService.getHomePageData();
    return (
        <DefaultLayout
            navLinks={homePageData.topNavLinks}
            footerLinks={homePageData.footerNavLinks}
            transparentNav={true}
        >
            <Banner backgroundImageUrl={homePageData.hero.backgroundImageUrl} height="60vh">
                <div className="max-w-6xl mx-auto px-4 pt-8 text-white text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-hero leading-snug text-shadow-lg">
                        {homePageData.hero.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow-md">
                        {homePageData.hero.subtitle}
                    </p>
                    {homePageData.hero.cta && (
                        <Link
                            href={homePageData.hero.cta.href}
                            className="bg-primary hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                        >
                            {homePageData.hero.cta.label}
                        </Link>
                    )}
                </div>
            </Banner>

            <BodyContainer>
                <IllustratedText introText={homePageData.illustratedText.introText}
                                 headLine={homePageData.illustratedText.headLine}
                                 subHeadLine={homePageData.illustratedText.subHeadLine}
                                 mainText={homePageData.illustratedText.mainText}
                                 imageUrls={homePageData.illustratedText.imageUrls}>
                </IllustratedText>

                <div className="max-w-6xl py-12 mx-auto px-4">
                    <h2 className="text-3xl text-body-light font-bold text-center mb-12">Populäre Kurse</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {homePageData.featuredCourses.map(course => (
                            <CourseCard key={course.id} course={course}/>
                        ))}
                    </div>
                </div>

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
            </BodyContainer>
        </DefaultLayout>
    );
}
