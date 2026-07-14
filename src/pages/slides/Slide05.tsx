export default function Slide05() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-exp">
        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Film reel with music notes coming out */}
              <circle cx="88" cy="96" r="62" fill="#2e2e3e" stroke="#1a1a1a" strokeWidth="2.5" />
              <circle cx="88" cy="96" r="46" fill="#1a1a1a" stroke="#555" strokeWidth="1.5" />
              <circle cx="88" cy="96" r="14" fill="#3a3a3a" stroke="#888" strokeWidth="2" />
              {/* reel spokes */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x1 = 88 + 14 * Math.cos(rad);
                const y1 = 96 + 14 * Math.sin(rad);
                const x2 = 88 + 44 * Math.cos(rad);
                const y2 = 96 + 44 * Math.sin(rad);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#555" strokeWidth="2" />;
              })}
              {/* sprocket holes */}
              {[30, 90, 150, 210, 270, 330].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const cx = 88 + 32 * Math.cos(rad);
                const cy = 96 + 32 * Math.sin(rad);
                return <circle key={i} cx={cx} cy={cy} r="5" fill="#2e2e3e" stroke="#888" strokeWidth="1" />;
              })}

              {/* Music notes floating from film reel */}
              <g fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.5">
                <ellipse cx="168" cy="58" rx="9" ry="7" transform="rotate(-15 168 58)" />
                <line x1="176" y1="54" x2="176" y2="32" stroke="#d64a00" strokeWidth="2.2" />
                <path d="M176 32 Q194 26 194 38" fill="#d64a00" strokeLinecap="round" />
                <ellipse cx="194" cy="45" rx="9" ry="7" transform="rotate(-15 194 45)" />
              </g>
              <g fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.4" transform="translate(198, 70) rotate(10)">
                <ellipse cx="12" cy="18" rx="8" ry="6" transform="rotate(-15 12 18)" />
                <line x1="19" y1="14" x2="19" y2="0" stroke="#4a8fd4" strokeWidth="2" />
              </g>

              {/* Game controller below */}
              <rect x="28" y="192" width="120" height="76" rx="28" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* D-pad */}
              <rect x="46" y="214" width="10" height="28" rx="2" fill="#555" stroke="#1a1a1a" strokeWidth="1.2" />
              <rect x="38" y="222" width="26" height="10" rx="2" fill="#555" stroke="#1a1a1a" strokeWidth="1.2" />
              {/* Buttons */}
              <circle cx="118" cy="210" r="7" fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="132" cy="222" r="7" fill="#d64a00" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="118" cy="234" r="7" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.8" />
              <circle cx="104" cy="222" r="7" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.8" />
              {/* Grips */}
              <ellipse cx="48" cy="264" rx="18" ry="14" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="128" cy="264" rx="18" ry="14" fill="#3a3a4e" stroke="#1a1a1a" strokeWidth="2" />
              {/* Start/select */}
              <rect x="72" y="220" width="14" height="6" rx="3" fill="#555" stroke="#888" strokeWidth="1" />
              <rect x="90" y="220" width="14" height="6" rx="3" fill="#555" stroke="#888" strokeWidth="1" />

              {/* Music note above controller */}
              <g fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.5" transform="translate(162, 186)">
                <ellipse cx="12" cy="18" rx="9" ry="7" transform="rotate(-15 12 18)" />
                <line x1="20" y1="14" x2="20" y2="-2" stroke="#5ec278" strokeWidth="2" />
                <path d="M20 -2 Q36 -8 36 4" fill="#5ec278" strokeLinecap="round" />
                <ellipse cx="36" cy="11" rx="9" ry="7" transform="rotate(-15 36 11)" />
              </g>

              {/* Theme park arch hint */}
              <path d="M172 292 Q210 250 248 292" stroke="#f5d74a" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="172" cy="292" r="5" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="248" cy="292" r="5" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="210" cy="248" r="8" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="1.5" />
              <g stroke="#d64a00" strokeWidth="1.5" strokeLinecap="round">
                <line x1="210" y1="232" x2="210" y2="224" />
                <line x1="205" y1="228" x2="215" y2="228" />
              </g>

              {/* Decorative sparkles */}
              <g stroke="#d64a00" strokeWidth="2" strokeLinecap="round">
                <line x1="264" y1="120" x2="264" y2="132" /><line x1="258" y1="126" x2="270" y2="126" />
              </g>
              <circle cx="28" cy="172" r="5" fill="#c47ae8" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 02 — How they work</span>
          <h2 className="slide-title">How Composers Work</h2>
          <div className="slide-divider" />
          <p className="slide-body">
            Composers apply their sonic talents way beyond just classical
            orchestrations. Today, they are heavily active in creating{' '}
            <strong>emotional soundtracks for films and TV</strong>, composing
            background tracks for <strong>mobile apps and video games</strong>,
            and even designing the ambient audio that sets the exact vibe for{' '}
            <strong>theme park attractions</strong> and public spaces.
          </p>
        </div>
      </div>
      <div className="slide-footer">05 / 11</div>
    </div>
  );
}
