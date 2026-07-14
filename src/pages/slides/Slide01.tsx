import React from 'react';

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
          Five professional paths in art, music, media, and design — explored by Group 1.
        </p>

        {/* 
          Using a wrapping container with a maximum width limit.
          This lets the layout grid position it on the right side naturally, 
          preventing it from expanding and pushing the text down.
        */}
        <div className="slide-title-illo" style={{ maxWidth: '340px', marginLeft: 'auto' }}>
          <div className="slide-illustration">
            <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)', width: '100%', height: 'auto' }}>
              {/* Monitor with design grid */}
              <g transform="translate(20, 40)">
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
              </g>

              {/* Pencil / pen */}
              <g transform="translate(10, 0) rotate(-15 280 200)">
                <rect x="264" y="78" width="22" height="160" rx="3" fill="#fde9a0" stroke="#1a1a1a" strokeWidth="2" />
                <polygon points="264,238 286,238 275,275" fill="#f4c84a" stroke="#1a1a1a" strokeWidth="2" />
                <polygon points="268,268 282,268 275,288" fill="#f9aa8a" stroke="#1a1a1a" strokeWidth="2" />
                <line x1="275" y1="288" x2="275" y2="298" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                <rect x="261" y="76" width="28" height="18" rx="2" fill="#d64a00" stroke="#1a1a1a" strokeWidth="2" />
              </g>

              {/* Makeup brush */}
              <g transform="translate(10, 0) rotate(25 330 130)">
                <rect x="318" y="42" width="12" height="120" rx="3" fill="#c09070" stroke="#1a1a1a" strokeWidth="1.8" />
                <ellipse cx="324" cy="42" rx="10" ry="22" fill="#e8a0a0" stroke="#1a1a1a" strokeWidth="1.8" />
                <polygon points="318,162 330,162 325,185" fill="#fae8c8" stroke="#1a1a1a" strokeWidth="1.8" />
              </g>

              {/* Sparkles */}
              <g stroke="#d64a00" strokeWidth="2" strokeLinecap="round">
                <line x1="242" y1="128" x2="242" y2="140" /><line x1="236" y1="134" x2="248" y2="134" />
              </g>
              <g stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round">
                <line x1="356" y1="210" x2="356" y2="222" /><line x1="350" y1="216" x2="362" y2="216" />
              </g>
              <g stroke="#5ec278" strokeWidth="2" strokeLinecap="round">
                <line x1="80" y1="210" x2="80" y2="220" /><line x1="75" y1="215" x2="85" y2="215" />
              </g>
              <circle cx="360" cy="90" r="5" fill="#f5d74a" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="slide-credit">Group 1 · G10 Quezon · 2026</div>
      </div>
      <div className="slide-footer">01 / 12</div>
    </div>
  );
}
