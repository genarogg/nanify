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

// src/components/btns/animte/BtnRowCircle.tsx
var BtnRowCircle_exports = {};
__export(BtnRowCircle_exports, {
  default: () => BtnRowCircle_default
});
module.exports = __toCommonJS(BtnRowCircle_exports);
var import_react3 = __toESM(require("react"));
var import_fa = require("react-icons/fa");

// src/components/nano/A.tsx
var import_react = __toESM(require("react"));
var import_link = __toESM(require("next/link"));
var import_router = __toESM(require("next/router"));

// src/components/nano/Icon.tsx
var import_react2 = __toESM(require("react"));
var Icon = ({ icon, className = " " }) => {
  return /* @__PURE__ */ import_react2.default.createElement("span", { className: `icon ${className}` }, icon);
};
var Icon_default = Icon;

// src/components/nano/notify.ts
var import_react_toastify = require("react-toastify");

// src/components/btns/animte/BtnRowCircle.tsx
var BtnRowCircle = ({ icon, id = "", onClick }) => {
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "container-row-circle", id }, /* @__PURE__ */ import_react3.default.createElement("button", { onClick: () => {
    onClick && onClick();
  } }, /* @__PURE__ */ import_react3.default.createElement(Icon_default, { icon: icon ? icon : /* @__PURE__ */ import_react3.default.createElement(import_fa.FaArrowLeft, null) })));
};
var BtnRowCircle_default = BtnRowCircle;
