import React from 'react';

export default function Slide12() {
  return (
    <div className="slide-paper">
      <div className="slide-layout-exp">
        
        {/* Left Column: Creative Arts illustration */}
        <div className="slide-illo-col">
          <div className="slide-illustration">
            <svg viewBox="0 0 300 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#sk)' }}>
              {/* Painter's Palette (Fine Arts) */}
              <path 
                d="M170 50 C100 50 60 90 60 150 C60 210 100 250 170 250 C220 250 250 220 250 180 C250 150 230 140 210 140 C190 140 180 150 170 150 C150 150 140 130 140 110 C140 70 200 50 170 50 Z" 
                fill="#ffffff" 
                stroke="#1a1a1a" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Paint Wells */}
              <circle cx="100" cy="110" r="10" fill="#d64a00" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="95" cy="155" r="10" fill="#4a8fd4" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="120" cy="195" r="10" fill="#5ec278" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="165" cy="210" r="10" fill="#f5d74a" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Thumb hole */}
              <ellipse cx="205" cy="185" rx="12" ry="8" fill="#dedad0" stroke="#1a1a1a" strokeWidth="2" />

              {/* Paintbrush resting in the thumb hole */}
              <g transform="rotate(-15, 205, 185)">
                {/* Brush Handle */}
                <rect x="198" y="70" width="10" height="170" rx="4" fill="#c8a870" stroke="#1a1a1a" strokeWidth="2" />
                {/* Metal Ferrule */}
                <rect x="196" y="55" width="14" height="20" rx="1" fill="#ccc" stroke="#1a1a1a" strokeWidth="2" />
                {/* Bristles */}
                <path d="M196 55 C196 35 203 25 203 25 C203 25 210 35 210 55 Z" fill="#d64a00" stroke="#1a1a1a" strokeWidth="2" />
              </g>

              {/* Drama / Theatre Masks (Performing Arts) */}
              <g transform="translate(45, 195) scale(0.85) rotate(-5)">
                {/* Tragedy Mask Base */}
                <rect x="0" y="0" width="60" height="75" rx="18" fill="#2e2e3e" stroke="#1a1a1a" strokeWidth="2.5" />
                {/* Sad Eyes */}
                <path d="M12 25 Q20 20 22 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M48 25 Q40 20 38 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Frown */}
                <path d="M18 58 Q30 46 42 58" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
              </g>

              <g transform="translate(195, 65) scale(0.85) rotate(15)">
                {/* Comedy Mask Base */}
                <rect x="0" y="0" width="60" height="75" rx="18" fill="#fffdf8" stroke="#1a1a1a" strokeWidth="2.5" />
                {/* Happy Eyes */}
                <path d="M12 30 Q20 18 22 26" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M48 30 Q40 18 38 26" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Smile */}
                <path d="M16 46 Q30 64 44 46" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" fill="none" />
              </g>

              {/* Decorative Sparkles & Elements */}
              <g stroke="#d64a00" strokeWidth="2.2" strokeLinecap="round">
                <line x1="35" y1="65" x2="35" y2="77" /><line x1="29" y1="71" x2="41" y2="71" />
              </g>
              <g stroke="#f5d74a" strokeWidth="2.2" strokeLinecap="round">
                <line x1="260" y1="240" x2="260" y2="250" /><line x1="255" y1="245" x2="265" y2="245" />
              </g>
              <circle cx="270" cy="140" r="5" fill="#4a8fd4" opacity="0.65" />
              <circle cx="50" cy="145" r="4" fill="#c47ae8" opacity="0.55" />
            </svg>
          </div>
        </div>

        {/* Right Column: Thanks and Presentation Outro */}
        <div className="slide-content-col">
          <span className="slide-eyebrow">Conclusion — Group 1</span>
          <h2 className="slide-title">Thank You For Your Time!</h2>
          <div className="slide-divider" />
          <p className="slide-body">
            That concludes our exploration of creative careers! From <strong>Art Directors</strong> setting visual directions, to developers and designers shaping products, these career tracks show how essential artistic thinking is to modern industries.
            <br /><br />
            We hope you gained valuable insights into these creative paths. 
            <br />
            <strong>Feel free to drink coffee in the morning</strong>
          </p>
        </div>
      </div>
      <div className="slide-footer">12 / 12</div>
    </div>
  );
                }
