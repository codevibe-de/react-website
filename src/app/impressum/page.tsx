import React from 'react';
import PageLayoutWithBanner from '@/components/PageLayoutWithBanner';

export const metadata = {
  title: 'Impressum | Codevibe',
  description: 'Impressum und rechtliche Hinweise für Codevibe IT-Seminare',
};

export default function ImpressumPage() {
  return (
    <PageLayoutWithBanner title="Impressum">
      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-headings">Angaben gemäß § 5 TMG</h2>
          <div className="mb-4">
            <strong>Codevibe IT-Seminare</strong><br />
            Am Höchberg 65<br />
            97234 Reichenberg
          </div>
          
          <div className="mb-4">
            <strong>Vertreten durch:</strong><br />
            Thomas Auinger
          </div>
          
          <div className="mb-4">
            <strong>Kontakt:</strong><br />
            Telefon: 0931-73040586<br />
            E-Mail: info@codevibe.de
          </div>
          
          <div className="mb-4">
            <strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE321482421
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-headings">Haftungsausschluss</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-headings">Haftung für Inhalte</h3>
          <p className="mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
            Tätigkeit hinweisen.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-headings">Haftung für Links</h3>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung 
            auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
            Verlinkung nicht erkennbar.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-headings">Urheberrecht</h3>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite 
            sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-headings">Datenschutz</h3>
          <p className="mb-4">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. 
            Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-headings">Google Analytics</h3>
          <p className="mb-4">
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (&quot;Google&quot;).
            Google Analytics verwendet sog. &quot;Cookies&quot;, Textdateien, die auf Ihrem Computer gespeichert
            werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den 
            Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an 
            einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-headings">Bildnachweise</h2>
          <p className="mb-4">
            Diese Seite nutzt eigene Bilder und digitale Assets aus folgenden Quellen:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><a href="https://www.freepik.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.freepik.com/</a></li>
            <li>Blue and White Bokeh Lights (Unsplash)</li>
            <li>Pink Metal Boards (Unsplash)</li>
          </ul>
        </section>
      </div>
    </PageLayoutWithBanner>
  );
}