import {ReactNode} from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {NavLink} from "@/types/NavLink";

type DefaultLayoutProps = {
    transparentNav?: boolean;
    navLinks: NavLink[];
    footerLinks: NavLink[];
    children?: ReactNode;
}

export default function DefaultLayout({transparentNav, navLinks, footerLinks, children}: DefaultLayoutProps) {
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