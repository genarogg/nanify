"use client"

import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoGenarogg } from 'nanify';

import { RiUser3Fill } from "react-icons/ri";

import HeaderUp from './HeaderUp';
import HeaderDown from './HeaderDown';
import HeaderMobile from './HeaderMobile';

import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

import imgMen from "/public/men.jpg"

import "./sass/_header.scss"



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

    const HeaderUpSkeleton = ({ style = {} }) => {
        return (
            <div className="headerUp" style={style}>
                <div className="logo">
                    <Skeleton height={50} width={150} />
                </div>
                <div className="search" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Skeleton height={40} width={300} />
                </div>
                <div className="user">
                    <Skeleton height={40} width={100} />
                </div>
            </div >

        );

    }

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
            <AnimatePresence>
                {windowWidth === null ? (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <HeaderUpSkeleton style={{ height: "70px" }} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <HeaderUp logo={logo} navOuth={navOuth} navLogin={navLogin} login={login} />
                        {windowWidth ? <HeaderDesktop /> : <HeaderMobile login={login} data={categoryData} />}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;