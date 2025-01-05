"use client"

import React, { useEffect, useState } from 'react';
import { LogoGenarogg, Icon } from 'nanify';

import { RiUser3Fill } from "react-icons/ri";

import HeaderUp from './HeaderUp';
import HeaderDown from './HeaderDown';

import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import imgMen from "/public/men.jpg"

import { A, BtnLoki, BtnNormalBasic } from "nanify";

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
        { href: "/usuario", icon: <LuUserRound /> },
        { href: "/deseado", icon: <FiHeart /> },
        { href: "/card", icon: <FiShoppingBag /> },
    ]

    const categoryData = [
        {
            title: 'Hombres',
            containerLeft: {
                type: 'local',
                src: imgMen,
                alt: 'Imagen de hombres',
                blurDataURL: undefined
            },

            subcategories: [
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
            ]
        },
        {
            title: 'Hombres',
            containerLeft: {
                type: 'local',
                src: imgMen,
                alt: 'Imagen de hombres',
                blurDataURL: undefined
            },

            subcategories: [
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
            ]
        },
        {
            title: 'Hombres',
            containerLeft: {
                type: 'local',
                src: imgMen,
                alt: 'Imagen de hombres',
                blurDataURL: undefined
            },

            subcategories: [
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
                {
                    name: 'Ropa',
                    itemType: "local",
                    items: [
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        },
                        {
                            imgSrc: imgMen,
                            blurDataURL: undefined,
                            imgAlt: 'Jeans',
                            label: 'Jeans'
                        }
                    ]
                },
            ]
        },

    ];

    const [windowWidth, setWindowWidth] = useState<any>(null);



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setWindowWidth(true);
            } else {
                setWindowWidth(false);
            }
        };

        handleResize();
    }, []);

    const HeaderDesktop = () => {
        return (
            <>
                <HeaderUp
                    logo={logo}
                    navOuth={navOuth}
                    navLogin={navLogin}
                    login={login}
                />
                <HeaderDown data={categoryData} />
            </>
        );
    }



    const HeaderMobile = () => {
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
                                        <li>
                                            <A href='/usuario'>
                                                <Icon icon={<LuUserRound />} />
                                            </A>
                                        </li>
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



                                        <li>
                                            <A href='/card'>
                                                <Icon icon={<FiShoppingBag />} />
                                            </A>
                                        </li>
                                        <li>
                                            <BtnNormalBasic >
                                                <Icon icon={<AiOutlineSearch />} />
                                            </BtnNormalBasic>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div >
            </>
        )
    }

    return (
        <header className='header'>
            {windowWidth ? <HeaderDesktop /> : <HeaderMobile />}
        </header>
    );
}

export default Header;