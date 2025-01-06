"use client"

import React, { useEffect, useState } from 'react';
import { LogoGenarogg } from 'nanify';

import { RiUser3Fill } from "react-icons/ri";

import HeaderUp from './HeaderUp';
import HeaderDown from './HeaderDown';
import HeaderMobile from './HeaderMobile';

import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

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
            }
            else if (window.innerWidth <= 1024) {
                setWindowWidth(false);
            }
        };

        handleResize();
    }, []);

    if (windowWidth === null) return null;

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

    return (
        <header className='header'>
            {windowWidth ? <HeaderDesktop /> : <HeaderMobile login={login} data={categoryData} />}
        </header>
    );
}

export default Header;