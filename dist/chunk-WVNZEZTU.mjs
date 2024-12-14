// src/components/layout/LayoutMain.tsx
var LayoutMain = ({ header, children, footer }) => {
  return <div className="layout-main">
    {header}
    <main>{children}</main>
    {footer}
  </div>;
};
var LayoutMain_default = LayoutMain;

export {
  LayoutMain_default
};
