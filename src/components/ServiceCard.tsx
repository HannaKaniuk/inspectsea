import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { ServiceMeta } from '../data/services'

export function ServiceCard({ service }: { service: ServiceMeta }) {
  const { t } = useTranslation()

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-teal-500/40"
    >
      <span className="brand-gradient mb-4 h-1 w-10 rounded-full" />
      <h3 className="text-lg font-bold">{t(`services.${service.slug}.title`)}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {t(`services.${service.slug}.short`)}
      </p>
      <span className="mt-5 text-sm font-semibold text-teal-500 transition-colors group-hover:text-navy-900">
        {t('common.learnMore')} →
      </span>
    </Link>
  )
}
