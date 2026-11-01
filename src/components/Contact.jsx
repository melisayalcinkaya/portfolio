import { useState } from 'react'
import { links } from '../content.js'
import { EnvelopeArt } from '../illustrations/index.jsx'
import { usePrefs } from '../prefs.jsx'
import { IconGitHub, IconLinkedIn, IconPin } from './icons.jsx'

export default function Contact() {
  const { t } = usePrefs()
  const c = t.contact
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Pano izni yoksa adres zaten ekranda seçilebilir durumda; sessizce geç.
    }
  }

  return (
    <section className="sheet contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-text">
        <h2 id="contact-title">{c.title}</h2>
        <p>{c.text}</p>
        <p className="contact-email">
          <a href={`mailto:${links.email}`}>{links.email}</a>
          <button type="button" className="btn btn-sm btn-outline-light" onClick={copy}>
            {copied ? c.copied : c.copy}
          </button>
          <span className="visually-hidden" role="status">
            {copied ? c.copied : ''}
          </span>
        </p>
        <div className="contact-links">
          <a className="btn btn-outline-light" href={links.github} target="_blank" rel="noreferrer">
            <IconGitHub />
            GitHub
          </a>
          <a className="btn btn-outline-light" href={links.linkedin} target="_blank" rel="noreferrer">
            <IconLinkedIn />
            LinkedIn
          </a>
        </div>
        <p className="contact-location">
          <IconPin />
          {c.location}
        </p>
      </div>
      <EnvelopeArt className="contact-art" />
    </section>
  )
}
