import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { documents } from '../data/services'

export function About() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true }) as { title: string; text: string }[]
  const certs = t('about.certs', { returnObjects: true }) as string[]

  return (
    <>
      <PageHero title={t('about.title')} subtitle={t('about.intro')} />

      <section className="container-page grid items-stretch gap-8 py-16 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-card">
          <img
            src="/images/bulk-carrier.jpg"
            alt=""
            loading="lazy"
            className="h-full min-h-64 w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-navy-900/10 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold">{t('about.missionTitle')}</h2>
            <p className="mt-4 leading-relaxed text-navy-900/80">{t('about.mission')}</p>
          </div>
          <div className="brand-gradient rounded-2xl p-8 text-white shadow-card">
            <h2 className="text-2xl font-bold !text-white">{t('about.certsTitle')}</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {certs.map((c) => (
                <li key={c} className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <SectionHeading title={t('about.valuesTitle')} center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card">
              <span className="brand-gradient mb-4 block h-1 w-10 rounded-full" />
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-navy-950/[0.03] py-16">
        <div className="container-page">
          <SectionHeading title={t('about.docsTitle')} subtitle={t('about.docsSubtitle')} center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {documents.map((doc) => (
              <a
                key={doc.key}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-teal-500/40"
              >
                <span className="inline-flex w-fit rounded-md bg-teal-500/10 px-2 py-1 text-xs font-bold uppercase tracking-wider text-teal-500">
                  PDF
                </span>
                <h3 className="mt-4 text-base font-bold">{t(`documents.${doc.key}.title`)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {t(`documents.${doc.key}.desc`)}
                </p>
                <span className="mt-5 text-sm font-semibold text-teal-500 group-hover:text-navy-900">
                  {t('about.docsDownload')} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <div className="pb-8" />
    </>
  )
}
