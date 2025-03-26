import React from 'react';
import Logo from '/public/zams-logo.svg';

const Feather: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' , color: '#667085'}}>
      {/* Imported SVG */}
      <img src="/feather.svg" alt="Logo" width={30} height={30}/>
    </div>
  );
};

export default Feather;

