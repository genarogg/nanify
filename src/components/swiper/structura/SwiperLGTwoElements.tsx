"use client";

import React, { useRef } from 'react';
import { Swiper } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

/* lib */
// @ts-ignore
import SwiperGL from './lib/swiper-gl.min.js';
import "./lib/_swiper-gl.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import SwiperLGProps from './SwiperLGProps';

const SwiperLGTwoElements: React.FC<SwiperLGProps> = ({
    children,
    effect = "random",
    height = "100dvh",
    width = "380px"
}) => {
    const swiperRef = useRef<any>(null);

    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };


    return (
        <div
            className='containerSlider'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                ref={swiperRef}
                style={{ height: height, width: width }}
                effect="gl"
                onBeforeInit={
                    (swiper: any) => {
                        swiper.params.gl.shader = effect
                    }
                }
                
                direction={'horizontal'}
                speed={1500}
                allowTouchMove={false}
                simulateTouch={false}
                
                modules={[
                    EffectFade,
                    SwiperGL,
                ]}

                className="mySwiper"
            >
                {children}
            </Swiper>
        </div>
    );
}

export default SwiperLGTwoElements;