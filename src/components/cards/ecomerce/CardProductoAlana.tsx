"use client"

import React from 'react'
import { A, Img, MenuToolTip, Icon } from "@nanify"
import SwiperLG from '@components/swiper/structura/SwiperLG'
import { SwiperSlide } from 'swiper/react'

import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { regexUrl } from "@fn/regexUtils"
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";

interface CardProductoAlanaProps { }

const CardProductoAlana: React.FC<CardProductoAlanaProps> = () => {

    const data = {
        url: regexUrl("afd adsf"),
        titulo: "Producto 1",
        colores: [{
            color: "#000",
            primaryImg: "https://themesflat.co/html/ecomus/images/products/white-4.jpg",
            secundaryImg: "https://themesflat.co/html/ecomus/images/products/pink-1.jpg",
            precio: 100,
            tallas: ["S", "M", "L", "XL"],
        }],

    }

    const quickActions = [
        { items: ['Buscar'], icon: <MdOutlineCompareArrows /> },
        { items: ['Buscar'], icon: <FaRegEye /> },
        { items: ['Buscar'], icon: <FaRegHeart /> },
        { items: ['Buscar'], icon: <FiShoppingBag /> },
    ];

    return (
        <div className="card-alana-producto">
            {data.colores.map((color, colorIndex) => (
                <div key={colorIndex} className="container-img">
                    <A href={data.url} className="main-img">
                        <Img
                            type="remote"
                            src={color.primaryImg}
                            alt={data.titulo}
                            width={360}
                            height={460}
                        />
                    </A>
                    <nav className="quik-actions">
                        <ul>
                            {quickActions.map((action, index) => (
                                <li key={index}>
                                    <MenuToolTip
                                        interactive={false}
                                        items={action.items}
                                        placement="top"
                                        classNameTooltip="card-producto-alana-quik-actions-tooltip"
                                    >
                                        <Icon icon={action.icon} />
                                    </MenuToolTip>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="tallas">
                        <ul>
                            {color.tallas.map((talla, index) => (
                                <li key={index}>
                                    <A href={`${data.url}#talla=${talla}`} className="talla">
                                        {talla}
                                    </A>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            ))}
            <div className="container-info">
                <h3>{data.titulo}</h3>
                <p>${data.colores[0]?.precio}</p>
            </div>
        </div>
    );
}

export default CardProductoAlana;