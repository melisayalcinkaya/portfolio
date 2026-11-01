import { links } from '../content.js'
import { HeroArt, MlArt, WebArt } from '../illustrations/index.jsx'
import { usePrefs } from '../prefs.jsx'
import { IconDownload, IconGitHub, IconLinkedIn } from './icons.jsx'

const cardArt = { web: WebArt, ml: MlArt }
const cardTone = { web: 'sky', ml: 'lavender' }

export default function Hero() {
  const { t, lang } = usePrefs()
  const { hero, about } = t

  return (
    <section className="sheet hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="status-chip">
            <span className="status-dot" aria-hidden="true" />
            {hero.status}
          </p>
          <h1 id="hero-title">{hero.hello}</h1>
          <p className="hero-lead">{hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-ink" href="#projects">
              {hero.primary}
            </a>
            <a className="btn btn-soft" href={links.cv[lang]} download>
              <IconDownload />
              {hero.cv}
            </a>
          </div>
          <div className="social">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
          </div>
        </div>
        <HeroArt className="hero-art" />
      </div>

      <div className="about band" aria-labelledby="about-title">
        <div className="about-text">
          <h2 id="about-title">{about.title}</h2>
          {about.text.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="focus-cards">
          {about.cards.map((card) => {
            const Art = cardArt[card.key]
            return (
              <li key={card.key} className="focus-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className={`art-panel tone-${cardTone[card.key]}`}>
                  <Art />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
