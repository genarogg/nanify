// src/components/btns/hamburguesa/BtnLoki.tsx
import React from "react";
var BtnLoki = ({
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
      className: `
                  btn-loki btn-menu 
                  ${className} 
                  ${isActive ? "active" : ""}
                `
    },
    /* @__PURE__ */ React.createElement("span", null),
    /* @__PURE__ */ React.createElement("span", null),
    /* @__PURE__ */ React.createElement("span", null)
  );
};
var BtnLoki_default = BtnLoki;

export {
  BtnLoki_default
};
