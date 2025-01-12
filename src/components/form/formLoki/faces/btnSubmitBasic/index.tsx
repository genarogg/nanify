import React, { useState } from 'react'
import "./_btnSubmitBasic.scss"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { RECAPTCHA_KEY } from "@env";


interface BtnSubmitBasicProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  disable?: boolean;
  data: any
}

const BtnSubmitBasic: React.FC<BtnSubmitBasicProps> = ({
  children,
  className = "",
  id = "",
  data
}) => {

  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async () => {
    if (executeRecaptcha) {
      const token = await executeRecaptcha("submit");
      console.log(token);
      console.log(data);
    }
  }

  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          handleSubmit();
        }}>
        {children}
      </button>
    </div>
  );
};

export default BtnSubmitBasic;
