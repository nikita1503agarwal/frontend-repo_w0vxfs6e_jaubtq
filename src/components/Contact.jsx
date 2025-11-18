export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">Contact</h2>
            <p className="mt-3 text-neutral-700">Besoin d’un conseil ou envie de réserver ? Laissez-nous un message, nous revenons vers vous rapidement.</p>

            <form className="mt-8 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="h-12 rounded-lg border border-black/10 px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Prénom" />
                <input className="h-12 rounded-lg border border-black/10 px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Nom" />
              </div>
              <input className="h-12 rounded-lg border border-black/10 px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Email" />
              <input className="h-12 rounded-lg border border-black/10 px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Téléphone" />
              <textarea rows={5} className="rounded-lg border border-black/10 px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Votre message" />
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white h-12 px-6 font-medium hover:bg-neutral-800 transition w-full sm:w-auto">Envoyer</button>
            </form>
          </div>

          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
            <iframe title="map" src="https://www.google.com/maps?q=Nancy&output=embed" className="w-full h-[420px]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
