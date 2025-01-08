"use client"

import React from 'react'
import { A, Img, MenuToolTip, Icon } from "@nanify"
import SwiperLG from '@components/swiper/structura/SwiperLG'
import { SwiperSlide } from 'swiper/react'

import { FaRegHeart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";


import { regexUrl } from "@fn/regexUtils"

interface CardProductoAlanaProps { }

const CardProductoAlana: React.FC<CardProductoAlanaProps> = () => {

    const data = {
        url: regexUrl("afd adsf"),
        color: "#fff",
        titulo: "Producto 1",
        precio: 100,
        tallas: ["S", "M", "L", "XL"],
        mainImg: "https://themesflat.co/html/ecomus/images/products/white-4.jpg",
        imgs: [
            {
                src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                alt: "imagen 1"
            },
            {
                src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                alt: "imagen 2"
            },
            {
                src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                alt: "imagen 2"
            }
        ]
    }

    const quickActions = [
        { items: ['Buscar'], icon: <FaRegHeart /> },
        { items: ['Buscar'], icon: <FaRegHeart /> },
        { items: ['Buscar'], icon: <FaRegHeart /> },
        { items: ['Buscar'], icon: <FaRegHeart /> }
    ];

    return (
        <div className="card-alana-producto">
            <div className="container-img">
                <A href={data.url} className='main-img'>
                    <Img
                        type='remote'
                        src={data.mainImg}
                        alt={data.titulo}
                        width={360}
                        height={460}
                    />
                </A>
                <nav className='quik-actions'>
                    <ul>
                        {quickActions.map((action, index) => (
                            <li key={index}>
                                <MenuToolTip
                                    interactive={false}
                                    items={action.items}
                                    placement='top'
                                    classNameTooltip='card-producto-alana-quik-actions-tooltip'
                                >
                                    <Icon icon={action.icon} />
                                </MenuToolTip>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className='tallas'>
                    <ul>
                        {
                            data.tallas.map((talla, index) => (
                                <li key={index}>
                                    <A href={`${data.url}#talla=${talla}`} className='talla'>
                                        {talla}
                                    </A>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>


        </div>
    );
}

export default CardProductoAlana;