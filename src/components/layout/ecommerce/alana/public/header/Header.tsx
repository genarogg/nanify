"use client"

import React from 'react'
import { LogoGenarogg } from 'nanify';


import { RiUser3Fill } from "react-icons/ri";
import { FaHeartCircleBolt } from "react-icons/fa6";

import HeaderUp from './HeaderUp';
import HeaderDown from './HeaderDown';


import imgMen from "/public/men.jpg"

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

    const login = false

    // Definir los elementos del header
    const logo = { href: "/", logo: <LogoGenarogg />, alt: "Logo" };

    const navOuth = [
        { href: "/login", label: "login", icon: <RiUser3Fill /> },
    ]

    const navLogin = [
        { href: "#", icon: <FaHeartCircleBolt /> },
        { href: "#", icon: <FaHeartCircleBolt /> },
        { href: "#", icon: <FaHeartCircleBolt /> },
        { href: "#", icon: <FaHeartCircleBolt /> },
        { href: "#", icon: <FaHeartCircleBolt /> },
    ]

    const navHeaderDown = [
        {
            type: "local",
            src: imgMen,
            alt: "demo"
        }
    ]

    return (
        <header className='header'>
            <HeaderUp
                logo={logo}
                navOuth={navOuth}
                navLogin={navLogin}
                login={login}
            />
            <HeaderDown />
        </header>
    );
}

export default Header;