import Link from 'next/link';
import {NavLink} from "@/types/NavLink";

type FooterProps = {
    navLinks?: NavLink[];
};

export default function Footer({navLinks=[]}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Codevibe IT-Seminare</h3>
            <p className="text-gray-400">
              Code Skills für die KI-Revolution
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kurse</h4>
            <ul className="space-y-2 text-gray-400">
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
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400">
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
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>E-Mail: sales@codevibe.de</li>
              <li>Für Kursanfragen und Informationen</li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
}