import { useTranslation } from 'react-i18next'
import { languages } from '../i18n'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage ?? 'ua'

  return (
    <div className={`inline-flex items-center rounded-full border border-navy-900/15 p-0.5 ${className ?? ''}`}>
      {languages.map((lng) => {
        const active = current === lng.code
        return (
          <button
            key={lng.code}
            type="button"
            onClick={() => void i18n.changeLanguage(lng.code)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active ? 'brand-gradient text-white' : 'text-navy-900/60 hover:text-navy-900'
            }`}
            aria-pressed={active}
          >
            {lng.label}
          </button>
        )
      })}
    </div>
  )
}
