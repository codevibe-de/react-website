import Link from 'next/link';
import {NavLink} from "@/types/NavLink";

type FooterProps = {
    navLinks?: NavLink[];
};

export default function Footer({navLinks = []}: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 text-gray-400">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Codevibe IT-Seminare</h3>
                        <p>
                            Developer Skills für die KI&#8209;Revolution
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Kurse</h4>
                        <ul className="space-y-2">
                            {navLinks
                                .filter(link => link.section === 'offerings')
                                .map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-white">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Unternehmen</h4>
                        <ul className="space-y-2">
                            {navLinks
                                .filter(link => link.section === 'company')
                                .map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-white">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
                        <ul className="space-y-2">
                            {navLinks
                                .filter(link => link.section === 'contact')
                                .map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-white">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}