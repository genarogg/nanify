"use client"

import React from 'react'
import { LogoGenarogg, Img } from '../../../../../../lib/index';
import { v4 as uuid } from 'uuid';

import { RiUser3Fill } from "react-icons/ri";
import HeaderUp from './HeaderUp';
import HeaderToolTip from '../../../../tooltip/HeaderToolTip';

import imgMen from "/public/men.jpg"

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

    const login = true

    // Definir los elementos del header
    const logo = { href: "/", logo: <LogoGenarogg />, alt: "Logo" };

    const navOuth = [
        { href: "/login", label: "login", icon: <RiUser3Fill /> },
    ]



    const Li = () => {
        return (
            <li className="categoria">
                <Img
                    type="local"
                    src={imgMen} width={150} height={150} alt="demo"
                    className='imgCategoria'
                    id={`demo${uuid()}`}
                    visible={false}
                />

            </li>
        )
    }

    const SubCategoria = () => {
        return (
            <div className="subCategoria">
                <h5>ropa</h5>
                <nav>
                    <ul>
                        <Li />
                        {/* <Li />
                        <Li />
                        <Li /> */}
                    </ul>
                </nav>
            </div>
        )
    }

    const NavToolTip = () => {
        return (
            <li>
                <HeaderToolTip title='hombres'>
                    <div className="containerCategoria">
                        <div className="imgContainer">
                            {/* <Img src={imgMen}> */}
                            <Img type="local" src={imgMen} alt="demo2" id="demoad" width={200}
                                height={200}
                                visible={false} />
                        </div>
                        <div className="categoria">
                            <SubCategoria />
                            {/* <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria /> */}
                        </div>
                    </div>
                </HeaderToolTip>
            </li>
        )
    }


    return (
        <header className='header'>
            <HeaderUp logo={logo} nav={navOuth} login={login} />
            <div className="headerDown">
                <nav className='navToolTip'>
                    <ul>

                        <NavToolTip />
                        {/* <NavToolTip />
                        <NavToolTip />
                        <NavToolTip />
                        <NavToolTip /> */}

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;