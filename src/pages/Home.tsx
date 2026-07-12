import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { services } from '../data/services'
import { gallery } from '../data/gallery'
import { ServiceCard } from '../components/ServiceCard'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'

export function Home() {
  const { t } = useTranslation()

  const props = t('valueProps.items', { returnObjects: true }) as { title: string; text: string }[]
  const industries = t('industries.items', { returnObjects: true }) as string[]

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="animate-hero-ken-burns absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />

        <div className="container-page relative w-full py-8 lg:py-10">
            <div className="max-w-2xl">
              <span
                className="animate-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                {t('hero.badge')}
              </span>
              <h1
                className="animate-in-up mt-4 text-3xl font-extrabold leading-[1.1] !text-white sm:text-4xl lg:text-5xl"
                style={{ animationDelay: '100ms' }}
              >
                {t('hero.titleBefore')}
                <span className="text-flame-400">{t('hero.titleAccent')}</span>
                {t('hero.titleAfter')}
              </h1>
              <p
                className="animate-in-up mt-4 max-w-xl text-base leading-relaxed text-white/85 lg:text-lg"
                style={{ animationDelay: '200ms' }}
              >
                {t('hero.subtitle')}
              </p>
              <div
                className="animate-in-up mt-6 flex flex-wrap gap-3"
                style={{ animationDelay: '300ms' }}
              >
                <Link
                  to="/contact"
                  className="brand-gradient rounded-full px-6 py-3 font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
                >
                  {t('hero.ctaPrimary')}
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </div>
        </div>
      </section>

      {/* Value props */}
      <section className="section-light py-20">
        <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t('common.company')}
            titleBefore={t('valueProps.titleBefore')}
            titleAccent={t('valueProps.titleAccent')}
            titleAfter={t('valueProps.titleAfter')}
            subtitle={t('valueProps.subtitle')}
            center
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
            <div
              className="card-surface group relative h-full overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:border-teal-500/35 hover:shadow-card-hover"
            >
              <span className="pointer-events-none absolute -right-1 -top-3 select-none text-6xl font-extrabold leading-none text-navy-900/[0.05] transition-colors group-hover:text-teal-500/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="accent-bar relative mb-4 block h-1 w-10 rounded-full transition-all group-hover:w-16" />
              <h3 className="relative text-lg font-bold">{p.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-alt py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={t('common.ourServices')}
                title={t('servicesSection.title')}
                subtitle={t('servicesSection.subtitle')}
              />
              <Link
                to="/services"
                className="text-sm font-semibold text-teal-500 transition-colors hover:text-teal-600"
              >
                {t('common.allServices')} →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-light py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} center />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:h-[34rem] lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 xl:h-[36rem]">
            {gallery.map((img, i) => {
              const layouts = [
                'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[16rem] lg:min-h-0',
                'min-h-[12rem] lg:min-h-0',
                'min-h-[12rem] lg:min-h-0',
                'sm:col-span-2 lg:col-span-2 min-h-[11rem] lg:min-h-0',
              ]
              return (
                <Reveal key={img.src} delay={i * 100} className={layouts[i]}>
                <figure
                  className="group relative h-full min-h-[inherit] overflow-hidden rounded-2xl ring-1 ring-navy-900/10"
                >
                  <img
                    src={img.src}
                    alt={t(`gallery.captions.${img.captionKey}`)}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent opacity-80" />
                  <figcaption className="absolute inset-x-4 bottom-4 translate-y-1 opacity-95 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="inline-flex max-w-full items-center gap-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                      <span className="accent-bar h-8 w-1 shrink-0 rounded-full" />
                      <span className="text-sm font-semibold leading-snug text-navy-950">
                        {t(`gallery.captions.${img.captionKey}`)}
                      </span>
                    </div>
                  </figcaption>
                </figure>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-alt py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading title={t('industries.title')} center />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((name, i) => (
              <Reveal key={name} delay={i * 60}>
              <span
                className="card-surface inline-block rounded-full px-5 py-2.5 text-sm font-medium text-navy-900 transition-all hover:-translate-y-0.5 hover:border-teal-500/35 hover:text-teal-600 hover:shadow-card-hover"
              >
                {name}
              </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-light py-20">
        <CtaBand />
      </div>
    </>
  )
}
