import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFound() {
  const { t } = useTranslation()
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="text-brand-gradient text-7xl font-extrabold">404</div>
      <p className="mt-4 text-muted">Page not found</p>
      <Link
        to="/"
        className="brand-gradient mt-8 rounded-full px-6 py-3 font-semibold text-white"
      >
        {t('nav.home')}
      </Link>
    </section>
  )
}
