import React from 'react';

const ZamsLogo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* SVG Symbol */}
      <svg
        width="30"
        height="20"
        viewBox="0 0 30 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical Rectangle */}
        <rect
          x="13.5"
          y="0"
          width="3"
          height="12"
          fill="black"
        />

        {/* Horizontal Rectangle */}
        <rect
          x="0"
          y="14"
          width="30"
          height="3"
          fill="black"
        />

        {/* Left Diagonal Rectangle */}
        <rect
          x="4"
          y="7"
          width="10"
          height="3"
          fill="black"
          transform="rotate(-45 10 14)" // Rotating around bottom-center
        />

        {/* Right Diagonal Rectangle */}
        <rect
          x="16"
          y="7"
          width="10"
          height="3"
          fill="black"
          transform="rotate(45 20 14)"
        />
      </svg>

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
