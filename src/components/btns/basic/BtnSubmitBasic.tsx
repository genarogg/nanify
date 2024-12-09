import React from 'react'

interface BtnSubmitBasicProps {
  text: string;
  className?: string;
  id?: string;
  disable?: boolean;
}

const BtnSubmitBasic: React.FC<BtnSubmitBasicProps> = ({
  text,
  className = "",
  id,
  disable = false,
}) => {
  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button disabled={disable}>{text}</button>
    </div>
  );
};

export default BtnSubmitBasic;
