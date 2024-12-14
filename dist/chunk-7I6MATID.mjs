import {
  Icon_default
} from "./chunk-DTUBXDRT.mjs";

// src/components/btns/checkbox/CheckboxBasic.tsx
import React, { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
var CheckBoxBasic = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };
  return /* @__PURE__ */ React.createElement("div", { className: "checkbox-basic", onClick: handleClick }, isClicked ? /* @__PURE__ */ React.createElement(Icon_default, { icon: /* @__PURE__ */ React.createElement(FaSquareCheck, null), className: "animate" }) : /* @__PURE__ */ React.createElement(Icon_default, { icon: /* @__PURE__ */ React.createElement(ImCheckboxUnchecked, null) }), /* @__PURE__ */ React.createElement("span", { className: "text" }, text));
};
var CheckboxBasic_default = CheckBoxBasic;

export {
  CheckboxBasic_default
};
