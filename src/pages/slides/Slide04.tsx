export default function Slide04() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-def">
        <div className="slide-num">02</div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 02</span>
          <h2 className="slide-title sketch-ul">Composer</h2>
          <span className="slide-badge">Definition</span>
          <p className="slide-body">
            A <strong>musical artist</strong> who writes, arranges, and
            structures original pieces of music. They leverage a deep
            understanding of <strong>music theory</strong>, instrumentation,
            and vocal production to build complex melodies and harmonies from
            scratch, tailoring the entire soundscape to match a specific mood
            or theme.
          </p>
        </div>

        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Grand piano body */}
              <path d="M38 200 Q38 172 62 168 L220 168 Q252 168 258 196 Q262 218 240 228 L80 240 Q46 242 38 220 Z" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2.5" />
              <path d="M42 202 Q42 178 64 174 L218 174 Q246 174 252 198 Q254 216 234 224 L82 234 Q50 236 42 216 Z" fill="#2e2e2e" />
              {/* Piano keys */}
              <rect x="64" y="196" width="172" height="34" rx="3" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* White keys dividers */}
              {[80, 96, 112, 128, 144, 160, 176, 192, 208, 224].map((x, i) => (
                <line key={i} x1={x} y1="196" x2={x} y2="230" stroke="#ccc" strokeWidth="1" />
              ))}
              {/* Black keys */}
              {[72, 88, 112, 128, 144, 168, 184, 200, 216].map((x, i) => (
                <rect key={i} x={x} y="196" width="10" height="20" rx="1" fill="#1a1a1a" />
              ))}
              {/* Piano lid */}
              <path d="M62 168 Q62 148 88 142 L220 142 Q252 148 258 168" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M68 168 Q68 152 90 148 L218 148 Q246 152 252 168" fill="#2e2e2e" />
              {/* Leg */}
              <rect x="62" y="238" width="10" height="48" rx="2" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />
              <rect x="228" y="234" width="10" height="52" rx="2" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Sheet music stand */}
              <rect x="130" y="108" width="60" height="44" rx="3" fill="#fffdf8" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="138" y1="118" x2="182" y2="118" stroke="#ccc" strokeWidth="1" />
              <line x1="138" y1="126" x2="182" y2="126" stroke="#ccc" strokeWidth="1" />
              <line x1="138" y1="134" x2="182" y2="134" stroke="#ccc" strokeWidth="1" />
              {/* Music notes on sheet */}
              <circle cx="145" cy="116" r="3.5" fill="#1a1a1a" />
              <line x1="148" y1="116" x2="148" y2="106" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="158" cy="124" r="3.5" fill="#1a1a1a" />
              <line x1="161" y1="124" x2="161" y2="114" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="170" cy="120" r="3.5" fill="#1a1a1a" />
              <line x1="173" y1="120" x2="173" y2="110" stroke="#1a1a1a" strokeWidth="1.5" />
              <path d="M148 106 L161 108" stroke="#1a1a1a" strokeWidth="1.5" />
              <rect x="128" y="148" width="4" height="28" rx="1" fill="#888" stroke="#1a1a1a" strokeWidth="1" />
              <rect x="188" y="148" width="4" height="28" rx="1" fill="#888" stroke="#1a1a1a" strokeWidth="1" />

              {/* Person (composer) */}
              <circle cx="96" cy="72" r="26" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2.2" />
              <path d="M71 62 Q78 41 96 39 Q114 41 121 62" fill="#4a3020" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="87" cy="70" r="2.8" fill="#1a1a1a" />
              <circle cx="105" cy="70" r="2.8" fill="#1a1a1a" />
              <path d="M89 82 Q96 89 103 82" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Body */}
              <path d="M70 98 Q66 132 64 168 L128 168 Q126 132 122 98 Q108 90 96 90 Q84 90 70 98Z" fill="#4a7fd4" stroke="#1a1a1a" strokeWidth="2" />
              {/* Arm reaching to keys */}
              <path d="M122 110 Q148 142 166 192" stroke="#f9d5b0" strokeWidth="12" strokeLinecap="round" />
              <path d="M122 110 Q148 142 166 192" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Floating music notes */}
              <g fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.5">
                <ellipse cx="248" cy="88" rx="9" ry="7" transform="rotate(-15 248 88)" />
                <line x1="256" y1="84" x2="256" y2="62" stroke="#1a1a1a" strokeWidth="2" />
                <path d="M256 62 Q272 56 272 66" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="272" cy="72" rx="9" ry="7" transform="rotate(-15 272 72)" />
              </g>
              <g fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5" transform="translate(20,78) scale(0.75)">
                <ellipse cx="18" cy="22" rx="10" ry="7" transform="rotate(-15 18 22)" />
                <line x1="27" y1="18" x2="27" y2="0" stroke="#d64a00" strokeWidth="2" />
                <path d="M27 0 Q44 -6 44 6" fill="#d64a00" stroke="#d64a00" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="44" cy="13" rx="10" ry="7" transform="rotate(-15 44 13)" />
              </g>
              {/* Treble clef hint */}
              <text x="34" y="140" fontFamily="serif" fontSize="42" fill="#d64a00" opacity="0.2">𝄞</text>

              {/* Sparkles */}
              <g stroke="#f5d74a" strokeWidth="2" strokeLinecap="round">
                <line x1="238" y1="130" x2="238" y2="142" /><line x1="232" y1="136" x2="244" y2="136" />
              </g>
              <circle cx="28" cy="220" r="4" fill="#5ec278" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="slide-footer">04 / 11</div>
    </div>
  );
}
