import React from 'react';


interface BtnLokiProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  className?: string;
}

const BtnLoki: React.FC<BtnLokiProps> = ({
  fn,
  isActive,
  setIsActive,
  className = "",
}) => {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        fn && fn();
      }}
      className={`
                  btn-loki btn-menu 
                  ${className} 
                  ${isActive ? "active" : ""}
                `}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BtnLoki;