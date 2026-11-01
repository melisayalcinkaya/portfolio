import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/albert-sans'
import './styles.css'
import App from './App.jsx'
import { PrefsProvider } from './prefs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrefsProvider>
      <App />
    </PrefsProvider>
  </StrictMode>,
)

// Sayfa "#projects" gibi bir adresle açılırsa: içerik JavaScript ile çizildiği için tarayıcı
// ilk anda hedefi bulamaz. Çizimden sonra hedefe biz kaydırırız.
if (window.location.hash.length > 1) {
  requestAnimationFrame(() => {
    document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()
  })
}
