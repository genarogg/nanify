import React from 'react'
import "./_btnSubmitBasic.scss"

interface BtnSubmitBasicProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  disable?: boolean;
  onClick: () => void;
}

const BtnSubmitBasic: React.FC<BtnSubmitBasicProps> = ({
  children,
  className = "",
  id = "",
  disable = false,
  onClick,
}) => {
  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button
        disabled={disable}
        onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default BtnSubmitBasic;
