"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import SwiperGL from '@components/swiper/structura//lib/swiper-gl.min.js';
import "@components/swiper/structura//lib/_swiper-gl.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


import { A } from "@nanify"

interface CategoriasSliderProps {
    data: any[];
}

const CategoriasSlider: React.FC<CategoriasSliderProps> = ({ data }) => {
    return (<>
        <div className="container-slider">
            <div className="internal-container">
                <div className="header-slider">
                    <h2>titulo</h2>
                    <A href="#">more</A>
                </div>
                <div className="container-info">
                    <Swiper
                        effect="gl"
                        onBeforeInit={
                            (swiper: any) => {
                                swiper.params.gl.shader = "random"
                            }
                        }
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        direction={'horizontal'}
                        speed={1500}
                        pagination={{ clickable: true }}
                        modules={[SwiperGL, EffectFade, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {data.map((category, index) => (
                            <SwiperSlide key={index} >
                                <div className="conainer-single-slider">
                                    <div className="conainer-single-slider">
                                        <img src={category.imgSrc} alt="img" className="swiper-gl-image" />
                                        <h3>{category.name}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </>);
}

export default CategoriasSlider;