import React from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

interface MenuToolTipProps {
  children: React.ReactNode;
  items: string[] | React.ReactNode[] | undefined;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
  animation?: "shift-away" | "shift-away-extreme" | "fade";
  interactive?: boolean;
}

const MenuToolTip: React.FC<MenuToolTipProps> = ({
  children,
  items,
  className = "",
  placement = "bottom",
  animation = "shift-away",
  interactive = true
}) => {
  return (
    <div className={`container-menu-tooltip ${className}`}>
      <Tippy
        content={
          <ul>
            {items &&
              items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
          </ul>
        }
        interactive={interactive}
        className="tooltip"
        arrow={true}
        placement={placement}
        animation={"shift-away"}
      >
        <span>{children}</span>
      </Tippy>
    </div>
  );
};

export default MenuToolTip;