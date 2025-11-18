const services = [
  { title: 'Coloration & Balayage', desc: 'Techniques personnalisées pour des nuances naturelles et lumineuses.', price: 'à partir de 60€' },
  { title: 'Coupe & Brushing', desc: 'Des lignes nettes et des finitions soignées pour un style qui vous ressemble.', price: 'à partir de 35€' },
  { title: 'Soin Profond', desc: 'Rituel réparateur pour renforcer, lisser et sublimer votre fibre capillaire.', price: 'à partir de 45€' },
  { title: 'Chignons & Événements', desc: 'Coiffures élégantes pour mariages et occasions spéciales.', price: 'sur devis' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">Prestations</h2>
          <p className="mt-3 text-neutral-700">Une sélection de services professionnels pour révéler l’éclat de vos cheveux.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 hover:shadow-lg transition bg-white">
              <h3 className="text-lg font-medium text-neutral-950">{s.title}</h3>
              <p className="mt-2 text-neutral-700 text-sm">{s.desc}</p>
              <div className="mt-4 text-neutral-900 font-semibold text-sm">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
