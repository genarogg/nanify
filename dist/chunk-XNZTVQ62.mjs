// src/components/btns/hamburguesa/BtnThor.tsx
import React from "react";
var BtnThor = ({
  fn,
  isActive,
  setIsActive,
  className = " "
}) => {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `btn-thor ${className} ${isActive ? "active" : ""}`
    },
    /* @__PURE__ */ React.createElement("span", { className: "hamburguer" }, /* @__PURE__ */ React.createElement("span", { className: "bar bar-1" }), /* @__PURE__ */ React.createElement("span", { className: "bar bar-2" }), /* @__PURE__ */ React.createElement("span", { className: "bar bar-3" }))
  );
};
var BtnThor_default = BtnThor;

export {
  BtnThor_default
};
