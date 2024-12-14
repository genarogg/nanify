import {
  Icon_default
} from "./chunk-DTUBXDRT.mjs";

// src/components/form/Input.tsx
import React, { useState, useRef, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
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
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [hasContent, setHasContent] = useState(hasContentState);
  const inputRef = useRef(null);
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
  useEffect(() => {
    if (inputRef.current) {
      setHasContent(inputRef.current.value !== "");
    }
  }, []);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `container-input ${className} ${isFocused ? "focus" : ""} ${icon ? "" : "no-icon"}`,
      onClick: handleClick
    },
    icon && /* @__PURE__ */ React.createElement("label", { htmlFor: id, className: "label-ico" }, /* @__PURE__ */ React.createElement(Icon_default, { icon })),
    /* @__PURE__ */ React.createElement(
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
    type === "password" && /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "view-pass",
        type: "button",
        onClick: togglePasswordVisibility
      },
      inputType === "password" ? /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(Icon_default, { icon: /* @__PURE__ */ React.createElement(FaRegEye, null) })) : /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(Icon_default, { icon: /* @__PURE__ */ React.createElement(FaRegEyeSlash, null) }))
    ),
    /* @__PURE__ */ React.createElement("span", { className: `holder ${hasContent ? "has-content" : ""}` }, placeholder)
  );
};
var Input_default = Input;

export {
  Input_default
};
