export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-faded text-xs">
          &copy; {new Date().getFullYear()} Abdelhakim ELAKROUTI. Tous droits
          réservés.
        </p>
        <p className="text-faded/50 text-xs">
          Développeur Web Freelance &middot; Orléans
        </p>
      </div>
    </footer>
  )
}
