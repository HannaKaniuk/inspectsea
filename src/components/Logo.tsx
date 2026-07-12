interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  if (variant === 'light') {
    return (
      <span className="inline-flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-md">
        <img
          src="/images/logo-footer.png"
          alt="InspectSea Survey"
          className={`h-full w-full object-contain ${className ?? ''}`}
        />
      </span>
    )
  }

  return (
    <span
      className={`font-display text-2xl font-extrabold tracking-tight italic sm:text-[1.65rem] ${className ?? ''}`}
    >
      <span className="text-navy-900">Inspect</span>
      <span className="text-logo-gradient">Sea</span>
    </span>
  )
}
