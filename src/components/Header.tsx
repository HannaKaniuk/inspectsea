import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/locations', label: t('nav.locations') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-teal-500 ${
      isActive ? 'text-teal-500' : 'text-navy-900/80'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} aria-label="InspectSea Survey">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
          >
            {t('nav.getQuote')}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-900/10 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-teal-500/10 text-teal-500' : 'text-navy-900/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center justify-between px-3">
              <LanguageSwitcher />
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white"
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
