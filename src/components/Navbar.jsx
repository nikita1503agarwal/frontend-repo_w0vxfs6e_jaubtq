import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold tracking-tight text-neutral-900">Boubou Nancy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-800">
            <a href="#services" className="hover:text-neutral-950 transition">Prestations</a>
            <a href="#portfolio" className="hover:text-neutral-950 transition">Portfolio</a>
            <a href="#about" className="hover:text-neutral-950 transition">À propos</a>
            <a href="#contact" className="hover:text-neutral-950 transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition">Prendre RDV</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2 text-neutral-800 font-medium">
              <a onClick={() => setOpen(false)} href="#services" className="px-2 py-2 rounded hover:bg-black/5">Prestations</a>
              <a onClick={() => setOpen(false)} href="#portfolio" className="px-2 py-2 rounded hover:bg-black/5">Portfolio</a>
              <a onClick={() => setOpen(false)} href="#about" className="px-2 py-2 rounded hover:bg-black/5">À propos</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-2 py-2 rounded hover:bg-black/5">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-2 py-2 rounded bg-neutral-900 text-white text-center">Prendre RDV</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
