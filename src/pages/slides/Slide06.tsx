export default function Slide06() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-def">
        <div className="slide-num">03</div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 03</span>
          <h2 className="slide-title sketch-ul">Video Game Designer</h2>
          <span className="slide-badge">Definition</span>
          <p className="slide-body">
            A <strong>creative strategist</strong> who envisions and develops
            the core structure, mechanics, and interactive elements of a game.
            They act as the <strong>architects of the user experience</strong>,
            deciding how the game functions, how the rules work, and how a
            player progresses through the virtual world.
          </p>
        </div>

        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Blueprint / level map on paper */}
              <rect x="32" y="52" width="236" height="160" rx="6" fill="#1a3a6e" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Grid overlay */}
              {[56, 80, 104, 128, 152, 176, 200, 224, 248].map((x, i) => (
                <line key={`v${i}`} x1={x} y1="52" x2={x} y2="212" stroke="#2a5a9e" strokeWidth="0.8" />
              ))}
              {[76, 100, 124, 148, 172, 196].map((y, i) => (
                <line key={`h${i}`} x1="32" y1={y} x2="268" y2={y} stroke="#2a5a9e" strokeWidth="0.8" />
              ))}
              {/* Level layout elements */}
              {/* Start platform */}
              <rect x="44" y="175" width="50" height="12" rx="2" fill="#5ec278" stroke="#4aaa62" strokeWidth="1.5" />
              <text x="69" y="186" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="8" fill="#fff">START</text>
              {/* Platforms */}
              <rect x="110" y="152" width="40" height="10" rx="2" fill="#fde9a0" stroke="#c8a850" strokeWidth="1.5" />
              <rect x="162" y="128" width="40" height="10" rx="2" fill="#fde9a0" stroke="#c8a850" strokeWidth="1.5" />
              <rect x="110" y="104" width="40" height="10" rx="2" fill="#fde9a0" stroke="#c8a850" strokeWidth="1.5" />
              {/* Hazard */}
              <path d="M78 175 L84 165 L90 175Z" fill="#d64a00" stroke="#b03800" strokeWidth="1.5" />
              <path d="M92 175 L98 163 L104 175Z" fill="#d64a00" stroke="#b03800" strokeWidth="1.5" />
              {/* Coin pickups */}
              <circle cx="122" cy="144" r="5" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.5" />
              <circle cx="134" cy="144" r="5" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.5" />
              <circle cx="175" cy="120" r="5" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.5" />
              {/* End flag */}
              <line x1="210" y1="104" x2="210" y2="72" stroke="#fff" strokeWidth="2" />
              <polygon points="210,72 234,80 210,88" fill="#d64a00" stroke="#b03800" strokeWidth="1.2" />
              {/* Boss door */}
              <rect x="228" y="152" width="28" height="36" rx="2" fill="#c47ae8" stroke="#9a4ab8" strokeWidth="1.5" />
              <circle cx="242" cy="170" r="4" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.2" />
              <text x="242" y="198" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="7" fill="#aaa">BOSS</text>
              {/* Player marker */}
              <circle cx="58" cy="164" r="8" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="2" />
              <polygon points="54,160 62,160 58,154" fill="#fff" />
              {/* Blueprint label */}
              <text x="148" y="70" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="10" fill="#6a9aee">LEVEL 01 — DESIGN MAP</text>

              {/* Game controller below */}
              <rect x="72" y="234" width="156" height="74" rx="28" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2.5" />
              <rect x="90" y="248" width="10" height="28" rx="2" fill="#555" stroke="#1a1a1a" strokeWidth="1.2" />
              <rect x="82" y="256" width="26" height="10" rx="2" fill="#555" stroke="#1a1a1a" strokeWidth="1.2" />
              <circle cx="184" cy="250" r="7" fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="198" cy="262" r="7" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="184" cy="274" r="7" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="170" cy="262" r="7" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.8" />
              <ellipse cx="90" cy="300" rx="18" ry="13" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="210" cy="300" rx="18" ry="13" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="130" y="256" width="14" height="6" rx="3" fill="#555" />
              <rect x="150" y="256" width="14" height="6" rx="3" fill="#555" />

              {/* Sparkles */}
              <g stroke="#f5d74a" strokeWidth="2" strokeLinecap="round">
                <line x1="36" y1="240" x2="36" y2="252" /><line x1="30" y1="246" x2="42" y2="246" />
              </g>
              <circle cx="270" cy="234" r="5" fill="#d64a00" opacity="0.55" />
            </svg>
          </div>
        </div>
      </div>
      <div className="slide-footer">06 / 11</div>
    </div>
  );
}
