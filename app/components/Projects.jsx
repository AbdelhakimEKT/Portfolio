'use client'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    name: 'Söma',
    type: 'Site Complet · Réservation · Paiement',
    description: 'Maison de rituels et hammam haut de gamme à Orléans. Site complet avec système de réservation et paiement intégré via Stripe.',
    url: 'https://soma-sable-ten.vercel.app/',
    gradient: 'from-amber-900/30 to-stone-900/20',
    accent: 'text-amber-400',
  },
  {
    name: 'Lino',
    type: 'One Page',
    description: "Bistrot de saison à Orléans. One page élégant avec un design chaleureux mettant en valeur l'authenticité du lieu.",
    url: 'https://lino-weld.vercel.app/',
    gradient: 'from-emerald-900/30 to-stone-900/20',
    accent: 'text-emerald-400',
  },
  {
    name: 'Yashiki',
    type: 'Site Vitrine Complet',
    description: 'Restaurant japonais contemporain à Paris. Site multi-pages avec menu interactif et système de réservation.',
    url: 'https://yashiki.vercel.app/',
    gradient: 'from-red-900/30 to-stone-900/20',
    accent: 'text-red-400',
  },
  {
    name: "L'Observatoire des Nuages",
    type: 'Site Éditorial',
    description: 'Vigie poétique des ciels parisiens. Site éditorial léger et contemplatif alliant rigueur et poésie.',
    url: 'https://observatoire-nuage.vercel.app/',
    gradient: 'from-sky-900/30 to-slate-900/20',
    accent: 'text-sky-400',
  },
  {
    name: 'Bleu Marée',
    type: 'Site Vitrine Premium',
    description: 'Restaurant gastronomique de fruits de mer à Biarritz. Design photographique haut de gamme et épuré.',
    url: 'https://bleu-mar-e.vercel.app/fr',
    gradient: 'from-blue-900/30 to-slate-900/20',
    accent: 'text-blue-400',
  },
  {
    name: 'Braise',
    type: 'Site Vitrine',
    description: 'Smash burger premium à Orléans. Design sombre et moderne avec intégration de plateformes de livraison.',
    url: 'https://braise-alpha.vercel.app/',
    gradient: 'from-orange-900/30 to-stone-900/20',
    accent: 'text-orange-400',
  },
]

export default function Projects() {
  return (
    <section id="realisations" className="py-20 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-brand text-xs font-medium tracking-widest uppercase mb-4">Réalisations</p>
          <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-tight mb-5">
            Des projets qui
            <br />
            <span className="text-faded">parlent d'eux-mêmes.</span>
          </h2>
          <p className="text-faded text-base sm:text-lg max-w-xl mb-14 md:mb-20">
            Chaque site que je crée est pensé pour refléter l'identité unique
            de mes clients et offrir une expérience mémorable à leurs visiteurs.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-[#111] bg-gradient-to-br ${project.gradient} rounded-2xl p-6 md:p-10 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 active:scale-[0.98] hover:scale-[1.02] h-full`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border border-current/20 ${project.accent}`}>
                    {project.type}
                  </span>
                  <svg className="w-4 h-4 text-[#86868b] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 ml-2"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-3 text-[#f5f5f7] group-hover:text-white transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-[#86868b] text-sm leading-relaxed">{project.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
