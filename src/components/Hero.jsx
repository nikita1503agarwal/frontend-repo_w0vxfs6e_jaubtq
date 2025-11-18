export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 bg-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(600px_200px_at_10%_-20%,rgba(0,0,0,0.06),transparent),radial-gradient(500px_200px_at_90%_-10%,rgba(0,0,0,0.06),transparent)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight">Coiffure & soins capillaires d'exception à Nancy</h1>
            <p className="mt-5 text-neutral-700 text-lg">Salon spécialisé dans la coloration, balayage, soins profonds et coiffures tendances. Expertise, écoute et exigence pour sublimer votre style.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition">Prendre rendez-vous</a>
              <a href="#services" className="inline-flex items-center rounded-full border border-neutral-900 text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">Découvrir nos prestations</a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/hero-salon.jpg" alt="Salon de coiffure" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
