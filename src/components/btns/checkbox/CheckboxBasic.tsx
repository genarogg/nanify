import React, { useState } from "react";
import { Icon } from "@components/nano";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

interface CheckBoxBasicProps {
  text: string;
  onClick: () => void;
}

const CheckBoxBasic: React.FC<CheckBoxBasicProps> = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <div className="checkbox-basic" onClick={handleClick}>
      {isClicked ? (
        <Icon icon={<FaSquareCheck />} className="animate" />
      ) : (
        <Icon icon={<ImCheckboxUnchecked />} />
      )}
      <span className="text">{text}</span>
    </div>
  );
};

export default CheckBoxBasic;
