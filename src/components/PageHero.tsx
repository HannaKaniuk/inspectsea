interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({ title, subtitle, image = '/images/container-terminal.jpg' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        className="animate-hero-ken-burns absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
      <div className="container-page relative py-20 md:py-24">
        <span className="accent-bar animate-in-up mb-5 block h-1.5 w-14 rounded-full" />
        <h1 className="animate-in-up text-4xl font-extrabold !text-white md:text-5xl" style={{ animationDelay: '80ms' }}>
          {title}
        </h1>
        {subtitle && (
          <p
            className="animate-in-up mt-4 max-w-2xl text-lg text-white/75"
            style={{ animationDelay: '160ms' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
