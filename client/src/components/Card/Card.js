import React from 'react';

const Card = ({ children }) => {
  return (
    <div
      className="content-card"
      style={{
        backgroundColor: '#FFF',
        borderRadius: '8px',
        padding: '3rem',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
