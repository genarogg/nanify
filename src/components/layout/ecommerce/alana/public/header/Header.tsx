"use client"

import React from 'react'
import { LogoGenarogg, Img, Icon, A } from 'nanify';
import { v4 as uuid } from 'uuid';

import { RiUser3Fill } from "react-icons/ri";
import HeaderUp from './HeaderUp';
import HeaderToolTip from '../../../../tooltip/HeaderToolTip';

import imgMen from "/public/men.jpg"

import { TbCategoryPlus } from "react-icons/tb";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

    const login = true

    // Definir los elementos del header
    const logo = { href: "/", logo: <LogoGenarogg />, alt: "Logo" };

    const navOuth = [
        { href: "/login", label: "login", icon: <RiUser3Fill /> },
    ]


    const MoreCategories = () => {
        return (
            <>
                <A href="#" className="containerCategori">
                    <Icon icon={<TbCategoryPlus />} />
                    <h6>Ver mas!</h6>
                </A>
            </>
        )
    }



    const Li = () => {
        return (
            <li className='slideIn'>
                <Img
                    type="local"
                    src={imgMen} width={80} height={80} alt="demo"
                    className='imgCategoria'
                    id={`demo${uuid()}`}
                    visible={false}
                />
                <h6>ropa</h6>
            </li>
        )
    }

    const SubCategoria = () => {
        return (
            <div className="subCategoria">
                <h5>ropa</h5>
                <nav>
                    <ul>
                        <li className='slideIn'>
                            <MoreCategories />
                        </li>
                        <Li />
                        <Li />
                        <Li />
                        <Li />
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
                            <Img type="local" src={imgMen} alt="demo2" id="demoad" width={340}
                                height={340}
                                visible={false} />
                        </div>
                        <div className="categoria">
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
                            <SubCategoria />
                            <SubCategoria />
                            <SubCategoria />
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