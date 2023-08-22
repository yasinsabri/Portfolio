import React from 'react';

const ColoredLine = ({ color, height, width }) => {
  const lineStyle = {
    borderBottom: `2px solid ${color}`,
    height: height || '2px', // You can customize the height if needed
    width: width || '2px',
  };

  return <div style={lineStyle}></div>;
};

export default ColoredLine;