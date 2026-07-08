interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <img
      src="/images/logo.jpg"
      alt="InspectSea Survey"
      className={`h-11 w-auto object-contain ${variant === 'light' ? 'rounded-md bg-white px-2 py-1' : ''} ${className ?? ''}`}
    />
  )
}
