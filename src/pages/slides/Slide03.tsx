export default function Slide03() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-exp">
        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Brand logo mockup — bold circular logo */}
              <circle cx="100" cy="90" r="58" fill="#2e2e3e" stroke="#1a1a1a" strokeWidth="2.5" />
              <circle cx="100" cy="90" r="44" fill="none" stroke="#d64a00" strokeWidth="4" />
              <text x="100" y="84" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="18" fill="#fff" fontWeight="bold">BRAND</text>
              <text x="100" y="103" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="10" fill="#d64a00" letterSpacing="4">STUDIO</text>
              {/* sparkle above logo */}
              <g stroke="#f5d74a" strokeWidth="2" strokeLinecap="round">
                <line x1="100" y1="18" x2="100" y2="28" /><line x1="95" y1="23" x2="105" y2="23" />
              </g>

              {/* Book cover mockup */}
              <rect x="178" y="38" width="80" height="110" rx="4" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="184" y="46" width="68" height="94" rx="2" fill="#3a7fc4" />
              <rect x="190" y="54" width="56" height="8" rx="2" fill="#fff" opacity="0.8" />
              <rect x="190" y="66" width="38" height="6" rx="2" fill="#fff" opacity="0.5" />
              <circle cx="218" cy="102" r="20" fill="#d64a00" opacity="0.7" stroke="#fff" strokeWidth="1.5" />
              <rect x="184" y="124" width="68" height="8" rx="2" fill="#fff" opacity="0.3" />
              {/* Book spine */}
              <rect x="174" y="38" width="8" height="110" rx="2" fill="#2a5a94" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Social media post mockup */}
              <rect x="24" y="172" width="148" height="118" rx="8" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
              {/* Header bar */}
              <rect x="24" y="172" width="148" height="28" rx="8" fill="#f5f0e8" />
              <rect x="24" y="188" width="148" height="12" fill="#f5f0e8" />
              <circle cx="42" cy="186" r="8" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5" />
              <rect x="56" y="181" width="46" height="5" rx="2" fill="#ccc" />
              <rect x="56" y="190" width="28" height="4" rx="2" fill="#e0e0e0" />
              {/* Post image */}
              <rect x="30" y="204" width="136" height="62" rx="4" fill="#e4f0ff" stroke="#e0e0e0" strokeWidth="1" />
              <rect x="30" y="204" width="68" height="62" rx="4" fill="#d64a00" opacity="0.7" />
              <rect x="104" y="204" width="62" height="30" rx="2" fill="#4a8fd4" opacity="0.6" />
              <rect x="104" y="236" width="62" height="30" rx="2" fill="#5ec278" opacity="0.6" />
              {/* Like bar */}
              <rect x="30" y="272" width="30" height="12" rx="3" fill="#f0f0f0" />
              <text x="35" y="282" fontFamily="Kalam, cursive" fontSize="9" fill="#666">♥ 248</text>

              {/* Product packaging */}
              <rect x="192" y="172" width="70" height="90" rx="5" fill="#5ec278" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="198" y="180" width="58" height="56" rx="3" fill="#4aaa62" />
              <rect x="200" y="186" width="54" height="10" rx="2" fill="#fff" opacity="0.8" />
              <circle cx="227" cy="218" r="16" fill="#fff" opacity="0.4" />
              <rect x="200" y="240" width="54" height="6" rx="2" fill="#fff" opacity="0.5" />
              {/* package label strip */}
              <rect x="192" y="248" width="70" height="14" rx="2" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="227" y="259" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="8" fill="#1a1a1a">FRESH CO.</text>

              {/* Decorative elements */}
              <g stroke="#d64a00" strokeWidth="2" strokeLinecap="round">
                <line x1="170" y1="60" x2="170" y2="72" /><line x1="164" y1="66" x2="176" y2="66" />
              </g>
              <circle cx="274" cy="172" r="6" fill="#f5d74a" opacity="0.7" />
              <path d="M26 148 Q60 140 94 148 Q128 156 162 148" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 01 — How they work</span>
          <h2 className="slide-title">How Graphic Designers Work</h2>
          <div className="slide-divider" />
          <p className="slide-body">
            In the actual business landscape, graphic designers are the
            masterminds behind <strong>recognizable brand logos</strong>,{' '}
            aesthetic book covers, and clean product packaging.
            <br /><br />
            They blend art with digital tools to build high-level visual layouts
            for <strong>websites, magazines, and social media campaigns</strong>,
            making sure information looks sharp, professional, and visually
            balanced.
          </p>
        </div>
      </div>
      <div className="slide-footer">03 / 11</div>
    </div>
  );
}
