interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({ title, subtitle, image = '/images/container-terminal.jpg' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/45" />
      <div className="container-page relative py-20 md:py-24">
        <span className="brand-gradient mb-5 block h-1.5 w-14 rounded-full" />
        <h1 className="text-4xl font-extrabold !text-white md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  )
}
