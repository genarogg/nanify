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

// src/components/form/Input.tsx
var Input_exports = {};
__export(Input_exports, {
  default: () => Input_default
});
module.exports = __toCommonJS(Input_exports);
var import_react3 = __toESM(require("react"));

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

// src/components/form/Input.tsx
var import_fa6 = require("react-icons/fa6");
var Input = ({
  className = "",
  icon,
  name,
  id = name,
  type,
  required = true,
  disabled = false,
  min,
  max,
  hasContentState = false,
  placeholder,
  onChange
}) => {
  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  const [isFocused, setIsFocused] = (0, import_react3.useState)(false);
  const [inputType, setInputType] = (0, import_react3.useState)(type);
  const [hasContent, setHasContent] = (0, import_react3.useState)(hasContentState);
  const inputRef = (0, import_react3.useRef)(null);
  const handleClick = () => {
    if (type === "date" && inputRef.current) {
      inputRef.current.showPicker();
    }
  };
  const handleChange = (e) => {
    setHasContent(e.target.value !== "");
    if (onChange) {
      onChange(e);
    }
  };
  (0, import_react3.useEffect)(() => {
    if (inputRef.current) {
      setHasContent(inputRef.current.value !== "");
    }
  }, []);
  return /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      className: `container-input ${className} ${isFocused ? "focus" : ""} ${icon ? "" : "no-icon"}`,
      onClick: handleClick
    },
    icon && /* @__PURE__ */ import_react3.default.createElement("label", { htmlFor: id, className: "label-ico" }, /* @__PURE__ */ import_react3.default.createElement(Icon_default, { icon })),
    /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        ref: inputRef,
        type: inputType,
        name,
        id,
        required,
        disabled,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
        onChange: handleChange,
        ...min ? { min } : {},
        ...max ? { max } : {}
      }
    ),
    type === "password" && /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: "view-pass",
        type: "button",
        onClick: togglePasswordVisibility
      },
      inputType === "password" ? /* @__PURE__ */ import_react3.default.createElement("label", null, /* @__PURE__ */ import_react3.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react3.default.createElement(import_fa6.FaRegEye, null) })) : /* @__PURE__ */ import_react3.default.createElement("label", null, /* @__PURE__ */ import_react3.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react3.default.createElement(import_fa6.FaRegEyeSlash, null) }))
    ),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: `holder ${hasContent ? "has-content" : ""}` }, placeholder)
  );
};
var Input_default = Input;
