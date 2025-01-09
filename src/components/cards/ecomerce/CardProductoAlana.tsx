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

interface CardProductoAlanaProps {
    data: any
}

const CardProductoAlana: React.FC<CardProductoAlanaProps> = ({ data }) => {



    const quickActions = [
        { items: ['Comparar'], icon: <MdOutlineCompareArrows /> },
        { items: ['Vista Rapida'], icon: <FaRegEye /> },
        { items: ['Deseado'], icon: <FaRegHeart /> },
        { items: ['Comprar'], icon: <FiShoppingBag /> },
    ];



    return (
        <div className="card-alana-producto">
            {data.colores.map((color: any, colorIndex: any) => (
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
                            {color.tallas.map((talla: any, index: any) => (
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