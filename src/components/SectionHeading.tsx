interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, center, light }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? 'text-teal-400' : 'text-teal-500'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-extrabold md:text-4xl ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
