import {pageDataService} from "@/lib/PageDataService";
import {notFound} from "next/navigation";
import TextBlockComponent from '@/components/TextBlockComponent';
import BlankPageLayout from "@/layouts/BlankPageLayout";
import BodyContainer from "@/layouts/BodyContainer";

export default function DataPrivacyPage() {
    const pageData = pageDataService.getPageData('/impressum')
    if (!pageData) {
        notFound();
    }
    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks} transparentNav={false}>
            <BodyContainer>
                <TextBlockComponent textBlock={pageData.body} className="prose prose-lg max-w-none py-6"/>
            </BodyContainer>
        </BlankPageLayout>
    );
}