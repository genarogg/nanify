import "./css/sideBar.css"

import {
  toggleAside,
  btnRemove
} from "../fn"

import Nav from "../../nav"

interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
  logoutfn?: () => void;
}


const SideBar: React.FC<SideBarProps> = ({ className }) => {
  const logoutfn = () => { }

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
  ];

  return (
    <div className={`container-aside ${className}`} id="container-aside">
      <aside className="sidebar">
        <Nav
          menuItems={menuItems}
          onClick={() => { btnRemove(); toggleAside(); }}
        />
      </aside>
      <div className="salirBtn">
        <button onClick={logoutfn}>
          cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default SideBar;
