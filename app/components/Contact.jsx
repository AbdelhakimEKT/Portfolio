'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const projectTypes = [
  'One Page',
  'Site Vitrine Complet',
  'Refonte de Site',
  'Autre',
]

function FloatingInput({ label, id, required, type = 'text', ...props }) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const active = focused || hasValue

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        className="peer w-full bg-card border border-line rounded-xl px-4 pt-6 pb-2 text-heading text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all duration-300"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? 'top-2 text-[10px] text-brand font-medium'
            : 'top-1/2 -translate-y-1/2 text-sm text-faded'
        }`}
      >
        {label}
        {required && ' *'}
      </label>
    </div>
  )
}

function FloatingSelect({ label, id, options, onChange, value }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-card border border-line rounded-xl px-4 pt-6 pb-2 text-heading text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all duration-300 appearance-none"
      >
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? 'top-2 text-[10px] text-brand font-medium'
            : 'top-1/2 -translate-y-1/2 text-sm text-faded'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

function FloatingTextarea({ label, id, required, ...props }) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const active = focused || hasValue

  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        required={required}
        rows={5}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        className="peer w-full bg-card border border-line rounded-xl px-4 pt-6 pb-3 text-heading text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all duration-300 resize-none"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? 'top-2 text-[10px] text-brand font-medium'
            : 'top-4 text-sm text-faded'
        }`}
      >
        {label}
        {required && ' *'}
      </label>
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Demande de devis — ${formData.projectType || 'Projet web'}`
    )
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || 'Non renseigné'}\nType de projet: ${formData.projectType || 'Non précisé'}\n\nMessage:\n${formData.message}`
    )
    window.open(
      `mailto:abdelhakim.elakrouti@gmail.com?subject=${subject}&body=${body}`
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand text-sm font-medium tracking-wide uppercase mb-4">
              Contact
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight mb-6">
              Parlons de votre
              <br />
              <span className="text-faded">prochain projet.</span>
            </h2>
            <p className="text-faded text-lg max-w-xl mx-auto">
              Une idée en tête ? Contactez-moi pour en discuter. Je vous
              réponds sous 24h.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          <ScrollReveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingInput
                  label="Nom complet"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <FloatingInput
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingInput
                  label="Téléphone"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FloatingSelect
                  label="Type de projet"
                  id="projectType"
                  options={projectTypes}
                  value={formData.projectType}
                  onChange={handleChange}
                />
              </div>
              <FloatingTextarea
                label="Décrivez votre projet"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden font-medium px-8 py-3.5 rounded-full text-sm w-full sm:w-auto transition-all duration-500 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-brand hover:bg-brand-hover text-white'
                }`}
              >
                <span className="relative z-10">
                  {submitted ? 'Message préparé !' : 'Envoyer ma demande'}
                </span>
              </motion.button>
            </form>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={0.2}>
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-line">
                <h3 className="text-heading font-semibold mb-6 text-sm uppercase tracking-wide">
                  Contact direct
                </h3>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/33768636649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 -mx-3 rounded-xl text-faded hover:text-green-500 hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-heading text-sm font-medium">WhatsApp</p>
                      <p className="text-xs">Réponse rapide</p>
                    </div>
                  </a>

                  <a
                    href="mailto:abdelhakim.elakrouti@gmail.com"
                    className="flex items-center gap-4 p-3 -mx-3 rounded-xl text-faded hover:text-brand hover:bg-brand/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-heading text-sm font-medium">Email</p>
                      <p className="text-xs">abdelhakim.elakrouti@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:0768636649"
                    className="flex items-center gap-4 p-3 -mx-3 rounded-xl text-faded hover:text-heading hover:bg-faded/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-faded/10 flex items-center justify-center group-hover:bg-faded/20 transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-heading text-sm font-medium">Téléphone</p>
                      <p className="text-xs">07 68 63 66 49</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-line">
                <h3 className="text-heading font-semibold mb-3">
                  Basé à Orléans
                </h3>
                <p className="text-faded text-sm leading-relaxed">
                  Je travaille avec des clients partout en France.
                  Rencontrons-nous en visio ou autour d'un café si vous êtes
                  dans la région.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
