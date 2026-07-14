export default function Slide09() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-exp">
        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Runway / catwalk stage */}
              <rect x="80" y="250" width="140" height="50" rx="4" fill="#1a1a2e" stroke="#1a1a1a" strokeWidth="2.2" />
              <rect x="80" y="250" width="140" height="8" rx="4" fill="#2a2a4e" />
              {/* Stage lights strip */}
              {[92, 108, 124, 140, 156, 172, 188, 204].map((x, i) => (
                <circle key={i} cx={x} cy="254" r="4" fill="#f5d74a" stroke="#c8a850" strokeWidth="1" />
              ))}
              {/* Runway strip */}
              <rect x="130" y="180" width="40" height="72" rx="2" fill="#2a2a4e" stroke="#3a3a6e" strokeWidth="1.5" />
              <line x1="150" y1="180" x2="150" y2="252" stroke="#3a3a6e" strokeWidth="1" strokeDasharray="6 4" />

              {/* Fashion model on runway */}
              <circle cx="150" cy="80" r="24" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2.2" />
              {/* Dramatic makeup on model */}
              <path d="M128 72 Q135 55 150 53 Q165 55 172 72" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* Dramatic eye makeup */}
              <path d="M133 78 Q142 72 151 78" stroke="#4a1a8a" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M149 78 Q158 72 167 78" stroke="#4a1a8a" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
              <circle cx="142" cy="79" r="5" fill="#1a1a1a" />
              <circle cx="158" cy="79" r="5" fill="#1a1a1a" />
              <circle cx="144" cy="77" r="2" fill="#fff" />
              <circle cx="160" cy="77" r="2" fill="#fff" />
              {/* Blush */}
              <ellipse cx="133" cy="88" rx="10" ry="6" fill="#f4a0b0" opacity="0.5" transform="rotate(-8 133 88)" />
              <ellipse cx="167" cy="88" rx="10" ry="6" fill="#f4a0b0" opacity="0.5" transform="rotate(8 167 88)" />
              {/* Dramatic lips */}
              <path d="M139 96 Q150 92 161 96 Q155 104 150 105 Q145 104 139 96Z" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* Elegant fashion outfit */}
              <path d="M126 104 Q120 144 118 178 L182 178 Q180 144 174 104 Q162 96 150 96 Q138 96 126 104Z" fill="#c47ae8" stroke="#1a1a1a" strokeWidth="2" />
              {/* Dress detail */}
              <path d="M118 178 Q134 200 150 250 Q166 200 182 178" fill="#c47ae8" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M128 140 L172 140" stroke="#9a4ab8" strokeWidth="1" />
              <path d="M122 160 L178 160" stroke="#9a4ab8" strokeWidth="1" />
              {/* Flowing cape/scarf */}
              <path d="M126 108 Q80 100 52 128 Q48 148 72 158 Q100 132 126 128" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.8" opacity="0.85" />
              {/* Arms */}
              <path d="M174 112 Q196 130 210 148" stroke="#f9d5b0" strokeWidth="10" strokeLinecap="round" />
              <path d="M174 112 Q196 130 210 148" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Special effects makeup tools — right side */}
              {/* Prosthetic scar piece */}
              <path d="M222 62 Q232 58 240 66 Q244 74 236 80 Q224 76 222 62Z" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="1.5" />
              <path d="M226 68 Q233 63 238 70" stroke="#d4905a" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M226 73 Q232 78 238 72" stroke="#d4905a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <text x="240" y="58" fontFamily="Kalam, cursive" fontSize="8" fill="#888">SFX</text>

              {/* Latex bottle */}
              <rect x="236" y="94" width="22" height="50" rx="6" fill="#f5f0e8" stroke="#1a1a1a" strokeWidth="1.8" />
              <rect x="240" y="82" width="14" height="16" rx="4" fill="#e8e0d0" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="247" y="122" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="7" fill="#888">LATEX</text>

              {/* Palette with FX colors */}
              <ellipse cx="252" cy="186" rx="34" ry="28" fill="#f5f0e8" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="238" cy="178" rx="14" ry="10" fill="#f5f0e8" stroke="#888" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="230" cy="170" r="8" fill="#d4905a" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="246" cy="166" r="7" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="262" cy="174" r="8" fill="#8b4513" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="256" cy="192" r="7" fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="238" cy="196" r="6" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Spotlight beams */}
              <path d="M40 40 L90 200 L60 200Z" fill="#f5d74a" opacity="0.06" />
              <path d="M270 30 L210 200 L240 200Z" fill="#f5d74a" opacity="0.06" />
              {/* Spotlight fixtures */}
              <rect x="28" y="28" width="28" height="16" rx="4" fill="#555" stroke="#1a1a1a" strokeWidth="1.8" transform="rotate(20 42 36)" />
              <ellipse cx="42" cy="44" rx="10" ry="6" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.5" transform="rotate(20 42 44)" />
              <rect x="246" y="20" width="28" height="16" rx="4" fill="#555" stroke="#1a1a1a" strokeWidth="1.8" transform="rotate(-20 260 28)" />
              <ellipse cx="258" cy="36" rx="10" ry="6" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.5" transform="rotate(-20 258 36)" />

              {/* Sparkles */}
              <g stroke="#c47ae8" strokeWidth="2" strokeLinecap="round">
                <line x1="50" y1="160" x2="50" y2="172" /><line x1="44" y1="166" x2="56" y2="166" />
              </g>
              <circle cx="218" cy="238" r="4" fill="#f5d74a" opacity="0.7" />
            </svg>
          </div>
        </div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 04 — How they work</span>
          <h2 className="slide-title">How Makeup Artists Work</h2>
          <div className="slide-divider" />
          <p className="slide-body">
            Makeup artists work in high-stakes fields like{' '}
            <strong>high-fashion runways</strong>, professional photography
            sets, and major media events.
            <br /><br />
            Many specialize in <strong>special effects makeup</strong> for the
            entertainment industry, using <strong>prosthetics, liquid latex,
            and paint</strong> to create realistic wounds, aging, or alien
            looks for movies, TV shows, and theater productions.
          </p>
        </div>
      </div>
      <div className="slide-footer">09 / 11</div>
    </div>
  );
}
