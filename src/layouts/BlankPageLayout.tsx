import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {NavLink} from "@/types/NavLink";

type BlankPageLayoutProps = {
    children: React.ReactNode;
    navLinks: NavLink[];
    footerLinks: NavLink[];
    transparentNav?: boolean;
};


export default function BlankPageLayout({
                                            children,
                                            transparentNav = false,
                                            navLinks,
                                            footerLinks
                                        }: BlankPageLayoutProps) {
    return (
        <>
            <Header navLinks={navLinks} transparentNav={transparentNav}/>
            <main className="px-6 lg:px-8 py-12">
                {children}
            </main>
            <Footer navLinks={footerLinks}/>
        </>
    );
}