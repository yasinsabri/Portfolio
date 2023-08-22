import React from 'react';

const VerticalColoredLine = ({ color, height }) => {
  const lineStyle = {
    borderLeft: `2px solid ${color}`,
    height: height || '100%', // You can customize the height if needed
    display: 'inline-block',
    margin: '0 10px', // Add some spacing around the line
  };

  return <div style={lineStyle}></div>;
};

export default VerticalColoredLine;

