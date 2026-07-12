import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../data/site'

export function Locations() {
  const { t } = useTranslation()
  const coverageItems = t('locations.coverage.items', { returnObjects: true }) as string[]
  const samplingItems = t('locations.sampling.items', { returnObjects: true }) as string[]

  return (
    <>
      <PageHero title={t('locations.title')} subtitle={t('locations.subtitle')} />

      <section className="section-light py-16">
        <div className="container-page">
        <div className="card-surface p-8 md:p-10">
          <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-500">
            {t('locations.coverage.badge')}
          </span>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">{t('locations.coverage.title')}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy-900/80">{t('locations.coverage.text')}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {coverageItems.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-navy-900/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-7">
            <h3 className="text-xl font-bold">{t('locations.sampling.title')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/80">{t('locations.sampling.text')}</p>
            <ul className="mt-5 space-y-2 text-sm text-navy-900/80">
              {samplingItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-7">
            <h3 className="text-xl font-bold">{t('locations.contactTitle')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t('locations.contactText')}</p>
            <dl className="mt-5 space-y-3 text-sm text-navy-900/80">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t('contact.phone')}
                </dt>
                <dd className="mt-0.5">
                  <a href={`tel:${CONTACT_PHONE}`} className="hover:text-teal-500">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t('contact.email')}
                </dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-teal-500">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-navy-900/10 shadow-card">
          <iframe
            title={t('locations.mapTitle')}
            src="https://www.openstreetmap.org/export/embed.html?bbox=22.0%2C44.0%2C40.5%2C52.5&layer=mapnik"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
        </div>
      </section>

      <CtaBand />
      <div className="pb-8" />
    </>
  )
}
