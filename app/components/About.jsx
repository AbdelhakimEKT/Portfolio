'use client'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="a-propos" className="py-20 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto md:aspect-square max-w-xs md:max-w-sm mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/media/portrait.png"
                  alt="Abdelhakim ELAKROUTI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 50vw"
                />
              </div>
              <div className="absolute -inset-4 bg-brand/5 rounded-3xl -z-10 blur-2xl" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-brand text-xs font-medium tracking-widest uppercase mb-4">À propos</p>
            <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-bold tracking-tight mb-7">
              Abdelhakim
              <br />
              <span className="text-faded">ELAKROUTI</span>
            </h2>
            <div className="space-y-5 text-faded leading-relaxed text-sm sm:text-base">
              <p className="text-heading font-medium text-base sm:text-lg leading-relaxed">
                J'aide les commerces, restaurants et marques à avoir une
                présence en ligne à la hauteur de ce qu'ils font au quotidien.
              </p>
              <p>
                La plupart des sites ressemblent à tous les autres. Moi, je
                pars de votre image, de votre ton, de ce qui fait que vos
                clients reviennent — et je construis autour de ça. Pas un
                template habillé. Un site qui vous ressemble vraiment.
              </p>
              <p>
                Je travaille chaque détail comme s'il était visible : le
                rythme d'une page, la fluidité d'une transition, la clarté
                d'un parcours. Parce qu'un site bien pensé, ça ne se
                remarque pas — ça se ressent.
              </p>
              <p className="text-faded/70 text-sm">
                Basé à Orléans. Disponible partout en France.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
