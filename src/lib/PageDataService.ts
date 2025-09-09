import {HomePageData, PageData, SolutionPageData, SolutionsPageData} from "@/types/PageTypes";
import homepageJson from '@/content/homepage.json';
import commonPageDataJson from '@/content/commonPageData.json';
import imprintPageData from '@/content/imprintPage.json' assert {type: 'json'};
import dataPrivacyPageData from '@/content/dataPrivacy.json' assert {type: 'json'};

class PageDataService {

    getHomePageData(): HomePageData {
        const pageData = commonPageDataJson as HomePageData;
        pageData.title = homepageJson.title;
        pageData.hero = homepageJson.hero;
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
