interface SectionHeadingProps {
  eyebrow?: string
  title?: string
  titleBefore?: string
  titleAccent?: string
  titleAfter?: string
  subtitle?: string
  center?: boolean
  light?: boolean
  dark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  titleBefore,
  titleAccent,
  titleAfter,
  subtitle,
  center,
  light,
  dark,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
          <span className="accent-bar h-1 w-8 rounded-full" />
          <span
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              light ? 'text-teal-400' : dark ? 'text-teal-400' : 'text-teal-500'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold md:text-4xl ${
          light || dark ? '!text-white' : ''
        }`}
      >
        {titleBefore !== undefined ? (
          <>
            {titleBefore}
            <span className="text-flame-500">{titleAccent}</span>
            {titleAfter}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light || dark ? 'text-white/70' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
