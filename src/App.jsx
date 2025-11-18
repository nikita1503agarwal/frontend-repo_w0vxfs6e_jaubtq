import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Boubou Nancy — Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-neutral-950">Mentions légales</a>
            <a href="#" className="hover:text-neutral-950">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
