import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'
import { services, documents } from '../data/services'
import { CONTACT_EMAIL } from '../data/site'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-navy-950 text-white/70">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed">{t('footer.tagline')}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('footer.services')}
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-teal-400">
                  {t(`services.${s.slug}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('footer.company')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="transition-colors hover:text-teal-400">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/locations" className="transition-colors hover:text-teal-400">
                {t('nav.locations')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-teal-400">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>

          <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
            {t('about.docsTitle')}
          </h3>
          <ul className="space-y-2 text-sm">
            {documents.map((doc) => (
              <li key={doc.key}>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-400"
                >
                  {t(`documents.${doc.key}.title`)} (PDF)
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t('footer.contact')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:+380487000000" className="transition-colors hover:text-teal-400">
                +38 048 700 00 00
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-teal-400">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/50">
          © {year} InspectSea Survey. {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
