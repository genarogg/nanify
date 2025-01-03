import React from 'react'

interface BtnTextProps {
  text: string;
  onClick: () => void;
}

const BtnText: React.FC<BtnTextProps> = ({ text, onClick }) => {
  return (
    <div className="btn-text">
      <button type="button" onClick={onClick}>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default BtnText;
