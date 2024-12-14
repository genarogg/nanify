// src/components/btns/hamburguesa/BtnFreya.tsx
import React from "react";
var BtnFreya = ({
  fn,
  isActive,
  setIsActive,
  className = ""
}) => {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `btn-freya ${className} ${isActive ? "active" : ""}`
    },
    /* @__PURE__ */ React.createElement("span", null)
  );
};
var BtnFreya_default = BtnFreya;

export {
  BtnFreya_default
};
