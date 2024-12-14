// src/components/btns/expansion/BtnExpancion.tsx
import React from "react";
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
  return /* @__PURE__ */ React.createElement("button", { className: `btn-expancion ${className}`, onMouseDown: expansion, onTouchStart: expansion, ...props }, children);
};
var BtnExpancion_default = BtnExpansion;
export {
  BtnExpancion_default as default
};
