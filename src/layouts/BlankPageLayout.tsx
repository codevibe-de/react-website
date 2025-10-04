import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {NavLink} from "@/types/NavLink";

type BlankPageLayoutProps = {
    transparentNav?: boolean;
    navLinks: NavLink[];
    footerLinks: NavLink[];
    children: React.ReactNode;
};


export default function BlankPageLayout({
                                            transparentNav = false,
                                            navLinks,
                                            footerLinks,
                                            children
                                        }: BlankPageLayoutProps) {
    return (
        <>
            <Header navLinks={navLinks} transparentNav={transparentNav}/>
            {children}
            <Footer navLinks={footerLinks}/>
        </>
    );
}