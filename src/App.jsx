import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { usePrefs } from './prefs.jsx'

export default function App() {
  const { t } = usePrefs()
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Melisa Yalçınkaya</p>
        <p>
          {t.footer.built}{' '}
          <a href="https://github.com/melisayalcinkaya/personel_portfolia" target="_blank" rel="noreferrer">
            {t.footer.source}
          </a>
        </p>
      </footer>
    </div>
  )
}
