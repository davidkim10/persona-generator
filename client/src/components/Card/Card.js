import React from 'react';

const Card = ({ children, gridRowEnd, gridRowStart, style }) => {
  return (
    <div
      className="content-card"
      style={{
        backgroundColor: '#FFF',
        borderRadius: '8px',
        padding: '3rem',
        gridRowStart,
        gridRowEnd,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
