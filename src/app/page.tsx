import Link from 'next/link';
import { getFeaturedCourses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  const featuredCourses = getFeaturedCourses();

  return (
    <div className="min-h-screen">
      <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #37306B 0%, #66347F 100%)'}}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Codevibe</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professionelle Schulungen für Softwareentwickler. Lernen Sie Java, Kotlin und Go 
            effizient und mit Spaß. Dazu Trainings für Dev-Tools wie Maven, IntelliJ IDEA und Git.
          </p>
          <Link 
            href="/courses"
            className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            style={{color: '#66347F'}}
          >
            Alle Kurse ansehen
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#66347F'}}>Featured Kurse</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#66347F'}}>Über Codevibe</h2>
          <p className="text-lg mb-8" style={{color: '#2A2557'}}>
            Wir sind ein Team erfahrener Softwareentwickler und Trainer, die ihr Wissen 
            leidenschaftlich gerne weitergeben. Unsere Kurse sind praxisorientiert und 
            helfen Entwicklern dabei, ihre Fähigkeiten gezielt zu erweitern.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#66347F20'}}>
                <span className="text-2xl">👩‍💻</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#66347F'}}>Erfahrene Trainer</h3>
              <p style={{color: '#2A2557'}}>Professionelle Entwickler mit jahrelanger Praxiserfahrung</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#66347F20'}}>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#66347F'}}>Praxisorientiert</h3>
              <p style={{color: '#2A2557'}}>Hands-on Training mit realen Projekten und Use Cases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#66347F20'}}>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#66347F'}}>Moderne Technologien</h3>
              <p style={{color: '#2A2557'}}>Aktuelle Tools und Best Practices aus der Industrie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#66347F'}}>Unser Team</h2>
          <p className="text-lg mb-12" style={{color: '#2A2557'}}>
            Lernen Sie von den Besten - unser Trainerteam bringt jahrelange Erfahrung 
            in der Softwareentwicklung und -schulung mit.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1" style={{color: '#66347F'}}>Max Mustermann</h3>
              <p className="mb-2" style={{color: '#66347F'}}>Senior Java/Kotlin Trainer</p>
              <p className="text-sm" style={{color: '#2A2557'}}>15+ Jahre Erfahrung in Enterprise-Entwicklung</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1" style={{color: '#66347F'}}>Anna Schmidt</h3>
              <p className="mb-2" style={{color: '#66347F'}}>Go & Cloud Expert</p>
              <p className="text-sm" style={{color: '#2A2557'}}>Spezialisiert auf moderne Backend-Architekturen</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1" style={{color: '#66347F'}}>Tom Developer</h3>
              <p className="mb-2" style={{color: '#66347F'}}>DevOps & Tooling Specialist</p>
              <p className="text-sm" style={{color: '#2A2557'}}>Maven, Git und IDE-Produktivität</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
