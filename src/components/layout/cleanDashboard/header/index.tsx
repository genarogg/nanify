import React from "react";
import "./css/header.scss";

import { BtnLoki } from "@/components/ux";
import Gravatar from "@/components/gravatar";

import Title from "./Title";
import SideBar from "./sidebar";
import Perfil from "./perfil";
import Notificaciones from "./notificaciones";

import Nav from "@/components/layout/nav";

interface HeaderProps {
    children?: React.ReactNode;
    where?: string;
}

const Header: React.FC<HeaderProps> = () => {

    const btnRemove = () => {
        console.log("btnRemove");
        const btn = document.getElementById("btn-hamburguer-loki");
        btn?.classList.remove("active");
    }

    const toggleAside = () => {
        const container = document.getElementById("container-aside");
        container?.classList.toggle("sidebar-header");
    }

    const imgGravatar = "https://www.gravatar.com/avatar/e0cd02f6bbabeb8f0aec1b6a090b7527"

    const menuItems = [
        { component: <Perfil avatarUrl={imgGravatar} /> },
    ];

    return (
        <header className="header-container aside">
            <div className="desktop-header">
                <Title />
                <Nav menuItems={menuItems} />
            </div>

            <div className="movile-header">
                <nav>
                    <ul className="elements">
                        <li>
                            <BtnLoki onClick={() => { toggleAside() }} />
                        </li>
                        <li>
                            <Title />
                        </li>
                        <li>
                            <Nav className="elements-right" menuItems={menuItems} />
                        </li>
                    </ul>
                    <SideBar
                        logoutfn={() => { btnRemove(); toggleAside(); }}
                    >
                        <Nav
                            menuItems={menuItems}
                            onClick={() => { btnRemove(); toggleAside(); }}
                        />
                    </SideBar>
                </nav>
            </div>

        </header>
    );
};

export default Header;
