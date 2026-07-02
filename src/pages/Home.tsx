import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { services } from '../data/services'
import { gallery } from '../data/gallery'
import { ServiceCard } from '../components/ServiceCard'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'

export function Home() {
  const { t } = useTranslation()

  const stats = [
    { value: '5 000+', label: t('hero.stat1') },
    { value: '15+', label: t('hero.stat2') },
    { value: '24/7', label: t('hero.stat3') },
    { value: '30+', label: t('hero.stat4') },
  ]

  const props = t('valueProps.items', { returnObjects: true }) as { title: string; text: string }[]
  const industries = t('industries.items', { returnObjects: true }) as string[]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />

        <div className="container-page relative py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              {t('hero.badge')}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] !text-white md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{t('hero.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="brand-gradient rounded-full px-7 py-3.5 font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-xs text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t('common.company')}
          title={t('valueProps.title')}
          subtitle={t('valueProps.subtitle')}
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card transition-colors hover:border-teal-500/40"
            >
              <span className="brand-gradient mb-4 block h-1 w-10 rounded-full transition-all group-hover:w-16" />
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-950/[0.03] py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={t('common.ourServices')}
              title={t('servicesSection.title')}
              subtitle={t('servicesSection.subtitle')}
            />
            <Link to="/services" className="text-sm font-semibold text-teal-500 hover:underline">
              {t('common.allServices')} →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-page py-20">
        <SectionHeading eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} center />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((img) => (
            <figure
              key={img.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={img.src}
                alt={t(`gallery.captions.${img.captionKey}`)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                {t(`gallery.captions.${img.captionKey}`)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-navy-950/[0.03] py-20">
        <div className="container-page">
          <SectionHeading title={t('industries.title')} center />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((name) => (
              <span
                key={name}
                className="rounded-full border border-navy-900/10 bg-white px-5 py-2.5 text-sm font-medium text-navy-900 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBand />
      </div>
    </>
  )
}
