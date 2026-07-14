export default function Slide01() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-title">
        <span className="slide-eyebrow">Group 1 · G10 Quezon · 2026</span>

        <h1 className="slide-big-title">
          Some Career<br />
          Opportunities<br />
          in the <span className="accent">Creative</span><br />
          Industries
        </h1>

        <p className="slide-sub">
          Five professional paths in art, music, media, and design — explored by Group 2.
        </p>

        {/* Illustration: creative industry collage — monitor, music note, game controller, brush, clapperboard */}
        <div className="slide-illustration slide-title-illo">
          <svg viewBox="0 0 420 390" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
            {/* Monitor with design grid */}
            <rect x="60" y="90" width="130" height="90" rx="7" fill="#2e2e3e" stroke="#1a1a1a" strokeWidth="2.2" />
            <rect x="70" y="99" width="110" height="68" rx="3" fill="#e4f0ff" />
            {/* Grid on monitor */}
            <line x1="70" y1="119" x2="180" y2="119" stroke="#ccc" strokeWidth="1" />
            <line x1="70" y1="139" x2="180" y2="139" stroke="#ccc" strokeWidth="1" />
            <line x1="110" y1="99" x2="110" y2="167" stroke="#ccc" strokeWidth="1" />
            <line x1="145" y1="99" x2="145" y2="167" stroke="#ccc" strokeWidth="1" />
            <rect x="75" y="104" width="30" height="12" rx="2" fill="#d64a00" opacity="0.8" />
            <rect x="115" y="104" width="22" height="12" rx="2" fill="#4a8fd4" opacity="0.8" />
            <rect x="75" y="125" width="50" height="8" rx="2" fill="#5ec278" opacity="0.7" />
            {/* Monitor stand */}
            <rect x="118" y="180" width="10" height="22" rx="2" fill="#888" stroke="#1a1a1a" strokeWidth="1.5" />
            <rect x="100" y="200" width="46" height="7" rx="3" fill="#aaa" stroke="#1a1a1a" strokeWidth="1.5" />

            {/* Pencil / pen */}
            <g transform="rotate(-22 280 200)">
              <rect x="264" y="78" width="22" height="160" rx="3" fill="#fde9a0" stroke="#1a1a1a" strokeWidth="2" />
              <polygon points="264,238 286,238 275,275" fill="#f4c84a" stroke="#1a1a1a" strokeWidth="2" />
              <polygon points="268,268 282,268 275,288" fill="#f9aa8a" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="275" y1="288" x2="275" y2="298" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
              <rect x="261" y="76" width="28" height="18" rx="2" fill="#d64a00" stroke="#1a1a1a" strokeWidth="2" />
            </g>

            {/* Music note */}
            <g transform="translate(58, 230)">
              <ellipse cx="22" cy="48" rx="14" ry="10" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-15 22 48)" />
              <line x1="35" y1="44" x2="35" y2="8" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M35 8 Q55 2 55 14" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="55" cy="30" rx="14" ry="10" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-15 55 30)" />
            </g>

            {/* Game controller */}
            <g transform="translate(186, 230)">
              <rect x="10" y="10" width="90" height="55" rx="22" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2.2" />
              {/* D-pad */}
              <rect x="22" y="26" width="8" height="22" rx="2" fill="#555" stroke="#1a1a1a" strokeWidth="1" />
              <rect x="16" y="32" width="20" height="8" rx="2" fill="#555" stroke="#1a1a1a" strokeWidth="1" />
              {/* Buttons */}
              <circle cx="79" cy="30" r="5" fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="89" cy="38" r="5" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="79" cy="46" r="5" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="69" cy="38" r="5" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* Grips */}
              <ellipse cx="28" cy="65" rx="14" ry="12" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="82" cy="65" rx="14" ry="12" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2" />
            </g>

            {/* Makeup brush */}
            <g transform="rotate(30 330 130)">
              <rect x="318" y="42" width="12" height="120" rx="3" fill="#c09070" stroke="#1a1a1a" strokeWidth="1.8" />
              <ellipse cx="324" cy="42" rx="10" ry="22" fill="#e8a0a0" stroke="#1a1a1a" strokeWidth="1.8" />
              <polygon points="318,162 330,162 325,185" fill="#fae8c8" stroke="#1a1a1a" strokeWidth="1.8" />
            </g>

            {/* Clapperboard / film */}
            <g transform="translate(60, 280)">
              <rect x="0" y="20" width="68" height="52" rx="4" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="0" y="20" width="68" height="16" rx="4" fill="#333" stroke="#1a1a1a" strokeWidth="2" />
              {/* stripes */}
              <line x1="0" y1="20" x2="16" y2="36" stroke="#fff" strokeWidth="4" />
              <line x1="18" y1="20" x2="34" y2="36" stroke="#fff" strokeWidth="4" />
              <line x1="36" y1="20" x2="52" y2="36" stroke="#fff" strokeWidth="4" />
              <line x1="54" y1="20" x2="68" y2="30" stroke="#fff" strokeWidth="4" />
              <rect x="6" y="44" width="56" height="22" rx="2" fill="#2a2a2a" />
              <line x1="6" y1="52" x2="62" y2="52" stroke="#555" strokeWidth="1" />
              <line x1="6" y1="60" x2="62" y2="60" stroke="#555" strokeWidth="1" />
            </g>

            {/* Decorative sparkles */}
            <g stroke="#d64a00" strokeWidth="2" strokeLinecap="round">
              <line x1="202" y1="88" x2="202" y2="100" /><line x1="196" y1="94" x2="208" y2="94" />
              <line x1="198" y1="90" x2="206" y2="98" /><line x1="206" y1="90" x2="198" y2="98" />
            </g>
            <g stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round">
              <line x1="356" y1="230" x2="356" y2="242" /><line x1="350" y1="236" x2="362" y2="236" />
            </g>
            <g stroke="#5ec278" strokeWidth="2" strokeLinecap="round">
              <line x1="50" y1="190" x2="50" y2="200" /><line x1="45" y1="195" x2="55" y2="195" />
            </g>
            <circle cx="360" cy="90" r="5" fill="#f5d74a" opacity="0.6" />
            <circle cx="40" cy="290" r="4" fill="#d64a00" opacity="0.5" />
            {/* Bottom squiggle */}
            <path d="M62 370 Q82 364 102 370 Q122 376 142 370 Q162 364 182 370 Q202 376 222 370 Q242 364 262 370 Q282 376 302 370 Q322 364 342 370" stroke="#d64a00" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.35" />
          </svg>
        </div>

        <div className="slide-credit">Group 1 · G10 Quezon · 2026</div>
      </div>
      <div className="slide-footer">01 / 11</div>
    </div>
  );
              }
