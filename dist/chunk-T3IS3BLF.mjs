// src/components/layout/LayoutMain.tsx
import React from "react";
var LayoutMain = ({ header, children, footer }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "layout-main" }, header, /* @__PURE__ */ React.createElement("main", null, children), footer);
};
var LayoutMain_default = LayoutMain;

export {
  LayoutMain_default
};
