import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App.jsx'
import { PrefsProvider } from '../src/prefs.jsx'

function setup() {
  const user = userEvent.setup()
  render(
    <PrefsProvider>
      <App />
    </PrefsProvider>,
  )
  return user
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  vi.spyOn(navigator, 'language', 'get').mockReturnValue('tr-TR')
  window.matchMedia = vi.fn().mockReturnValue({ matches: false })
})

describe('sayfa', () => {
  it('Türkçe açılır ve tüm bölümleri gösterir', () => {
    setup()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Merhaba, ben Melisa.')
    for (const name of ['Hakkımda', 'Projeler', 'Deneyim ve eğitim', 'Yetenekler', 'Akademik yayın', 'Birlikte çalışalım']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
    expect(document.documentElement.lang).toBe('tr')
  })

  it('tarayıcı dili İngilizceyse İngilizce açılır', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US')
    setup()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Melisa.")
  })

  it('dil düğmesi metinleri, CV bağlantısını ve html lang değerini değiştirir', async () => {
    const user = setup()
    expect(screen.getByRole('link', { name: "CV'yi indir" })).toHaveAttribute('href', 'Melisa_Yalcinkaya_CV.pdf')

    await user.click(screen.getByRole('button', { name: 'Switch to English' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Melisa.")
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('href', 'Melisa_Yalcinkaya_CV_EN.pdf')
    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('lang')).toBe('en')
  })

  it('tema düğmesi koyu temaya geçer ve tercihi hatırlar', async () => {
    const user = setup()
    await user.click(screen.getByRole('button', { name: 'Koyu temaya geç' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'Açık temaya geç' })).toBeInTheDocument()
  })

  it('localStorage hata verse de site çalışır', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('engellendi')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('engellendi')
    })
    const user = setup()
    await user.click(screen.getByRole('button', { name: 'Switch to English' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Melisa.")
  })

  it('mobil menü düğmesi aria-expanded ile durumunu bildirir ve Escape ile kapanır', async () => {
    const user = setup()
    const toggle = screen.getByRole('button', { name: 'Menüyü aç' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })
})

describe('projeler', () => {
  it('canlı demo ve kaynak kod bağlantıları doğru adreslere gider', () => {
    setup()
    const qrMenu = screen.getByRole('article', { name: 'QR Menü' })
    expect(within(qrMenu).getByRole('link', { name: /Canlı demo/ })).toHaveAttribute('href', 'https://qr-menus.onrender.com')
    expect(within(qrMenu).getByRole('link', { name: /Kaynak kod/ })).toHaveAttribute(
      'href',
      'https://github.com/melisayalcinkaya/qr_menus',
    )
    const yoklama = screen.getByRole('article', { name: 'QR Yoklama' })
    expect(within(yoklama).getByRole('link', { name: /Canlı demo/ })).toHaveAttribute(
      'href',
      'https://qr-yoklama-e9u9.onrender.com',
    )
  })

  it.each(['LockNet', 'Kurumsal İletişim Asistanı'])('özel depodaki %s için bağlantı yerine not gösterir', (name) => {
    setup()
    const card = screen.getByRole('article', { name })
    expect(within(card).queryByRole('link')).toBeNull()
    expect(card).toHaveTextContent('Kaynak kodu özel depoda')
  })

  it('öne çıkan projeler sırayla gelir, ikincisinin görseli solda', () => {
    setup()
    const featured = document.querySelectorAll('.project.is-featured')
    expect([...featured].map((el) => el.querySelector('h3').textContent)).toEqual([
      'QR Menü',
      'Kurumsal İletişim Asistanı',
    ])
    expect(featured[1]).toHaveClass('is-flipped')
  })

  it('yeni sekmede açılan tüm bağlantılar rel="noreferrer" taşır', () => {
    setup()
    const external = document.querySelectorAll('a[target="_blank"]')
    expect(external.length).toBeGreaterThan(5)
    external.forEach((a) => expect(a.getAttribute('rel')).toContain('noreferrer'))
  })
})
