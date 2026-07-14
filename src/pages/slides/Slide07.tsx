export default function Slide07() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-exp">
        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Three people collaborating around a table */}
              {/* Table */}
              <ellipse cx="150" cy="210" rx="108" ry="44" fill="#c8a870" stroke="#1a1a1a" strokeWidth="2.2" />
              <ellipse cx="150" cy="204" rx="108" ry="44" fill="#dbb880" stroke="#1a1a1a" strokeWidth="2.2" />

              {/* Documents on table */}
              <rect x="100" y="178" width="60" height="44" rx="3" fill="#fffdf8" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-5 130 200)" />
              <line x1="108" y1="190" x2="152" y2="188" stroke="#e0e0e0" strokeWidth="1" transform="rotate(-5 130 189)" />
              <line x1="108" y1="198" x2="152" y2="196" stroke="#e0e0e0" strokeWidth="1" transform="rotate(-5 130 197)" />
              <line x1="108" y1="206" x2="136" y2="204" stroke="#e0e0e0" strokeWidth="1" transform="rotate(-5 122 205)" />
              {/* Level sketch on table */}
              <rect x="148" y="182" width="50" height="38" rx="3" fill="#e4f0ff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(6 173 201)" />
              <rect x="154" y="190" width="10" height="8" rx="1" fill="#4a8fd4" opacity="0.7" transform="rotate(6 159 194)" />
              <rect x="170" y="186" width="20" height="5" rx="1" fill="#5ec278" opacity="0.7" transform="rotate(6 180 188)" />
              <rect x="168" y="198" width="22" height="12" rx="1" fill="#d64a00" opacity="0.5" transform="rotate(6 179 204)" />

              {/* Person left (writer) */}
              <circle cx="52" cy="130" r="22" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M31 121 Q37 103 52 101 Q67 103 73 121" fill="#8b4513" stroke="#1a1a1a" strokeWidth="1.3" />
              <circle cx="44" cy="129" r="2.5" fill="#1a1a1a" />
              <circle cx="60" cy="129" r="2.5" fill="#1a1a1a" />
              <path d="M46 139 Q52 145 58 139" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M32 152 Q28 176 26 200 L78 200 Q76 176 72 152 Q62 145 52 145 Q42 145 32 152Z" fill="#5ec278" stroke="#1a1a1a" strokeWidth="1.8" />
              <path d="M72 160 Q94 182 110 196" stroke="#f9d5b0" strokeWidth="10" strokeLinecap="round" />
              <path d="M72 160 Q94 182 110 196" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Person right (programmer) */}
              <circle cx="248" cy="130" r="22" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M227 121 Q233 103 248 101 Q263 103 269 121" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.3" />
              <circle cx="240" cy="129" r="2.5" fill="#1a1a1a" />
              <circle cx="256" cy="129" r="2.5" fill="#1a1a1a" />
              <path d="M242 139 Q248 145 254 139" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M228 152 Q224 176 222 200 L274 200 Q272 176 268 152 Q258 145 248 145 Q238 145 228 152Z" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="1.8" />
              <path d="M228 160 Q206 182 190 196" stroke="#f9d5b0" strokeWidth="10" strokeLinecap="round" />
              <path d="M228 160 Q206 182 190 196" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Center person (game designer) */}
              <circle cx="150" cy="92" r="26" fill="#f9d5b0" stroke="#1a1a1a" strokeWidth="2.2" />
              <path d="M125 82 Q132 62 150 60 Q168 62 175 82" fill="#3a2510" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="141" cy="91" r="3" fill="#1a1a1a" />
              <circle cx="159" cy="91" r="3" fill="#1a1a1a" />
              <path d="M143 102 Q150 108 157 102" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M124 118 Q120 152 118 180 L182 180 Q180 152 176 118 Q162 110 150 110 Q138 110 124 118Z" fill="#d64a00" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M124 128 Q96 154 80 174" stroke="#f9d5b0" strokeWidth="11" strokeLinecap="round" />
              <path d="M124 128 Q96 154 80 174" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M176 128 Q204 154 220 174" stroke="#f9d5b0" strokeWidth="11" strokeLinecap="round" />
              <path d="M176 128 Q204 154 220 174" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Idea bubble from designer */}
              <circle cx="178" cy="58" r="4" fill="none" stroke="#aaa" strokeWidth="1.5" />
              <circle cx="190" cy="46" r="6" fill="none" stroke="#aaa" strokeWidth="1.5" />
              <ellipse cx="208" cy="32" rx="18" ry="13" fill="#fff" stroke="#aaa" strokeWidth="1.5" />
              <text x="208" y="36" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="9" fill="#d64a00">⚔ ★</text>

              {/* Puzzle piece floating */}
              <g transform="translate(22, 254) rotate(-12)">
                <path d="M0 8 Q0 0 8 0 L28 0 Q36 0 36 8 L36 16 Q42 14 44 20 Q46 26 40 28 L36 26 L36 38 Q36 46 28 46 L8 46 Q0 46 0 38 L0 28 Q-6 26 -4 20 Q-2 14 4 16 Z" fill="#c47ae8" stroke="#1a1a1a" strokeWidth="1.8" />
              </g>
              <g stroke="#f5d74a" strokeWidth="2" strokeLinecap="round">
                <line x1="268" y1="252" x2="268" y2="264" /><line x1="262" y1="258" x2="274" y2="258" />
              </g>
            </svg>
          </div>
        </div>

        <div className="slide-content-col">
          <span className="slide-eyebrow">Career 03 — How they work</span>
          <h2 className="slide-title">How Game Designers Work</h2>
          <div className="slide-divider" />
          <p className="slide-body">
            The day-to-day work involves constant{' '}
            <strong>collaboration with writers, concept artists, and programmers</strong>.
            They map out story and characters while planning how users interact
            with every gameplay feature.
            <br /><br />
            From balancing <strong>level difficulties</strong> to designing{' '}
            <strong>combat systems and interactive puzzles</strong>, they make
            sure the final game is engaging, immersive, and mechanically sound.
          </p>
        </div>
      </div>
      <div className="slide-footer">07 / 11</div>
    </div>
  );
}
