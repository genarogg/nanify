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

// src/components/nano/Index.tsx
var Index_exports = {};
__export(Index_exports, {
  A: () => A_default,
  Icon: () => Icon_default,
  notify: () => notify_default
});
module.exports = __toCommonJS(Index_exports);

// src/components/nano/A.tsx
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

// src/components/nano/Icon.tsx
var import_react2 = __toESM(require("react"));
var Icon = ({ icon, className = " " }) => {
  return /* @__PURE__ */ import_react2.default.createElement("span", { className: `icon ${className}` }, icon);
};
var Icon_default = Icon;

// src/components/nano/notify.ts
var import_react_toastify = require("react-toastify");
var defaultToastConfig = {
  position: "top-right",
  autoClose: 5e3,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: void 0,
  transition: import_react_toastify.Flip
};
var notify = ({ type, message, config = {} }) => {
  const finalConfig = { ...defaultToastConfig, ...config };
  switch (type) {
    case "success":
      import_react_toastify.toast.success(message, finalConfig);
      break;
    case "error":
      import_react_toastify.toast.error(message, finalConfig);
      break;
    case "warning":
      import_react_toastify.toast.warning(message, finalConfig);
      break;
    default:
      break;
  }
};
var notify_default = notify;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  A,
  Icon,
  notify
});
