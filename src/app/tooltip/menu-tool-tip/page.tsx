"use client"

import React from 'react'
import { MenuToolTip } from '@components/index';
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

interface menuToolTipProps {

}

const menuToolTip: React.FC<menuToolTipProps> = () => {
    const menuItems = [
        <div><FaUser /> Perfil</div>,
        <div><FaCog /> Configuración</div>,
        <div><FaSignOutAlt /> Cerrar sesión</div>
    ];

    return (
        <>
            <div style={{ padding: "50px" }}>
                <MenuToolTip items={menuItems} placement="bottom">
                    <button>Menú</button>
                </MenuToolTip>
            </div>
        </>
    );
}

export default menuToolTip;