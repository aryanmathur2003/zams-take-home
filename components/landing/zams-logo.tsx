import React from 'react';
import Logo from '/public/zams-logo.svg';

const ZamsLogo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Imported SVG */}
      <img src="/zams-logo.svg" alt="Logo" width={30} height={30} />

      {/* "zams" Text */}
      <span style={{
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#000',
        letterSpacing: '-0.5px'
      }}>
        zams
      </span>
    </div>
  );
};

export default ZamsLogo;

