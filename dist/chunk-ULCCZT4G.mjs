// src/components/btns/basic/BtnNormalBasic.tsx
import React from "react";
var BtnNormalBasic = ({
  children,
  onClick,
  className = "",
  id
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: `btn-normal-basic ${className}`, id }, /* @__PURE__ */ React.createElement("button", { onClick }, children));
};
var BtnNormalBasic_default = BtnNormalBasic;

export {
  BtnNormalBasic_default
};
