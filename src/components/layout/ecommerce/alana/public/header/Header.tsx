"use client"

import React, { useEffect, useState } from 'react';
import { LogoGenarogg, Icon } from 'nanify';

import { RiUser3Fill } from "react-icons/ri";
import { FaHeartCircleBolt } from "react-icons/fa6";

import HeaderUp from './HeaderUp';
import HeaderDown from './HeaderDown';


import imgMen from "/public/men.jpg"

import { A, BtnLoki, BtnNormalBasic } from "nanify";
import Nav from '@components/layout//nav/Nav';

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
                                <div className="logo">
                                    <A href={logo.href} >
                                        {logo.logo}
                                    </A>
                                </div>
                            </li>
                            <li>
                                <div className='btn-mobile'>
                                    <ul>

                                        <li>
                                            <A href='#'>
                                                <Icon icon={<FaHeartCircleBolt />} />
                                            </A>
                                        </li>
                                        <li>
                                            <A href='#'>
                                                <Icon icon={<FaHeartCircleBolt />} />
                                            </A>
                                        </li>
                                        <li>
                                            <A href='/usuario'>
                                                <Icon icon={<FaHeartCircleBolt />} />
                                            </A>
                                        </li>
                                        <li>
                                            <BtnNormalBasic >
                                                <Icon icon={<FaHeartCircleBolt />} />
                                            </BtnNormalBasic>
                                        </li>
                                        <li>
                                            <BtnLoki
                                                isActive={isActive}
                                                setIsActive={setIsActive}
                                            />
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