import {pageDataService} from "@/lib/PageDataService";
import {notFound} from "next/navigation";
import MarkdownContent from '@/components/MarkdownContent';
import BlankPageLayout from "@/layouts/BlankPageLayout";
import BodyContainer from "@/layouts/BodyContainer";

export default function DataPrivacyPage() {
    const pageData = pageDataService.getPageData('/datenschutz')
    if (!pageData) {
        notFound();
    }
    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks} transparentNav={false}>
            <BodyContainer>
                <MarkdownContent body={pageData.body} className="prose prose-lg max-w-none py-6"/>
            </BodyContainer>
        </BlankPageLayout>
    );
}