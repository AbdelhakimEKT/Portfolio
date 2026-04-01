const signatureProject = {
  name: 'Bleu Marée',
  type: 'Restaurant gastronomique',
  image: '/previews/bleu-maree.png',
  link: 'https://bleu-mar-e.vercel.app/fr',
  chapters: [
    {
      label: 'Intro',
      text: 'Un restaurant gastronomique où chaque détail compte.',
    },
    {
      label: 'Intention',
      text: "Traduire une expérience sensorielle en interface digitale, sans casser le calme ni l'élégance du lieu.",
    },
    {
      label: 'Direction artistique',
      text: 'Palette sombre, lumière dorée, matières feutrées, rythme lent.',
    },
    {
      label: 'Expérience',
      text: 'Une navigation qui laisse respirer les images, la carte et la réservation.',
    },
    {
      label: 'Détails',
      text: 'Transitions discrètes, contrastes précis, sensation de maîtrise jusque dans les micro-rythmes.',
    },
  ],
};

const yashikiProject = {
  name: 'Yashiki',
  type: 'Restaurant japonais',
  image: '/previews/yashiki.png',
  link: 'https://yashiki-theta.vercel.app/',
  chapters: [
    {
      label: 'Univers',
      text: 'Une adresse plus immersive, plus silencieuse, presque cinématographique.',
    },
    {
      label: 'Intention',
      text: "Faire sentir le soir, la précision et la faim avant même d'ouvrir la carte.",
    },
    {
      label: 'Rythme',
      text: 'Moins de démonstration. Plus de tension visuelle et de maîtrise.',
    },
  ],
};

const otherProjects = [
  {
    name: 'Maison Noir Barber',
    type: 'Barber shop',
    image: '/previews/barber.png',
    link: 'https://barber-orpin-one.vercel.app/',
  },
  {
    name: 'Plume Bonbon',
    type: 'E-commerce',
    image: '/previews/plume-bonbon.png',
    link: 'https://plume-bonbon.vercel.app/',
  },
];

const serviceOffers = [
  {
    title: 'Site vitrine premium',
    text: 'Un site propre, haut de gamme, pensé pour donner confiance dès la première visite.',
  },
  {
    title: 'Refonte complète',
    text: "Quand le site actuel est faible, daté ou ne reflète pas le niveau réel de la marque.",
  },
  {
    title: 'Réservation et parcours client',
    text: 'Réserver, consulter une offre, prendre rendez-vous ou contacter la marque sans friction.',
  },
  {
    title: 'Site administrable',
    text: 'Visuels, textes, offres ou horaires modifiables sans devoir tout refaire à chaque changement.',
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="page-ambient ambient-one" />
      <div className="page-ambient ambient-two" />

      <header className="site-header">
        <a className="site-brand" href="#top">
          <span>Nexa Studio</span>
          <small>Abdelhakim Elakrouti</small>
        </a>

        <nav className="site-nav">
          <a href="#services">Services</a>
          <a href="#signature">Projet signature</a>
          <a href="#yashiki">Yashiki</a>
          <a href="#philosophie">Philosophie</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/previews/bleu-maree.png"
        >
          <source src="/media/restaurant-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="section-label">Nexa Studio • direction digitale premium</p>
          <h1>
            Je crée des sites qui donnent
            <br />
            du niveau aux marques.
          </h1>
          <p className="hero-copy">
            Refonte, création, réservation, site administrable.
            <br />
            Pour les projets qui ont besoin d’une image plus forte, plus claire
            et plus crédible.
          </p>
          <a className="hero-cta" href="#signature">
            Voir les projets
          </a>

          <div className="hero-services">
            <span>site vitrine</span>
            <span>refonte</span>
            <span>réservation</span>
            <span>site administrable</span>
          </div>
        </div>

        <div className="hero-signature">
          <img src="/media/abdelhakim-portrait.png" alt="Portrait illustré d'Abdelhakim Elakrouti" />
          <div className="hero-signature-copy">
            <p className="section-label">Fondateur • Nexa Studio</p>
            <strong>Abdelhakim Elakrouti</strong>
            <em>Diplômé d’un Master MIAGE</em>
            <span>
              Je conçois des sites en travaillant l’image, la structure et
              l’expérience ensemble.
            </span>
            <div className="hero-signature-tags">
              <span>Master MIAGE</span>
              <span>Design & développement</span>
              <span>Orléans</span>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-clarity-section" id="services">
        <div className="section-intro narrow">
          <p className="section-label">Concrètement</p>
          <h2>Ce que je propose.</h2>
          <p className="section-text">
            Pas du flou. Pas une liste de compétences. Voici ce que je peux
            réellement construire pour une marque, un business ou un projet qui
            veut mieux présenter son image.
          </p>
        </div>

        <div className="offer-clarity-grid">
          {serviceOffers.map((offer) => (
            <article className="offer-card" key={offer.title}>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="signature-section" id="signature">
        <div className="section-intro">
          <p className="section-label">Projet signature</p>
          <h2>Bleu Marée</h2>
          <p className="section-text">
            {signatureProject.type}. Un exemple concret de ce que je vends:
            image, cohérence, rythme et parcours client.
          </p>
        </div>

        <div className="signature-visual">
          <img src={signatureProject.image} alt={`Aperçu du site ${signatureProject.name}`} />
        </div>

        <div className="signature-story">
          {signatureProject.chapters.map((chapter) => (
            <article className="story-block" key={chapter.label}>
              <span>{chapter.label}</span>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>

        <a className="project-link" href={signatureProject.link} target="_blank" rel="noreferrer">
          Voir le projet
        </a>
      </section>

      <section className="secondary-project" id="yashiki">
        <div className="secondary-copy">
          <p className="section-label">Second projet</p>
          <h2>Yashiki</h2>
          <p className="section-text">
            Un autre univers, plus japonais, plus illustré, plus immersif. La
            même exigence sur l’image et la cohérence.
          </p>

          <div className="secondary-story">
            {yashikiProject.chapters.map((chapter) => (
              <article className="story-block compact" key={chapter.label}>
                <span>{chapter.label}</span>
                <p>{chapter.text}</p>
              </article>
            ))}
          </div>

          <a className="project-link" href={yashikiProject.link} target="_blank" rel="noreferrer">
            Voir le projet
          </a>
        </div>

        <div className="secondary-visual">
          <img src={yashikiProject.image} alt={`Aperçu du site ${yashikiProject.name}`} />
        </div>
      </section>

      <section className="philosophy-section" id="philosophie">
        <div id="philosophy-panel">
          <div id="philosophy-header">
            <p className="section-label">Philosophie</p>
            <h2>
              Je commence par comprendre ce que le projet doit dégager. Le site
              vient après.
            </h2>
          </div>

          <div id="philosophy-body">
            <p>
              Je regarde le niveau de la marque, son ton, son public, ce qu’elle
              doit inspirer et la manière dont elle doit être perçue.
            </p>
            <p>
              Ensuite seulement je construis le site. L’objectif est simple:
              faire quelque chose de juste, crédible et cohérent, pas juste
              quelque chose de beau.
            </p>
          </div>
        </div>
      </section>

      <section className="other-projects-section">
        <div className="section-intro narrow">
          <p className="section-label">Autres projets</p>
          <h2>Autres univers, même sens du détail.</h2>
        </div>

        <div className="other-projects-grid">
          {otherProjects.map((project) => (
            <a
              className="other-project-card"
              href={project.link}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="other-project-media">
                <img src={project.image} alt={`Aperçu du site ${project.name}`} />
              </div>
              <div className="other-project-copy">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">Contact</p>
        <h2>Discutons de votre projet.</h2>
        <div className="contact-links">
          <a href="mailto:abdelhakim.elakrouti@gmail.com">abdelhakim.elakrouti@gmail.com</a>
          <a href="https://wa.me/33768636649" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
