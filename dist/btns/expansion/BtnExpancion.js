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

// src/components/btns/expansion/BtnExpancion.tsx
var BtnExpancion_exports = {};
__export(BtnExpancion_exports, {
  default: () => BtnExpancion_default
});
module.exports = __toCommonJS(BtnExpancion_exports);
var import_react = __toESM(require("react"));
var BtnExpansion = ({ children, className = "", ...props }) => {
  const expansion = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    let x, y;
    if (e.type === "mousedown") {
      const mouseEvent = e;
      x = mouseEvent.clientX - rect.left - size / 2;
      y = mouseEvent.clientY - rect.top - size / 2;
    } else {
      const touchEvent = e;
      x = touchEvent.touches[0].clientX - rect.left - size / 2;
      y = touchEvent.touches[0].clientY - rect.top - size / 2;
    }
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";
    button.appendChild(ripple);
    button.classList.add("ripple-active");
    setTimeout(() => {
      ripple.remove();
      button.classList.remove("ripple-active");
    }, 2e3);
  };
  return /* @__PURE__ */ import_react.default.createElement("button", { className: `btn-expancion ${className}`, onMouseDown: expansion, onTouchStart: expansion, ...props }, children);
};
var BtnExpancion_default = BtnExpansion;
