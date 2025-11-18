const items = [
  { id: 1, img: '/portfolio-1.jpg' },
  { id: 2, img: '/portfolio-2.jpg' },
  { id: 3, img: '/portfolio-3.jpg' },
  { id: 4, img: '/portfolio-4.jpg' },
  { id: 5, img: '/portfolio-5.jpg' },
  { id: 6, img: '/portfolio-6.jpg' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">Portfolio</h2>
          <p className="mt-3 text-neutral-700">Quelques réalisations récentes. Chaque couleur et chaque coupe est pensée sur mesure.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.id} className="aspect-square overflow-hidden rounded-xl bg-white border border-black/5">
              <img src={i.img} alt="Réalisation" className="h-full w-full object-cover hover:scale-105 transition duration-500"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
