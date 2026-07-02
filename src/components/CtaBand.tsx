import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function CtaBand() {
  const { t } = useTranslation()
  return (
    <section className="container-page">
      <div className="brand-gradient relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white md:px-16">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold !text-white md:text-4xl">{t('cta.title')}</h2>
          <p className="mt-4 text-white/80">{t('cta.subtitle')}</p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-navy-900 transition-transform hover:-translate-y-0.5"
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
