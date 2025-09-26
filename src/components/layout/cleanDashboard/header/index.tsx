import React from "react";
import "./css/header.scss";
import { BtnLoki } from "@/components/ux";
import Title from "./Title";
import Perfil from "./perfil";
import Nav from "@/components/layout/nav";
import Notificaciones from "./notificaciones";
import {
    toggleAside
} from "../fn"

interface HeaderProps {
    children?: React.ReactNode;
    where?: string;
}

const Header: React.FC<HeaderProps> = () => {

    const imgGravatar = "https://www.gravatar.com/avatar/e0cd02f6bbabeb8f0aec1b6a090b7527"

    const menuItems = [
        { component: <Notificaciones /> },
        { component: <Perfil avatarUrl={imgGravatar} /> },
    ];

    const menuItemsMovile = [
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
                            <Nav className="elements-right" menuItems={menuItemsMovile} />
                        </li>
                    </ul>

                </nav>
            </div>

        </header>
    );
};

export default Header;
