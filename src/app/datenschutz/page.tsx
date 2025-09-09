import {pageDataService} from "@/lib/PageDataService";
import {notFound} from "next/navigation";
import MarkdownContent from '@/components/MarkdownContent';
import BlankPageLayout from "@/layouts/BlankPageLayout";

export default function DataPrivacyPage() {
    const pageData = pageDataService.getPageData('/datenschutz')
    if (!pageData) {
        notFound();
    }
    return (
        <BlankPageLayout navLinks={pageData.topNavLinks} footerLinks={pageData.footerNavLinks} transparentNav={false}>
            <MarkdownContent body={pageData.body} className="prose prose-lg max-w-none"/>
        </BlankPageLayout>
    );
}