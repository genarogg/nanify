import {
  Icon_default
} from "./chunk-W7EUYV3T.mjs";

// src/components/btns/checkbox/CheckboxBasic.tsx
import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
var CheckBoxBasic = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };
  return <div className="checkbox-basic" onClick={handleClick}>
    {isClicked ? <Icon_default icon={<FaSquareCheck />} className="animate" /> : <Icon_default icon={<ImCheckboxUnchecked />} />}
    <span className="text">{text}</span>
  </div>;
};
var CheckboxBasic_default = CheckBoxBasic;

export {
  CheckboxBasic_default
};
