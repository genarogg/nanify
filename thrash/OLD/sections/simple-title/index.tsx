import React from 'react'

import "./_simpleTitle.scss"

interface SimpleTitleProps {
  id?: string;
  titulo: string;
  className?: string;
}

const SimpleTitle: React.FC<SimpleTitleProps> = ({ titulo, id = " ", className = " " }) => {
  return (
    <div className={`title-section ${className}`} style={{ position: "relative" }}>
      {id && (
        <div
          id={id}
          style={{
            position: "absolute",
            top: "-90px",
            left: "0",
            height: "100px",
            width: "100%",
            pointerEvents: "none",
            zIndex: -10000000,
          }}
        />
      )}
      <div className="container">
        <label>{titulo}</label>
      </div>
    </div>
  );
};

export default SimpleTitle;
