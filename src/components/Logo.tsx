interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const inspectColor = variant === 'light' ? '#ffffff' : 'var(--color-navy-900)'
  const surveyColor = variant === 'light' ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="sail" x1="12" y1="52" x2="52" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0b3b5e" />
            <stop offset="0.55" stopColor="#17a6c9" />
            <stop offset="1" stopColor="#3db54a" />
          </linearGradient>
        </defs>
        {/* main sail */}
        <path d="M34 6C40 20 42 34 40 46L28 46C28 32 30 18 34 6Z" fill="url(#sail)" />
        {/* front sail */}
        <path d="M31 14C28 26 26 36 25 46L15 46C19 34 24 22 31 14Z" fill="#0b3b5e" opacity="0.85" />
        {/* waves */}
        <path
          d="M8 52C14 55 18 55 24 52C30 49 34 49 40 52C46 55 50 55 56 52"
          stroke="url(#sail)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-xl font-extrabold leading-none tracking-tight">
        <span style={{ color: inspectColor }}>INSPECT</span>
        <span className="text-brand-gradient">SEA</span>
        <span
          className="ml-1 block text-[0.55rem] font-semibold tracking-[0.35em]"
          style={{ color: surveyColor }}
        >
          SURVEY
        </span>
      </span>
    </span>
  )
}
