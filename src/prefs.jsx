import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { content } from './content.js'

// Dil ve tema tercihleri. localStorage gizli pencerede ya da engellenmiş çerezlerde hata
// fırlatabilir; bu yüzden her erişim try/catch içinde ve tercih kaydedilemese de site çalışır.
const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      /* kaydedilemezse yalnızca bu oturumda geçerli olur */
    }
  },
}

// eslint-disable-next-line react-refresh/only-export-components
export function initialLang() {
  const saved = storage.get('lang')
  if (saved === 'tr' || saved === 'en') return saved
  const browser = (typeof navigator !== 'undefined' && navigator.language) || 'tr'
  return browser.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

function initialTheme() {
  // index.html'deki küçük betik temayı boyamadan önce ayarlar; burada aynı sonucu okuyoruz.
  const attr = document.documentElement.dataset.theme
  if (attr === 'dark' || attr === 'light') return attr
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const PrefsContext = createContext(null)

export function PrefsProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const [theme, setTheme] = useState(initialTheme)
  const t = content[lang]

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const setLang = useCallback((next) => {
    setLangState(next)
    storage.set('lang', next)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      storage.set('theme', next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ lang, setLang, theme, toggleTheme, t }), [lang, setLang, theme, toggleTheme, t])
  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs() {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs, PrefsProvider içinde kullanılmalı')
  return ctx
}
