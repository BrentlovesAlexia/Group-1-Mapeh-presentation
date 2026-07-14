export default function Slide10() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-def">
        <div className="slide-num">05</div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 05</span>
          <h2 className="slide-title sketch-ul">Art Director</h2>
          <span className="slide-badge">Definition</span>
          <p className="slide-body">
            A <strong>high-level creative leader</strong> who oversees the
            entire visual identity and stylistic execution of a publication,
            media project, or production. Their job is to guide the collective
            artistic vision, ensuring that all <strong>graphics, layouts,
            color palettes, and typography</strong> work together to deliver
            a unified message.
          </p>
        </div>

        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Large mood board / vision board */}
              <rect x="34" y="52" width="232" height="152" rx="6" fill="#f5f0e8" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Pin board texture lines */}
              <line x1="34" y1="78" x2="266" y2="78" stroke="#e8e4d8" strokeWidth="1" />
              <line x1="34" y1="104" x2="266" y2="104" stroke="#e8e4d8" strokeWidth="1" />
              <line x1="34" y1="130" x2="266" y2="130" stroke="#e8e4d8" strokeWidth="1" />
              <line x1="34" y1="156" x2="266" y2="156" stroke="#e8e4d8" strokeWidth="1" />
              <line x1="34" y1="182" x2="266" y2="182" stroke="#e8e4d8" strokeWidth="1" />

              {/* Color palette swatches — pinned top left */}
              <rect x="44" y="60" width="16" height="16" rx="2" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-4 52 68)" />
              <rect x="64" y="58" width="16" height="16" rx="2" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(3 72 66)" />
              <rect x="84" y="61" width="16" height="16" rx="2" fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-2 92 69)" />
              <rect x="104" y="59" width="16" height="16" rx="2" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(5 112 67)" />
              <rect x="124" y="60" width="16" height="16" rx="2" fill="#c47ae8" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-3 132 68)" />
              {/* Push pin dots */}
              <circle cx="52" cy="60" r="3" fill="#d64a00" />
              <circle cx="72" cy="58" r="3" fill="#4a8fd4" />
              <circle cx="92" cy="61" r="3" fill="#5ec278" />

              {/* Typography sample — pinned */}
              <rect x="44" y="86" width="96" height="58" rx="3" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-2 92 115)" />
              <text x="52" y="104" fontFamily="Kalam, cursive" fontSize="14" fill="#1a1a1a" fontWeight="bold" transform="rotate(-2 92 104)">Aa</text>
              <rect x="54" y="107" width="60" height="5" rx="2" fill="#ccc" transform="rotate(-2 84 109)" />
              <rect x="54" y="116" width="76" height="4" rx="2" fill="#e0e0e0" transform="rotate(-2 92 118)" />
              <rect x="54" y="124" width="50" height="4" rx="2" fill="#e0e0e0" transform="rotate(-2 79 126)" />
              <circle cx="44" cy="86" r="3" fill="#f5d74a" />

              {/* Layout grid mockup */}
              <rect x="156" y="80" width="100" height="80" rx="3" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(3 206 120)" />
              <rect x="162" y="86" width="44" height="44" rx="2" fill="#d64a00" opacity="0.7" transform="rotate(3 184 108)" />
              <rect x="212" y="86" width="38" height="18" rx="2" fill="#ccc" transform="rotate(3 231 95)" />
              <rect x="212" y="108" width="38" height="8" rx="2" fill="#e0e0e0" transform="rotate(3 231 112)" />
              <rect x="212" y="120" width="26" height="8" rx="2" fill="#e0e0e0" transform="rotate(3 225 124)" />
              <rect x="162" y="136" width="88" height="16" rx="2" fill="#e0e0e0" transform="rotate(3 206 144)" />
              <circle cx="156" cy="80" r="3" fill="#c47ae8" />

              {/* Reference photo/image pinned */}
              <rect x="44" y="156" width="76" height="42" rx="3" fill="#e4f0ff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(2 82 177)" />
              <path d="M50 190 Q68 165 88 182 Q100 172 114 190" fill="#4a8fd4" opacity="0.5" stroke="none" transform="rotate(2 82 181)" />
              <circle cx="64" cy="168" r="8" fill="#f5d74a" opacity="0.6" transform="rotate(2 64 168)" />
              <circle cx="44" cy="156" r="3" fill="#5ec278" />

              {/* Note/sticky */}
              <rect x="178" y="168" width="72" height="34" rx="2" fill="#f5d74a" stroke="#c8a850" strokeWidth="1.5" transform="rotate(-5 214 185)" />
              <text x="185" y="182" fontFamily="Kalam, cursive" fontSize="8" fill="#7a6020" transform="rotate(-5 214 182)">UNIFIED</text>
              <text x="185" y="194" fontFamily="Kalam, cursive" fontSize="8" fill="#7a6020" transform="rotate(-5 214 194)">VISION ★</text>
              <circle cx="178" cy="168" r="3" fill="#d64a00" />

              {/* Person (art director) with clipboard */}
              <circle cx="150" cy="258" r="24" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2.2" />
              <path d="M127 249 Q133 229 150 227 Q167 229 173 249" fill="#4a3020" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="141" cy="257" r="2.8" fill="#1a1a1a" />
              <circle cx="159" cy="257" r="2.8" fill="#1a1a1a" />
              <path d="M143 268 Q150 274 157 268" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Body */}
              <path d="M126 282 Q122 310 120 330 L180 330 Q178 310 174 282 Q160 274 150 274 Q140 274 126 282Z" fill="#2e2e3e" stroke="#1a1a1a" strokeWidth="2" />
              {/* Clipboard */}
              <rect x="172" y="275" width="44" height="58" rx="3" fill="#dbb880" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="182" y="269" width="24" height="10" rx="3" fill="#c8a870" stroke="#1a1a1a" strokeWidth="1.8" />
              <rect x="176" y="282" width="36" height="44" rx="2" fill="#fffdf8" stroke="#1a1a1a" strokeWidth="1" />
              <line x1="180" y1="293" x2="208" y2="293" stroke="#ccc" strokeWidth="1" />
              <line x1="180" y1="302" x2="208" y2="302" stroke="#ccc" strokeWidth="1" />
              <line x1="180" y1="311" x2="208" y2="311" stroke="#ccc" strokeWidth="1" />
              <line x1="180" y1="320" x2="198" y2="320" stroke="#ccc" strokeWidth="1" />
              {/* Arm holding clipboard */}
              <path d="M174 290 Q185 284 192 280" stroke="#f9d5b0" strokeWidth="10" strokeLinecap="round" />
              <path d="M174 290 Q185 284 192 280" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Other arm gesturing */}
              <path d="M126 290 Q96 300 72 298" stroke="#f9d5b0" strokeWidth="10" strokeLinecap="round" />
              <path d="M126 290 Q96 300 72 298" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Pointing finger */}
              <line x1="72" y1="298" x2="50" y2="290" stroke="#f9d5b0" strokeWidth="7" strokeLinecap="round" />
              <line x1="72" y1="298" x2="50" y2="290" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none" />

              {/* Sparkles */}
              <g stroke="#d64a00" strokeWidth="2" strokeLinecap="round">
                <line x1="30" y1="270" x2="30" y2="282" /><line x1="24" y1="276" x2="36" y2="276" />
              </g>
              <circle cx="266" cy="210" r="5" fill="#4a8fd4" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="slide-footer">10 / 11</div>
    </div>
  );
}
