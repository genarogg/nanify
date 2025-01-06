import React, { useState } from 'react';
import { A, Img, BtnLoki, BtnNormalBasic } from "nanify";
import { Icon, LogoGenarogg } from "nanify";
import { AiOutlineSearch } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import AlgoliaSearch from '@components/algolia/AlgoliaSearch';
import { regexUrl } from "@fn/index"
import { FaRegHeart } from "react-icons/fa";


import activeAside from "./fn/activeAside";
interface HeaderMobileProps {
    login: boolean;
    data: any;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ login, data }) => {
    const logo = { href: "/", logo: <LogoGenarogg />, alt: "Logo" };
    const [isActive, setIsActive] = useState(false);


    const SubCategoria = ({ name, items, itemType }: any) => {
        console.log(items)
        return (
            <div className="subCategoria">
                <h5 className='slideIn'>{name}</h5>
                <nav>
                    <ul>
                        <li className='slideIn'>
                            <A href={`/categoria/${regexUrl(name)}`} >
                                <div className="viewmore">
                                    <Icon icon={<FaRegHeart />} />
                                </div>
                                <h6>Ver más!</h6>
                            </A>
                        </li>
                        {
                            items.map((item: any, index: any) => (
                                <li className='slideIn' key={index}>
                                    <A href={`/categoria/${regexUrl(item.label)}`}>
                                        <Img
                                            type={itemType}
                                            src={item.imgSrc}
                                            width={80}
                                            height={80}
                                            alt={item.imgAlt}
                                            className='imgCategoria'
                                            visible={false}
                                        />
                                        <h6>{item.label}</h6>
                                    </A>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        )
    }

    const NavToolTip = ({ subcategories }: any) => (
        <li>
            <div className="containerCategoria">
                <div className="categorias">
                    {subcategories.map((sub: any, index: any) => (
                        <SubCategoria
                            key={index}
                            name={sub.name}
                            itemType={sub.itemType}
                            items={sub.items} />
                    ))}
                </div>
            </div>
        </li>
    );


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
                                            fn={() => activeAside('asideCategoria')}
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
                {/* asides */}
                <div className="mobileSearch search" id='asideSearch'>
                    <AlgoliaSearch
                        className='algolia'
                        styleSearchBox={"searchBoxMovile"}
                    />
                </div>
                <div className="mobileCategoria" id='asideCategoria'>
                    <nav className="subCategoria">
                        <ul>
                            {data.map((category: any, index: any) => (
                                <NavToolTip
                                    key={index}
                                    subcategories={category.subcategories}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div >
        </>
    )
}

export default HeaderMobile;