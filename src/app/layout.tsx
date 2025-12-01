import type {Metadata} from "next";
import {Inter, Outfit, Rock_Salt} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const fontHero = Rock_Salt({
    variable: "--font-hero",
    subsets: ["latin"],
    weight: "400",
})

export const metadata: Metadata = {
    title: "Codevibe - Professionelle Entwicklerschulungen",
    description: "Lernen Sie Java, Kotlin und Go effizient und mit Spaß. Dazu Trainings für Dev-Tools wie Maven, IntelliJ IDEA und Git.",
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body className={`font-sans ${inter.variable} ${outfit.variable} ${fontHero.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
