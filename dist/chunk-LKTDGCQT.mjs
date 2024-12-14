import {
  LayoutMain_default
} from "./chunk-WVNZEZTU.mjs";

// src/components/layout/LayoutDemo.tsx
var LayoutDemo = () => {
  const Header = () => {
    return <header className="header-demo"><p>header</p></header>;
  };
  const Footer = () => {
    return <footer className="footer-demo"><p>footer</p></footer>;
  };
  return <LayoutMain_default header={<Header />} footer={<Footer />}><div className="main-demo"><p>hola mundo</p></div></LayoutMain_default>;
};
var LayoutDemo_default = LayoutDemo;

export {
  LayoutDemo_default
};
