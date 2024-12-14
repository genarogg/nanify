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

// src/components/gravatar/Gravatar.tsx
var Gravatar_exports = {};
__export(Gravatar_exports, {
  default: () => Gravatar_default
});
module.exports = __toCommonJS(Gravatar_exports);
var import_react = __toESM(require("react"));
var import_md5 = __toESM(require("crypto-js/md5"));
var import_image = __toESM(require("next/image"));

// src/functions/regexUtils.ts
var isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// src/components/gravatar/Gravatar.tsx
var Gravatar = ({
  email,
  alt,
  size = 80,
  className = ""
}) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email");
  }
  const hash = (0, import_md5.default)(email.trim().toLowerCase());
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return /* @__PURE__ */ import_react.default.createElement(
    import_image.default,
    {
      src: url,
      alt,
      width: size,
      height: size,
      priority: true,
      className
    }
  );
};
var Gravatar_default = Gravatar;
