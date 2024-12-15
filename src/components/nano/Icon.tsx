import React from 'react';

interface IconProps {
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ icon, className = " ", style }) => {
  return <span className={`icon ${className}`} style={style}>{icon}</span>;
};

export default Icon;
