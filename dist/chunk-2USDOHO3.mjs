import {
  Icon_default
} from "./chunk-DTUBXDRT.mjs";

// src/components/btns/animte/BtnRowCircle.tsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
var BtnRowCircle = ({ icon, id = "", onClick }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "container-row-circle", id }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
    onClick && onClick();
  } }, /* @__PURE__ */ React.createElement(Icon_default, { icon: icon ? icon : /* @__PURE__ */ React.createElement(FaArrowLeft, null) })));
};
var BtnRowCircle_default = BtnRowCircle;

export {
  BtnRowCircle_default
};
