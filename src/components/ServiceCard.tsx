import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { ServiceMeta } from '../data/services'

export function ServiceCard({ service }: { service: ServiceMeta }) {
  const { t } = useTranslation()

  return (
    <Link
      to={`/services/${service.slug}`}
      className="card-surface group relative flex h-full min-h-[260px] flex-col overflow-hidden p-7 transition-all hover:-translate-y-1 hover:border-teal-500/35 hover:shadow-card-hover"
    >
      <div className="accent-bar absolute inset-x-0 top-0 h-1 opacity-80 transition-opacity group-hover:opacity-100" />
      <h3 className="mt-1 line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-snug">
        {t(`services.${service.slug}.title`)}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-4">
        {t(`services.${service.slug}.short`)}
      </p>
      <span className="mt-5 text-sm font-semibold text-teal-500 transition-colors group-hover:text-navy-900">
        {t('common.learnMore')} →
      </span>
    </Link>
  )
}
