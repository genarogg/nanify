import React from 'react'

interface BtnSubmitBasicProps {
  text: string;
  className?: string;
  id?: string;
  disable?: boolean;
  onClick?: () => void;
}

const BtnSubmitBasic: React.FC<BtnSubmitBasicProps> = ({
  text,
  className = "",
  id,
  disable = false,
  onClick,
}) => {
  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button disabled={disable} onClick={
        onClick && (() => onClick())
      }>{text}</button>
    </div>
  );
};

export default BtnSubmitBasic;
