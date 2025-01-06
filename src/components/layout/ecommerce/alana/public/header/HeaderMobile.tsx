import React, { useState } from 'react';
import { A, BtnLoki, BtnNormalBasic } from "nanify";
import { Icon, LogoGenarogg } from "nanify";
import { AiOutlineSearch } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import AlgoliaSearch from '@components/algolia/AlgoliaSearch';

import "./sass/_headerMobile.scss";

import  activeAside from "./fn/activeAside";

interface HeaderMobileProps {
    login: boolean;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ login }) => {
    const logo = { href: "/", logo: <LogoGenarogg />, alt: "Logo" };
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="headerMovile">
                <nav>
                    <ul className='container'>
                        <li>
                            <div className='btn-mobile'>
                                <ul className='left'>
                                    <li>
                                        <BtnLoki
                                            className='btnHamburguesa'
                                            isActive={isActive}
                                            setIsActive={setIsActive}
                                        />
                                    </li>
                                    {
                                        login ?
                                            <li>
                                                <A href='/usuario'>
                                                    <Icon icon={<LuUserRound />} />
                                                </A>
                                            </li>
                                            :
                                            null
                                    }
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="logo">
                                <A href={logo.href} >
                                    {logo.logo}
                                </A>
                            </div>
                        </li>
                        <li>
                            <div className='btn-mobile'>
                                <ul className='right'>
                                    {
                                        login ?
                                            <>
                                                <li className='hidden-xs'>
                                                    <A href='/deseado'>
                                                        <Icon icon={<FiHeart />} />
                                                    </A>
                                                </li>

                                                <li>
                                                    <A href='/card'>
                                                        <Icon icon={<FiShoppingBag />} />
                                                    </A>
                                                </li>
                                            </>
                                            :
                                            <li>
                                                <A href='/login'>
                                                    <Icon icon={<LuUserRound />} />
                                                </A>
                                            </li>
                                    }

                                    <li>
                                        <BtnNormalBasic onClick={() => activeAside('asideSearch')} id='btnSearch'>
                                            <Icon icon={<AiOutlineSearch />} />
                                        </BtnNormalBasic>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="mobileSearch search" id='asideSearch'>
                    <AlgoliaSearch
                        className='algolia'
                        styleSearchBox={"searchBoxMovile"}
                    />
                </div>
                <div className="mobileCategoria">

                </div>
            </div >
        </>
    )
}

export default HeaderMobile;