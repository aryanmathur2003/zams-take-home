import React from 'react';

const ZamsLogo: React.FC = () => {
  return (

  <svg
      width="30.06625747680664"
      height="18.670631408691406"
      viewBox="0 0 30.06625747680664 18.670631408691406"
    >
      {/* Vertical Rectangle */}
      <rect
        x="14.06"
        y="0"
        width="3.5212736129760773"
        height="16.911905288696303"
        fill="black"
        // Adjusted for rotation
      />

      {/* Horizontal Rectangle */}
      <rect
        x=""
        y="15.15"
        width="30.06625747680664"
        height="3.5212740898132324"
        fill="black"
        transform = ''
        // Adjusted for rotation
      />

      {/* Horizontal Rectangle */}
      <rect
        x="14.06"
        y=""
        width="15.937116708353447"
        height="3.5212740898132324"
        fill="black"

        // Adjusted for rotation
      />
      
    </svg>
  );
};

export default ZamsLogo;
