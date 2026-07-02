import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { services } from '../data/services'
import type { ServiceSlug } from '../data/services'
import { CtaBand } from '../components/CtaBand'
import { NotFound } from './NotFound'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()

  const meta = services.find((s) => s.slug === slug)
  if (!meta) return <NotFound />

  const key = meta.slug as ServiceSlug
  const features = t(`services.${key}.features`, { returnObjects: true }) as string[]
  const others = services.filter((s) => s.slug !== meta.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/10">
        <div className="brand-gradient absolute inset-0 opacity-[0.05]" />
        <div className="container-page relative py-16 md:py-20">
          <Link to="/services" className="text-sm font-semibold text-teal-500 hover:underline">
            {t('common.backToServices')}
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold md:text-4xl">{t(`services.${key}.title`)}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{t(`services.${key}.short`)}</p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-navy-900/80">
            {t(`services.${key}.description`)}
          </p>
          <h2 className="mt-10 text-2xl font-bold">{t('common.keyFeatures')}</h2>
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-navy-900/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-navy-900/10 bg-white p-7 shadow-card">
          <h3 className="text-lg font-bold">{t('cta.title')}</h3>
          <p className="mt-2 text-sm text-muted">{t('cta.subtitle')}</p>
          <Link
            to="/contact"
            className="brand-gradient mt-5 block rounded-full px-6 py-3 text-center font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {t('common.requestQuote')}
          </Link>
        </aside>
      </section>

      <section className="container-page pb-16">
        <h2 className="mb-8 text-2xl font-bold">{t('common.ourServices')}</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1"
            >
              <span className="brand-gradient mb-3 block h-1 w-8 rounded-full" />
              <span className="font-semibold">{t(`services.${s.slug}.title`)}</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
      <div className="pb-8" />
    </>
  )
}
