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
          <div className="slide-illustration" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {/* The full photo with a clean sketch-style border and shadow */}
            <img 
              src="/makeup-artist.png" 
              alt="Makeup Artist" 
              style={{ 
                maxWidth: '90%', 
                maxHeight: '290px', 
                objectFit: 'contain',
                borderRadius: '16px',
                border: '3.5px solid #1a1a1a',
                boxShadow: '6px 6px 0px #1a1a1a',
                backgroundColor: '#fff'
              }} 
            />
          </div>
        </div>
      </div>
      <div className="slide-footer">08 / 12</div>
    </div>
  );
}
