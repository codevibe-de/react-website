import type {Metadata} from "next";
import {Inter, Outfit, Rock_Salt, Rubik_Dirt, Rubik_Scribble, Sonsie_One} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

// const fontHero = Sonsie_One({
//     variable: "--font-hero",
//     subsets: ["latin"],
//     weight: "400",
// })
const fontHero = Rock_Salt({
    variable: "--font-hero",
    subsets: ["latin"],
    weight: "400",
})

export const metadata: Metadata = {
    title: "Codevibe - Professionelle Entwicklerschulungen",
    description: "Lernen Sie Java, Kotlin und Go effizient und mit Spaß. Dazu Trainings für Dev-Tools wie Maven, IntelliJ IDEA und Git.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body
            className={`font-sans ${inter.variable} ${outfit.variable} ${fontHero.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
