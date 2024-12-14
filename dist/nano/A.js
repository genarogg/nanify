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

// src/components/nano/A.tsx
var A_exports = {};
__export(A_exports, {
  default: () => A_default
});
module.exports = __toCommonJS(A_exports);
var import_react = __toESM(require("react"));
var import_link = __toESM(require("next/link"));
var import_router = __toESM(require("next/router"));
var A = ({ href, type, children, className = " " }) => {
  if (!type) {
    return /* @__PURE__ */ import_react.default.createElement(import_link.default, { href, className }, children);
  }
  switch (type) {
    case "mailto":
      return /* @__PURE__ */ import_react.default.createElement("a", { href: `mailto:${href}`, className }, children);
    case "a":
      return /* @__PURE__ */ import_react.default.createElement("a", { href, target: "_blank", rel: "noreferrer", className }, children);
    case "push":
      return import_router.default.push(href);
  }
};
var A_default = A;
