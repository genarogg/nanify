// src/components/nano/A.tsx
import React from "react";
import Link from "next/link";
import router from "next/router";
var A = ({ href, type, children, className = " " }) => {
  if (!type) {
    return /* @__PURE__ */ React.createElement(Link, { href, className }, children);
  }
  switch (type) {
    case "mailto":
      return /* @__PURE__ */ React.createElement("a", { href: `mailto:${href}`, className }, children);
    case "a":
      return /* @__PURE__ */ React.createElement("a", { href, target: "_blank", rel: "noreferrer", className }, children);
    case "push":
      return router.push(href);
  }
};
var A_default = A;

export {
  A_default
};
