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

                <IllustratedText
                    introText={homePageData.illustratedText.introText}
                    headLine={homePageData.illustratedText.headLine}
                    subHeadLine={homePageData.illustratedText.subHeadLine}
                    mainText={homePageData.illustratedText.mainText}
                    imageUrls={homePageData.illustratedText.imageUrls}>
                </IllustratedText>

                <div className="max-w-6xl py-12 mx-auto px-4">
                    <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty text-body-light text-center">
                        Neue Seminare
                    </h2>
                    <div className="grid px-6 py-12 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {homePageData.featuredCourses.map(course => (
                            <CourseCard key={course.id} course={course}/>
                        ))}
                    </div>
                </div>

            </BodyContainer>
        </DefaultLayout>
    );
}
