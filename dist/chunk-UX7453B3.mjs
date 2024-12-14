import {
  Icon_default
} from "./chunk-W7EUYV3T.mjs";

// src/components/btns/animte/BtnRowCircle.tsx
import { FaArrowLeft } from "react-icons/fa";
var BtnRowCircle = ({ icon, id = "", onClick }) => {
  return <div className="container-row-circle" id={id}><button onClick={() => {
    onClick && onClick();
  }}><Icon_default icon={icon ? icon : <FaArrowLeft />} /></button></div>;
};
var BtnRowCircle_default = BtnRowCircle;

export {
  BtnRowCircle_default
};
