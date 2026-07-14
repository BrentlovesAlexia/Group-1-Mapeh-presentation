interface NavZoneProps {
  dir: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}

export default function NavZone({ dir, onClick, disabled }: NavZoneProps) {
  return (
    <div
      className={`ss-nav ${dir === 'prev' ? 'ss-nav-left' : 'ss-nav-right'} ${disabled ? 'ss-nav-disabled' : ''}`}
      onClick={onClick}
      role="button"
      aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      <svg className="ss-nav-arrow" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {dir === 'prev' ? (
          <path d="M33 10 L18 26 L33 42" stroke="#1c1c1c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M19 10 L34 26 L19 42" stroke="#1c1c1c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </div>
  );
}
