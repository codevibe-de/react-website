import {ReactNode} from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface LayoutProps {
    children?: ReactNode;
    pushContentDown?: boolean;
}

export default function DefaultLayout({children, pushContentDown}: LayoutProps) {
    return (

        <>
            <Header/>
            <main
                // style={{paddingTop: 'var(--navbar-height)'}}
            >
                {children}
            </main>
            <Footer/>
        </>
    );
}