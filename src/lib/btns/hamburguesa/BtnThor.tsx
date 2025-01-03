import React from "react";

interface BtnThorProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  className?: string;
}

const BtnThor: React.FC<BtnThorProps> = ({
  fn,
  isActive,
  setIsActive,
  className = " ",
}) => {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        fn && fn();
      }}
      className={`btn-thor ${className} ${isActive ? "active" : ""}`}
    >
      <span className="hamburguer">
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </span>
    </button>
  );
};

export default BtnThor;
