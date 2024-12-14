// src/components/btns/basic/BtnSubmitBasic.tsx
import React from "react";
var BtnSubmitBasic = ({
  text,
  className = "",
  id,
  disable = false,
  onClick
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: `btn-submit-basic ${className}`, id }, /* @__PURE__ */ React.createElement("button", { disabled: disable, onClick: onClick && (() => onClick()) }, text));
};
var BtnSubmitBasic_default = BtnSubmitBasic;

export {
  BtnSubmitBasic_default
};
