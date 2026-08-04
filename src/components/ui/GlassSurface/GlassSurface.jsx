import React from 'react';
import './GlassSurface.css';

const GlassSurface = ({
  children,
  width = '100%',
  height = 'auto',
  borderRadius = 32,
  backgroundOpacity = 0.12,
  saturation = 1.6,
  blur = 24,
  className = '',
  style = {}
}) => {
  const containerStyle = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    '--glass-bg-opacity': backgroundOpacity,
    '--glass-blur': `${blur}px`,
    '--glass-sat': saturation
  };

  return (
    <div className={`glass-surface ${className}`} style={containerStyle}>
      <div className="glass-surface__reflection" />
      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
