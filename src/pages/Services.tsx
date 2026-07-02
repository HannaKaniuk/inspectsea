import { useTranslation } from 'react-i18next'
import { services } from '../data/services'
import { ServiceCard } from '../components/ServiceCard'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'

export function Services() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero title={t('servicesSection.title')} subtitle={t('servicesSection.subtitle')} />
      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CtaBand />
      <div className="pb-8" />
    </>
  )
}
