"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/layout/index.tsx
var layout_exports = {};
__export(layout_exports, {
  HeaderOneElementCenter: () => HeaderOneElementCenter_default,
  LayoutDemo: () => LayoutDemo_default,
  LayoutMain: () => LayoutMain_default,
  SimpleFooter: () => SimpleFooter_default
});
module.exports = __toCommonJS(layout_exports);

// src/components/layout/LayoutDemo.tsx
var import_react2 = __toESM(require("react"));

// src/components/layout/LayoutMain.tsx
var import_react = __toESM(require("react"));
var LayoutMain = ({ header, children, footer }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "layout-main" }, header, /* @__PURE__ */ import_react.default.createElement("main", null, children), footer);
};
var LayoutMain_default = LayoutMain;

// src/components/layout/LayoutDemo.tsx
var LayoutDemo = () => {
  const Header = () => {
    return /* @__PURE__ */ import_react2.default.createElement("header", { className: "header-demo" }, /* @__PURE__ */ import_react2.default.createElement("p", null, "header"));
  };
  const Footer = () => {
    return /* @__PURE__ */ import_react2.default.createElement("footer", { className: "footer-demo" }, /* @__PURE__ */ import_react2.default.createElement("p", null, "footer"));
  };
  return /* @__PURE__ */ import_react2.default.createElement(LayoutMain_default, { header: /* @__PURE__ */ import_react2.default.createElement(Header, null), footer: /* @__PURE__ */ import_react2.default.createElement(Footer, null) }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "main-demo" }, /* @__PURE__ */ import_react2.default.createElement("p", null, "hola mundo")));
};
var LayoutDemo_default = LayoutDemo;

// src/components/layout/headers/HeaderOneElementCenter.tsx
var import_react3 = __toESM(require("react"));
var HeaderOneElementCenter = ({ text }) => {
  return /* @__PURE__ */ import_react3.default.createElement("header", { className: "header-one-element-center" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, text));
};
var HeaderOneElementCenter_default = HeaderOneElementCenter;

// src/components/layout/footers/SimpleFooter.tsx
var import_react4 = __toESM(require("react"));
var SimpleFooter = ({ text = "Con \u{1F49A} para latam" }) => {
  return /* @__PURE__ */ import_react4.default.createElement("footer", { className: "simple-footer" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "span" }), /* @__PURE__ */ import_react4.default.createElement("h2", null, text), /* @__PURE__ */ import_react4.default.createElement("div", { className: "span" }));
};
var SimpleFooter_default = SimpleFooter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HeaderOneElementCenter,
  LayoutDemo,
  LayoutMain,
  SimpleFooter
});
