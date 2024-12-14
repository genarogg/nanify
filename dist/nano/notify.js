"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/nano/notify.ts
var notify_exports = {};
__export(notify_exports, {
  default: () => notify_default
});
module.exports = __toCommonJS(notify_exports);
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
