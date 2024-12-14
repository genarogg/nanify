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

// src/components/layout/LayoutDemo.tsx
var LayoutDemo_exports = {};
__export(LayoutDemo_exports, {
  default: () => LayoutDemo_default
});
module.exports = __toCommonJS(LayoutDemo_exports);
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
