interface WomenSymbolProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function WomenSymbol({
  className = "",
  size = 120,
  color = "#E11D48",
  strokeWidth = 3,
}: WomenSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="40" r="30" stroke={color} strokeWidth={strokeWidth} />
      <line x1="50" y1="70" x2="50" y2="110" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="35" y1="90" x2="65" y2="90" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function WomenSymbolFilled({
  className = "",
  size = 60,
}: WomenSymbolProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="symbolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="40" r="30" stroke="url(#symbolGrad)" strokeWidth="4" fill="none" />
      <circle cx="50" cy="40" r="20" fill="url(#symbolGrad)" opacity="0.15" />
      <line x1="50" y1="70" x2="50" y2="110" stroke="url(#symbolGrad)" strokeWidth="4" strokeLinecap="round" />
      <line x1="35" y1="90" x2="65" y2="90" stroke="url(#symbolGrad)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
