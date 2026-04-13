'use client'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    number: '01',
    title: 'Faites forte impression',
    subtitle: 'One Page',
    description:
      "Un site d'une seule page qui capte l'attention et raconte votre histoire avec impact. Parfait pour lancer une activité, un événement ou un produit.",
    features: [
      'Design sur mesure',
      'Animations fluides',
      'Optimisé mobile',
      'Formulaire de contact',
    ],
  },
  {
    number: '02',
    title: 'Votre activité, en ligne',
    subtitle: 'Site Complet',
    description:
      "Un site multi-pages qui travaille pour vous au quotidien : vos clients réservent, paient et découvrent votre offre — sans friction.",
    features: [
      'Réservation en ligne',
      'Paiement sécurisé Stripe',
      'Menu / Catalogue interactif',
      "Espace d'administration",
    ],
  },
  {
    number: '03',
    title: 'Votre site mérite mieux',
    subtitle: 'Refonte',
    description:
      "Votre site actuel ne reflète plus la qualité de ce que vous faites ? Je le repense de A à Z pour qu'il soit à la hauteur de votre ambition.",
    features: [
      "Audit de l'existant",
      'Nouveau design',
      'Migration des contenus',
      'Optimisation SEO',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-brand text-sm font-medium tracking-wide uppercase mb-4">
            Services
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight mb-6">
            Ce que je peux faire
            <br />
            <span className="text-faded">pour vous.</span>
          </h2>
          <p className="text-faded text-lg max-w-xl mb-20">
            Chaque projet est unique. Je m'adapte à vos besoins pour créer la
            solution web qui vous correspond.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={i * 0.15}>
              <div className="group bg-card rounded-2xl p-8 border border-line hover:border-line-hover transition-all duration-500 h-full hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/[0.04]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-brand text-xs font-mono bg-brand/10 w-8 h-8 rounded-lg flex items-center justify-center">
                    {service.number}
                  </span>
                  <span className="text-faded text-xs tracking-wide uppercase">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-heading">
                  {service.title}
                </h3>
                <p className="text-faded text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="w-8 h-[1px] bg-line mb-6" />
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-faded"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
