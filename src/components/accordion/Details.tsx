import React from 'react';

const Details = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default Details;
