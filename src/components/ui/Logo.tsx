type LogoProps = { compact?: boolean }

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="logo" aria-label="FE COSTA">
      <span aria-hidden="true" className="logo-f">F</span>
      <span aria-hidden="true" className="logo-e">
        <i />
        <i />
        <i />
      </span>
      {!compact && <span aria-hidden="true" className="logo-costa">COSTA</span>}
    </span>
  )
}
