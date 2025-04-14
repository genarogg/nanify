"use client";
import React from 'react';
import "./sliderBackgroud/sass/_sliderBackgroud.scss";
import { SwiperSlide } from 'swiper/react';

import SwiperLGTwoElements from '@slider/swiper/estructura/SwiperLGTwoElements';

import img1 from "@public/swiper/people-1.jpg";
import img2 from "@public/swiper/people-2.jpg";


interface SliderBackgroundProps { }

const SliderBackground: React.FC<SliderBackgroundProps> = () => {

    const elements = [
        {
            img: img1
        },
        {
            img: img2
        },


    ];

    return (
        <div className='containerSliderLg bg'>
            <SwiperLGTwoElements >
                {elements.map((element, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={element.img.src}
                            alt="img"
                            className="swiper-gl-image"
                        />
                    </SwiperSlide>
                ))}
            </SwiperLGTwoElements>
        </div>
    );
}

export default SliderBackground