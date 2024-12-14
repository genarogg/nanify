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

// src/components/Index.tsx
var Index_exports = {};
__export(Index_exports, {
  A: () => A_default,
  BtnFreya: () => BtnFreya_default,
  BtnLoki: () => BtnLoki_default,
  BtnNormalBasic: () => BtnNormalBasic_default,
  BtnRowCircle: () => BtnRowCircle_default,
  BtnSubmitBasic: () => BtnSubmitBasic_default,
  BtnText: () => BtnText_default,
  BtnThor: () => BtnThor_default,
  CheckBoxBasic: () => CheckboxBasic_default,
  Gravatar: () => Gravatar_default,
  HeaderOneElementCenter: () => HeaderOneElementCenter_default,
  Icon: () => Icon_default,
  Input: () => Input_default,
  LayoutDemo: () => LayoutDemo_default,
  LayoutMain: () => LayoutMain_default,
  SimpleFooter: () => SimpleFooter_default,
  notify: () => notify_default
});
module.exports = __toCommonJS(Index_exports);

// src/components/gravatar/Gravatar.tsx
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

// src/components/nano/A.tsx
var import_react2 = __toESM(require("react"));
var import_link = __toESM(require("next/link"));
var import_router = __toESM(require("next/router"));
var A = ({ href, type, children, className = " " }) => {
  if (!type) {
    return /* @__PURE__ */ import_react2.default.createElement(import_link.default, { href, className }, children);
  }
  switch (type) {
    case "mailto":
      return /* @__PURE__ */ import_react2.default.createElement("a", { href: `mailto:${href}`, className }, children);
    case "a":
      return /* @__PURE__ */ import_react2.default.createElement("a", { href, target: "_blank", rel: "noreferrer", className }, children);
    case "push":
      return import_router.default.push(href);
  }
};
var A_default = A;

// src/components/nano/Icon.tsx
var import_react3 = __toESM(require("react"));
var Icon = ({ icon, className = " " }) => {
  return /* @__PURE__ */ import_react3.default.createElement("span", { className: `icon ${className}` }, icon);
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

// src/components/form/Input.tsx
var import_react4 = __toESM(require("react"));
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
  const [isFocused, setIsFocused] = (0, import_react4.useState)(false);
  const [inputType, setInputType] = (0, import_react4.useState)(type);
  const [hasContent, setHasContent] = (0, import_react4.useState)(hasContentState);
  const inputRef = (0, import_react4.useRef)(null);
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
  (0, import_react4.useEffect)(() => {
    if (inputRef.current) {
      setHasContent(inputRef.current.value !== "");
    }
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement(
    "div",
    {
      className: `container-input ${className} ${isFocused ? "focus" : ""} ${icon ? "" : "no-icon"}`,
      onClick: handleClick
    },
    icon && /* @__PURE__ */ import_react4.default.createElement("label", { htmlFor: id, className: "label-ico" }, /* @__PURE__ */ import_react4.default.createElement(Icon_default, { icon })),
    /* @__PURE__ */ import_react4.default.createElement(
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
    type === "password" && /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        className: "view-pass",
        type: "button",
        onClick: togglePasswordVisibility
      },
      inputType === "password" ? /* @__PURE__ */ import_react4.default.createElement("label", null, /* @__PURE__ */ import_react4.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react4.default.createElement(import_fa6.FaRegEye, null) })) : /* @__PURE__ */ import_react4.default.createElement("label", null, /* @__PURE__ */ import_react4.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react4.default.createElement(import_fa6.FaRegEyeSlash, null) }))
    ),
    /* @__PURE__ */ import_react4.default.createElement("span", { className: `holder ${hasContent ? "has-content" : ""}` }, placeholder)
  );
};
var Input_default = Input;

// src/components/btns/hamburguesa/BtnLoki.tsx
var import_react5 = __toESM(require("react"));
var BtnLoki = ({
  fn,
  isActive,
  setIsActive,
  className = ""
}) => {
  return /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `
                  btn-loki btn-menu 
                  ${className} 
                  ${isActive ? "active" : ""}
                `
    },
    /* @__PURE__ */ import_react5.default.createElement("span", null),
    /* @__PURE__ */ import_react5.default.createElement("span", null),
    /* @__PURE__ */ import_react5.default.createElement("span", null)
  );
};
var BtnLoki_default = BtnLoki;

// src/components/btns/hamburguesa/BtnFreya.tsx
var import_react6 = __toESM(require("react"));
var BtnFreya = ({
  fn,
  isActive,
  setIsActive,
  className = ""
}) => {
  return /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `btn-freya ${className} ${isActive ? "active" : ""}`
    },
    /* @__PURE__ */ import_react6.default.createElement("span", null)
  );
};
var BtnFreya_default = BtnFreya;

// src/components/btns/hamburguesa/BtnThor.tsx
var import_react7 = __toESM(require("react"));
var BtnThor = ({
  fn,
  isActive,
  setIsActive,
  className = " "
}) => {
  return /* @__PURE__ */ import_react7.default.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `btn-thor ${className} ${isActive ? "active" : ""}`
    },
    /* @__PURE__ */ import_react7.default.createElement("span", { className: "hamburguer" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "bar bar-1" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "bar bar-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "bar bar-3" }))
  );
};
var BtnThor_default = BtnThor;

// src/components/btns/basic/BtnSubmitBasic.tsx
var import_react8 = __toESM(require("react"));
var BtnSubmitBasic = ({
  text,
  className = "",
  id,
  disable = false,
  onClick
}) => {
  return /* @__PURE__ */ import_react8.default.createElement("div", { className: `btn-submit-basic ${className}`, id }, /* @__PURE__ */ import_react8.default.createElement("button", { disabled: disable, onClick: onClick && (() => onClick()) }, text));
};
var BtnSubmitBasic_default = BtnSubmitBasic;

// src/components/btns/basic/BtnNormalBasic.tsx
var import_react9 = __toESM(require("react"));
var BtnNormalBasic = ({
  children,
  onClick,
  className = "",
  id
}) => {
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: `btn-normal-basic ${className}`, id }, /* @__PURE__ */ import_react9.default.createElement("button", { onClick }, children));
};
var BtnNormalBasic_default = BtnNormalBasic;

// src/components/btns/basic/BtnText.tsx
var import_react10 = __toESM(require("react"));
var BtnText = ({ text, onClick }) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "btn-text" }, /* @__PURE__ */ import_react10.default.createElement("button", { type: "button", onClick }, /* @__PURE__ */ import_react10.default.createElement("span", null, text)));
};
var BtnText_default = BtnText;

// src/components/btns/checkbox/CheckboxBasic.tsx
var import_react11 = __toESM(require("react"));
var import_fa62 = require("react-icons/fa6");
var import_im = require("react-icons/im");
var CheckBoxBasic = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = (0, import_react11.useState)(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: "checkbox-basic", onClick: handleClick }, isClicked ? /* @__PURE__ */ import_react11.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react11.default.createElement(import_fa62.FaSquareCheck, null), className: "animate" }) : /* @__PURE__ */ import_react11.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react11.default.createElement(import_im.ImCheckboxUnchecked, null) }), /* @__PURE__ */ import_react11.default.createElement("span", { className: "text" }, text));
};
var CheckboxBasic_default = CheckBoxBasic;

// src/components/btns/animte/BtnRowCircle.tsx
var import_react12 = __toESM(require("react"));
var import_fa = require("react-icons/fa");
var BtnRowCircle = ({ icon, id = "", onClick }) => {
  return /* @__PURE__ */ import_react12.default.createElement("div", { className: "container-row-circle", id }, /* @__PURE__ */ import_react12.default.createElement("button", { onClick: () => {
    onClick && onClick();
  } }, /* @__PURE__ */ import_react12.default.createElement(Icon_default, { icon: icon ? icon : /* @__PURE__ */ import_react12.default.createElement(import_fa.FaArrowLeft, null) })));
};
var BtnRowCircle_default = BtnRowCircle;

// src/components/layout/LayoutDemo.tsx
var import_react14 = __toESM(require("react"));

// src/components/layout/LayoutMain.tsx
var import_react13 = __toESM(require("react"));
var LayoutMain = ({ header, children, footer }) => {
  return /* @__PURE__ */ import_react13.default.createElement("div", { className: "layout-main" }, header, /* @__PURE__ */ import_react13.default.createElement("main", null, children), footer);
};
var LayoutMain_default = LayoutMain;

// src/components/layout/LayoutDemo.tsx
var LayoutDemo = () => {
  const Header = () => {
    return /* @__PURE__ */ import_react14.default.createElement("header", { className: "header-demo" }, /* @__PURE__ */ import_react14.default.createElement("p", null, "header"));
  };
  const Footer = () => {
    return /* @__PURE__ */ import_react14.default.createElement("footer", { className: "footer-demo" }, /* @__PURE__ */ import_react14.default.createElement("p", null, "footer"));
  };
  return /* @__PURE__ */ import_react14.default.createElement(LayoutMain_default, { header: /* @__PURE__ */ import_react14.default.createElement(Header, null), footer: /* @__PURE__ */ import_react14.default.createElement(Footer, null) }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "main-demo" }, /* @__PURE__ */ import_react14.default.createElement("p", null, "hola mundo")));
};
var LayoutDemo_default = LayoutDemo;

// src/components/layout/headers/HeaderOneElementCenter.tsx
var import_react15 = __toESM(require("react"));
var HeaderOneElementCenter = ({ text }) => {
  return /* @__PURE__ */ import_react15.default.createElement("header", { className: "header-one-element-center" }, /* @__PURE__ */ import_react15.default.createElement("h2", null, text));
};
var HeaderOneElementCenter_default = HeaderOneElementCenter;

// src/components/layout/footers/SimpleFooter.tsx
var import_react16 = __toESM(require("react"));
var SimpleFooter = ({ text = "Con \u{1F49A} para latam" }) => {
  return /* @__PURE__ */ import_react16.default.createElement("footer", { className: "simple-footer" }, /* @__PURE__ */ import_react16.default.createElement("div", { className: "span" }), /* @__PURE__ */ import_react16.default.createElement("h2", null, text), /* @__PURE__ */ import_react16.default.createElement("div", { className: "span" }));
};
var SimpleFooter_default = SimpleFooter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  A,
  BtnFreya,
  BtnLoki,
  BtnNormalBasic,
  BtnRowCircle,
  BtnSubmitBasic,
  BtnText,
  BtnThor,
  CheckBoxBasic,
  Gravatar,
  HeaderOneElementCenter,
  Icon,
  Input,
  LayoutDemo,
  LayoutMain,
  SimpleFooter,
  notify
});
