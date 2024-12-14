import {
  LayoutMain_default
} from "./chunk-T3IS3BLF.mjs";

// src/components/layout/LayoutDemo.tsx
import React from "react";
var LayoutDemo = () => {
  const Header = () => {
    return /* @__PURE__ */ React.createElement("header", { className: "header-demo" }, /* @__PURE__ */ React.createElement("p", null, "header"));
  };
  const Footer = () => {
    return /* @__PURE__ */ React.createElement("footer", { className: "footer-demo" }, /* @__PURE__ */ React.createElement("p", null, "footer"));
  };
  return /* @__PURE__ */ React.createElement(LayoutMain_default, { header: /* @__PURE__ */ React.createElement(Header, null), footer: /* @__PURE__ */ React.createElement(Footer, null) }, /* @__PURE__ */ React.createElement("div", { className: "main-demo" }, /* @__PURE__ */ React.createElement("p", null, "hola mundo")));
};
var LayoutDemo_default = LayoutDemo;

export {
  LayoutDemo_default
};
