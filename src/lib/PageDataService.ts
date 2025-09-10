import {CoursesPageData, HomePageData, PageData} from "@/types/PageTypes";
import homepageJson from '@/content/homepage.json';
import coursesPageJson from '@/content/coursesPage.json';
import commonPageDataJson from '@/content/commonPageData.json';
import imprintPageData from '@/content/imprintPage.json' assert {type: 'json'};
import dataPrivacyPageData from '@/content/dataPrivacy.json' assert {type: 'json'};
import {getFeaturedCourses} from "@/lib/courses";
import {Course, CourseType, DurationUnit} from "@/types/Course";

class PageDataService {

    private convertRawCourses(rawCourses: unknown[]): Course[] {
        return rawCourses.map(course => {
            const rawCourse = course as Record<string, unknown>;
            return {
                ...rawCourse,
                type: rawCourse.type === 'Seminar' ? CourseType.Seminar : CourseType.Rave,
                durationUnit: rawCourse.durationUnit === 'Hours' ? DurationUnit.Hours : DurationUnit.Days
            } as Course;
        });
    }

    getHomePageData(): HomePageData {
        const pageData = commonPageDataJson as HomePageData;
        pageData.title = homepageJson.title;
        pageData.hero = homepageJson.hero;
        const convertedCourses = this.convertRawCourses(coursesPageJson.courses);
        pageData.featuredCourses = getFeaturedCourses(convertedCourses);
        return pageData;
    }

    getCoursesPageData(): CoursesPageData {
        const pageData = commonPageDataJson as CoursesPageData;
        pageData.title = coursesPageJson.title;
        pageData.hero = coursesPageJson.hero;
        pageData.courses = this.convertRawCourses(coursesPageJson.courses);
        return pageData;
    }

    getPageData(path: string | null): PageData | undefined {
        if (!path) {
            return undefined;
        }
        const slug = path.replace(/^\//, '').replace(/\/$/, '');
        const pageData = commonPageDataJson as PageData;
        switch (slug) {
            case 'impressum':
                pageData.title = imprintPageData.title;
                pageData.body = imprintPageData.body;
                return pageData;
            case 'datenschutz':
                pageData.title = dataPrivacyPageData.title;
                pageData.body = dataPrivacyPageData.body;
                return pageData;
            default:
                return undefined;
        }
    }

}

export const pageDataService = new PageDataService();
