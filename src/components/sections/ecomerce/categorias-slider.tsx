"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';


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

                        slidesPerView={4}
                        loop={true}
                        direction={'horizontal'}
                        speed={1500}
                        centerInsufficientSlides={true}
                        effect={'fade'}
                        simulateTouch={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"

                        breakpoints={{
                            1500: {
                                slidesPerView: 4,
                            },
                            1000: {
                                slidesPerView: 3,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {data.map((category, index) => (
                            <SwiperSlide key={index} >
                                <div className="conainer-single-slider">
                                    <img src={category.imgSrc} alt="img" />
                                    <h3>
                                        <A href='#'>
                                            {category.name}
                                        </A>
                                    </h3>
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