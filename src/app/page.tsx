import Link from 'next/link';
import { getFeaturedCourses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  const featuredCourses = getFeaturedCourses();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Codevibe</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professionelle Schulungen für Softwareentwickler. Lernen Sie Java, Kotlin und Go 
            effizient und mit Spaß. Dazu Trainings für Dev-Tools wie Maven, IntelliJ IDEA und Git.
          </p>
          <Link 
            href="/courses"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Alle Kurse ansehen
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Kurse</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Über Codevibe</h2>
          <p className="text-lg text-gray-700 mb-8">
            Wir sind ein Team erfahrener Softwareentwickler und Trainer, die ihr Wissen 
            leidenschaftlich gerne weitergeben. Unsere Kurse sind praxisorientiert und 
            helfen Entwicklern dabei, ihre Fähigkeiten gezielt zu erweitern.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩‍💻</span>
              </div>
              <h3 className="font-semibold mb-2">Erfahrene Trainer</h3>
              <p className="text-gray-600">Professionelle Entwickler mit jahrelanger Praxiserfahrung</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Praxisorientiert</h3>
              <p className="text-gray-600">Hands-on Training mit realen Projekten und Use Cases</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Moderne Technologien</h3>
              <p className="text-gray-600">Aktuelle Tools und Best Practices aus der Industrie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Unser Team</h2>
          <p className="text-lg text-gray-700 mb-12">
            Lernen Sie von den Besten - unser Trainerteam bringt jahrelange Erfahrung 
            in der Softwareentwicklung und -schulung mit.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1">Max Mustermann</h3>
              <p className="text-blue-600 mb-2">Senior Java/Kotlin Trainer</p>
              <p className="text-sm text-gray-600">15+ Jahre Erfahrung in Enterprise-Entwicklung</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1">Anna Schmidt</h3>
              <p className="text-blue-600 mb-2">Go & Cloud Expert</p>
              <p className="text-sm text-gray-600">Spezialisiert auf moderne Backend-Architekturen</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1">Tom Developer</h3>
              <p className="text-blue-600 mb-2">DevOps & Tooling Specialist</p>
              <p className="text-sm text-gray-600">Maven, Git und IDE-Produktivität</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
