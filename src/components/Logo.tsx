interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="InspectSea Survey"
      className={`h-12 w-auto object-contain ${variant === 'light' ? 'rounded-md' : ''} ${className ?? ''}`}
    />
  )
}
