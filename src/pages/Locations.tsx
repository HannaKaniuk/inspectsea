import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'

interface Office {
  city: string
  role: string
  address: string
  phone: string
  email: string
}

export function Locations() {
  const { t } = useTranslation()
  const offices = t('locations.offices', { returnObjects: true }) as Office[]

  return (
    <>
      <PageHero title={t('locations.title')} subtitle={t('locations.subtitle')} />

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city} className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{o.city}</h3>
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-500">
                  {o.role}
                </span>
              </div>
              <dl className="mt-5 space-y-3 text-sm text-navy-900/80">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('locations.addressLabel')}
                  </dt>
                  <dd className="mt-0.5">{o.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('contact.phone')}
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="hover:text-teal-500">
                      {o.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('contact.email')}
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${o.email}`} className="hover:text-teal-500">
                      {o.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-navy-900/10 shadow-card">
          <iframe
            title="InspectSea offices map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.5%2C45.2%2C31.2%2C46.7&layer=mapnik"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </section>

      <CtaBand />
      <div className="pb-8" />
    </>
  )
}
