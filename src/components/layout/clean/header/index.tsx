import React from "react";
import "./css/header.scss";


import { TiHome } from "react-icons/ti";
import { FaLightbulb } from "react-icons/fa";

import { BtnLoki } from "@ui";
import Title from "./Title";
import SideBar from "./sidebar";

import Nav from "@components/layout/nav/Nav";


interface HeaderProps {
    children?: React.ReactNode;
    where?: string;
}

const Header: React.FC<HeaderProps> = () => {

    const btnRemove = () => {
        const btn = document.getElementById("btn-hamburguer-loki");
        btn?.classList.remove("active");
    }

    const toggleAside = () => {
        const container = document.getElementById("container-aside");
        container?.classList.toggle("sidebar-header");
    }

    const menuItems = [
        { href: "/", label: "Inicio", icon: <TiHome /> },
        { href: "#servicios", label: "Servicios", icon: <FaLightbulb /> },
    ];


    return (
        <header className="header-container">
            <div className="desktop-header">
                <Title />
                <Nav menuItems={menuItems} />
            </div>

            <div className={`movile-header`} >
                <nav>
                    <ul className="elements">
                        <li>
                            <BtnLoki onClick={() => { toggleAside() }} />
                        </li>
                        <li>
                            <Title />
                        </li>
                    </ul>
                    <SideBar>

                    </SideBar>
                </nav>
            </div>

        </header>
    );
};

export default Header;
