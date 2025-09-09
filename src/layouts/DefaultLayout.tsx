import {ReactNode} from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {NavLink} from "@/types/NavLink";

type DefaultLayoutProps = {
    children?: ReactNode;
    navLinks: NavLink[];
    footerLinks: NavLink[];
    transparentNav?: boolean;
}

export default function DefaultLayout({children, transparentNav, navLinks, footerLinks}: DefaultLayoutProps) {
    return (
        <>
            <Header navLinks={navLinks} transparentNav={transparentNav}/>
            <main>
                {children}
            </main>
            <Footer navLinks={footerLinks}/>
        </>
    );
}