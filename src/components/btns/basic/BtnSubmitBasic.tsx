import React from 'react'

interface BtnSubmitBasicProps {
  text: string;
  className?: string;
  id?: string;
  loading?: boolean;
}

const BtnSubmitBasic: React.FC<BtnSubmitBasicProps> = ({
  text,
  className = "",
  id,
  loading = false,
}) => {
  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button disabled={loading}>{text}</button>
    </div>
  );
};

export default BtnSubmitBasic;
