"use client"

import React, { useRef,useEffect } from 'react';
import { A, MenuToolTip, Icon } from "@nanify"

import SwiperLGTwoElements from '@components/swiper/structura/SwiperLGTwoElements'

import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import { FaRegEye } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';


/* lib */
// @ts-ignore
import SwiperGL from '@components/swiper/structura/lib/swiper-gl.min.js';
import "@components/swiper/structura/lib/_swiper-gl.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface CardProductoAlanaProps {
    data: any
}

const CardProductoAlana: React.FC<CardProductoAlanaProps> = ({ data }) => {
    const swiperRef = useRef<any>(null);

    const quickActions = [
        { items: ['Comparar'], icon: <MdOutlineCompareArrows /> },
        { items: ['Vista Rapida'], icon: <FaRegEye /> },
        { items: ['Deseado'], icon: <FaRegHeart /> },
        { items: ['Comprar'], icon: <FiShoppingBag /> },
    ];

    const handleColorClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const QuickActions = () => {
        return (
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
        )
    }
    const NavCard = ({ color }: any) => {
        return (
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
        )
    }
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.on('slideChange', () => {
                const slides = swiperInstance.slides;
                slides.forEach((slide: any) => {
                    const containerImg = slide.querySelector('.container-img');
                    if (containerImg) {
                        containerImg.classList.remove('active-slide');
                    }
                });
                const activeSlide = slides[swiperInstance.activeIndex];
                const activeContainerImg = activeSlide.querySelector('.container-img');
                if (activeContainerImg) {
                    activeContainerImg.classList.add('active-slide');
                }
            });
        }
    }, []);

    return (
        <div className="card-alana-producto">
            <Swiper
                ref={swiperRef}
                style={{ height: 480, width: 360 }}
                effect="gl"
                onBeforeInit={
                    (swiper: any) => {
                        swiper.params.gl.shader = "morph-y"
                    }
                }
                direction={'horizontal'}
                speed={1500}
                allowTouchMove={false}
                simulateTouch={false}
                loop={true}
                modules={[
                    EffectFade,SwiperGL
                ]}
                className="mySwiper-container"
            >
                {data.colores.map((color: any, colorIndex: any) => (
                    <SwiperSlide key={colorIndex}>
                        <img src={color.primaryImg}
                            className="swiper-gl-image primary-img GG"
                            alt={data.titulo}
                        />
                        <div className="container-img fade-in">
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
                            <QuickActions />
                            <NavCard color={color} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container-info">
                <h3>{data.titulo}</h3>
                <p>
                    {data.colores.map((color: any, colorIndex: any) => (
                        <span
                            key={colorIndex}
                            onClick={() => handleColorClick(colorIndex)}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                        >
                            {color.color}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default CardProductoAlana;