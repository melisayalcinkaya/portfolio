import { useEffect, useRef, useState } from 'react'
import { usePrefs } from '../prefs.jsx'
import { IconClose, IconMenu, IconMoon, IconSun } from './icons.jsx'

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = usePrefs()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  // Escape ile menüyü kapat ve odağı menü düğmesine geri ver (klavye kullanıcıları kaybolmasın).
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const nav = t.nav

  return (
    <header className="site-header">
      <div className="nav-pill">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            my
          </span>
          <span className="brand-name">Melisa Yalçınkaya</span>
        </a>

        <nav id="site-nav" aria-label={nav.label} className={open ? 'nav-links is-open' : 'nav-links'}>
          <a href="#projects" onClick={close}>
            {nav.projects}
          </a>
          <a href="#experience" onClick={close}>
            {nav.experience}
          </a>
          <a href="#skills" onClick={close}>
            {nav.skills}
          </a>
          <a href="#contact" className="btn btn-ink nav-cta" onClick={close}>
            {nav.contact}
          </a>
        </nav>

        <div className="nav-tools">
          <button
            type="button"
            className="tool-btn"
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            aria-label={nav.language}
            title={nav.language}
          >
            <span aria-hidden="true">{nav.languageShort}</span>
          </button>
          <button
            type="button"
            className="tool-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? nav.themeToLight : nav.themeToDark}
            title={theme === 'dark' ? nav.themeToLight : nav.themeToDark}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="tool-btn menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
