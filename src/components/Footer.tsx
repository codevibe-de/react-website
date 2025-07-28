import Link from 'next/link';

export default function Footer() {
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
              <li><Link href="/courses" className="hover:text-white">Alle Kurse</Link></li>
              <li><Link href="/courses?filter=languages" className="hover:text-white">Programmiersprachen</Link></li>
              <li><Link href="/courses?filter=tools" className="hover:text-white">Dev Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">Über uns</Link></li>
              <li><Link href="/contact" className="hover:text-white">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
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
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Codevibe IT-Seminare. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}