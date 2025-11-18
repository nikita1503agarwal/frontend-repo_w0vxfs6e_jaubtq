const testimonials = [
  { name: 'Camille', text: 'Un accueil chaleureux et un résultat impeccable. Ma couleur n’a jamais été aussi lumineuse !' },
  { name: 'Élodie', text: 'Des conseils pro et une exécution parfaite. Le brushing tient super bien.' },
  { name: 'Manon', text: 'Équipe aux petits soins et ambiance apaisante. Je recommande les yeux fermés.' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">Ils nous font confiance</h2>
          <p className="mt-3 text-neutral-700">Les retours de nos clientes et clients.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white">
              <p className="text-neutral-800">“{t.text}”</p>
              <div className="mt-4 font-semibold text-neutral-950">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
