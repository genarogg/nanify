import "./css/sideBar.css"

import {
  toggleAside,
  btnRemove
} from "../fn"

import Nav from "../../nav"
import useIsInRange from "@/hook/useIsInRange"

interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
  logoutfn?: () => void;
}


const SideBar: React.FC<SideBarProps> = ({ className }) => {
  const logoutfn = () => { }

  const menuItems = [
    {
      href: "#inicio",
      label: "Inicio",
      children: [
        { href: "#quienes-somos", label: "Quiénes somos" },
        { href: "#historia", label: "Nuestra historia" }
      ]
    },
    {
      href: "#servicios",
      label: "Servicios",
      children: [
        { href: "#desarrollo-web", label: "Desarrollo Web" },
        { href: "#diseno-grafico", label: "Diseño Gráfico" },
      ]
    }
  ];

  const isInRange = useIsInRange({ min: 0, max: 1200 })


  return (
    <div className={`container-aside ${className}`} id="container-aside">
      <aside className="sidebar">
        <Nav
          menuItems={menuItems}
          onClick={isInRange ? () => { btnRemove(); toggleAside(); } : undefined}
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
