export default function Slide08() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-def">
        <div className="slide-num">04</div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 04</span>
          <h2 className="slide-title sketch-ul">Makeup Artist</h2>
          <span className="slide-badge">Definition</span>
          <p className="slide-body">
            A beauty and cosmetic professional who uses the{' '}
            <strong>human face and body as a literal canvas</strong> to enhance
            appearance, alter physical features, or completely transform a person
            into a character. Using cosmetic products as their primary medium,
            they blend <strong>artistic technique</strong> with advanced
            knowledge of skin texture and lighting dynamics.
          </p>
        </div>

        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Large face outline */}
              <ellipse cx="152" cy="148" rx="86" ry="104" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Hair */}
              <path d="M68 118 Q64 62 100 44 Q128 28 152 28 Q176 28 204 44 Q240 62 236 118" fill="#3a2510" stroke="#1a1a1a" strokeWidth="2.2" />
              {/* Face highlights — makeup blush */}
              <ellipse cx="112" cy="160" rx="20" ry="12" fill="#f4a0b0" opacity="0.5" transform="rotate(-10 112 160)" />
              <ellipse cx="192" cy="160" rx="20" ry="12" fill="#f4a0b0" opacity="0.5" transform="rotate(10 192 160)" />
              {/* Bold eye makeup - left */}
              <path d="M102 128 Q120 116 138 128 Q120 140 102 128Z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="120" cy="128" r="9" fill="#3a2510" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="123" cy="125" r="3" fill="#fff" />
              {/* Bold eye makeup - right */}
              <path d="M166 128 Q184 116 202 128 Q184 140 166 128Z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="184" cy="128" r="9" fill="#3a2510" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="187" cy="125" r="3" fill="#fff" />
              {/* Dramatic eye shadow top */}
              <path d="M100 124 Q120 110 140 124" stroke="#c47ae8" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M164 124 Q184 110 204 124" stroke="#c47ae8" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.6" />
              {/* Eyelashes left */}
              <g stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
                <line x1="104" y1="122" x2="100" y2="116" />
                <line x1="112" y1="118" x2="110" y2="112" />
                <line x1="120" y1="116" x2="120" y2="110" />
                <line x1="128" y1="118" x2="130" y2="112" />
                <line x1="136" y1="122" x2="140" y2="116" />
              </g>
              {/* Eyelashes right */}
              <g stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
                <line x1="168" y1="122" x2="164" y2="116" />
                <line x1="176" y1="118" x2="174" y2="112" />
                <line x1="184" y1="116" x2="184" y2="110" />
                <line x1="192" y1="118" x2="194" y2="112" />
                <line x1="200" y1="122" x2="204" y2="116" />
              </g>
              {/* Nose */}
              <path d="M148 140 Q152 162 156 140" stroke="#d4905a" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M144 168 Q152 174 160 168" stroke="#d4905a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Lips — bold lip color */}
              <path d="M124 188 Q138 180 152 182 Q166 180 180 188 Q170 200 152 202 Q134 200 124 188Z" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.8" />
              <path d="M124 188 Q138 192 152 190 Q166 192 180 188" stroke="#b03800" strokeWidth="1" fill="none" />

              {/* Makeup brush 1 (large, left side) */}
              <g transform="rotate(28 44 180)">
                <rect x="30" y="52" width="14" height="140" rx="4" fill="#c09070" stroke="#1a1a1a" strokeWidth="1.8" />
                <ellipse cx="37" cy="52" rx="13" ry="30" fill="#e8a0a0" stroke="#1a1a1a" strokeWidth="1.8" />
                <polygon points="30,192 44,192 38,218" fill="#fae8c8" stroke="#1a1a1a" strokeWidth="1.8" />
              </g>

              {/* Makeup brush 2 (pencil liner) */}
              <g transform="rotate(-24 258 170)">
                <rect x="248" y="68" width="10" height="110" rx="2" fill="#fde9a0" stroke="#1a1a1a" strokeWidth="1.8" />
                <polygon points="248,178 258,178 253,200" fill="#f4c84a" stroke="#1a1a1a" strokeWidth="1.8" />
                <polygon points="250,195 256,195 253,210" fill="#3a2510" stroke="#1a1a1a" strokeWidth="1.8" />
                <line x1="253" y1="210" x2="253" y2="218" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="246" y="66" width="14" height="12" rx="2" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.8" />
              </g>

              {/* Compact mirror bottom */}
              <ellipse cx="152" cy="280" rx="50" ry="22" fill="#c8c8d4" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="152" cy="275" rx="50" ry="22" fill="#e8e8ee" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="152" cy="275" rx="38" ry="16" fill="#d0d8f0" stroke="#aaa" strokeWidth="1" />
              <ellipse cx="152" cy="275" rx="28" ry="10" fill="#c0c8e8" stroke="#aaa" strokeWidth="0.8" />
              {/* Reflection sparkle */}
              <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <line x1="142" y1="272" x2="142" y2="280" /><line x1="138" y1="276" x2="146" y2="276" />
              </g>

              {/* Lipstick tube */}
              <rect x="242" y="238" width="20" height="46" rx="3" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.8" />
              <rect x="239" y="226" width="26" height="16" rx="2" fill="#b03800" stroke="#1a1a1a" strokeWidth="1.8" />
              <ellipse cx="252" cy="226" rx="11" ry="5" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Sparkles */}
              <g stroke="#c47ae8" strokeWidth="2" strokeLinecap="round">
                <line x1="40" y1="282" x2="40" y2="294" /><line x1="34" y1="288" x2="46" y2="288" />
              </g>
              <circle cx="268" cy="52" r="5" fill="#f5d74a" opacity="0.7" />
              <g stroke="#f5d74a" strokeWidth="2" strokeLinecap="round">
                <line x1="36" y1="44" x2="36" y2="56" /><line x1="30" y1="50" x2="42" y2="50" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="slide-footer">08 / 11</div>
    </div>
  );
}
