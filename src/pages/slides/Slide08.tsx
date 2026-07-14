import React from 'react';

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
              
              {/* Define a clean circular clip path for your PNG */}
              <defs>
                <clipPath id="face-clip">
                  <circle cx="152" cy="148" r="76" />
                </clipPath>
              </defs>

              {/* 1. Face background backing/shadow */}
              <circle cx="156" cy="152" r="76" fill="#1a1a1a" opacity="0.15" />

              {/* 2. Your custom PNG image (Clipped to a perfect circular canvas) */}
              <image 
                href="/makeup-artist.png" 
                x="76" 
                y="72" 
                width="152" 
                height="152" 
                clipPath="url(#face-clip)" 
                preserveAspectRatio="xMidYMid slice"
              />

              {/* 3. The hand-drawn outline tracing the PNG canvas */}
              <circle cx="152" cy="148" r="76" stroke="#1a1a1a" strokeWidth="3" fill="none" />

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
      <div className="slide-footer">08 / 12</div>
    </div>
  );
}
