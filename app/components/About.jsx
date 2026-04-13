'use client'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="a-propos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/media/portrait.png"
                  alt="Abdelhakim ELAKROUTI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -inset-4 bg-brand/5 rounded-3xl -z-10 blur-2xl" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-brand text-sm font-medium tracking-wide uppercase mb-4">
              À propos
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight mb-8">
              Abdelhakim
              <br />
              <span className="text-faded">ELAKROUTI</span>
            </h2>
            <div className="space-y-6 text-faded leading-relaxed">
              <p>
                Je suis développeur web indépendant, basé à Orléans. Ce qui me
                motive, c'est de créer des sites qui rendent justice à
                l'énergie que mes clients mettent dans leur activité.
              </p>
              <p>
                Un bon restaurant, un salon de bien-être, un concept
                original — ça mérite mieux qu'un template générique. Je ne
                livre pas juste des sites. Je livre des outils qui donnent
                confiance à vos visiteurs, qui racontent qui vous êtes, et qui
                transforment les curieux en clients.
              </p>
              <p>
                Chaque animation, chaque choix de mise en page, chaque détail
                est pensé pour que votre site ne ressemble à aucun autre.
                C'est ce qui fait la différence entre un site qui existe et un
                site qui travaille pour vous.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
