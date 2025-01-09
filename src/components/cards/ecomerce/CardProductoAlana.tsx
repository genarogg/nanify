"use client"

import React, { useState, useEffect } from 'react';
import { A, MenuToolTip, Icon } from "@nanify"
import { SwiperSlide } from 'swiper/react'
import SwiperLGTwoElements from '@components/swiper/structura/SwiperLGTwoElements'
import SliderTwoElements from '@components/swiper/SliderTwoElements'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { regexUrl } from "@fn/regexUtils"
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";

import img1 from "@public/swiper/people-1.jpg";
import img2 from "@public/swiper/people-2.jpg";

interface CardProductoAlanaProps { }

const CardProductoAlana: React.FC<CardProductoAlanaProps> = () => {

    const data = {
        url: regexUrl("afd adsf"),
        titulo: "Producto 1",
        colores: [{
            color: "#000",
            primaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370194/34_432F001_GRI180403_0.jpg?v=638561621764400000?1735430400011",
            secundaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370625/34_432F014_VER190516_0.jpg?v=638561624971700000?1735689600011",
            precio: 100,
            tallas: ["S", "M", "L", "XL"],
        }],

    }

    const quickActions = [
        { items: ['Comparar'], icon: <MdOutlineCompareArrows /> },
        { items: ['Vista Rapida'], icon: <FaRegEye /> },
        { items: ['Deseado'], icon: <FaRegHeart /> },
        { items: ['Comprar'], icon: <FiShoppingBag /> },
    ];



    return (
        <div className="card-alana-producto">
            {data.colores.map((color, colorIndex) => (
                <div key={colorIndex} className="container-img">
                    <A href={data.url}>
                        <SwiperLGTwoElements
                            effect='polygons-wind'
                            height="460px"
                            width='360px'>
                            <SwiperSlide>
                                <img src={color.primaryImg}
                                    className="swiper-gl-image primary-img"
                                    alt={data.titulo}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={color.secundaryImg}

                                    className="swiper-gl-image secundary-img"
                                    width={360}
                                    height={460}
                                    alt={data.titulo}
                                />
                            </SwiperSlide>
                        </SwiperLGTwoElements>


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