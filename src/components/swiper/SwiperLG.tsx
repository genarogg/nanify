"use client";

import React from 'react'
import { Swiper } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade, Autoplay, } from 'swiper/modules';

/* lib */
import SwiperGL from './lib/swiper-gl.min.js';
import "./lib/swiper-gl.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SwiperLGProps {
    children: React.ReactNode;
    effect?:
    "random" |
    "dots" |
    "flyeye" |
    "morph-x" |
    "morph-y" |
    "page-curl" |
    "peel-x" |
    "peel-y" |
    "polygons-fall" |
    "polygons-morph" |
    "polygons-wind" |
    "pixelize" |
    "ripple" |
    "shutters" |
    "slices" |
    "squares" |
    "stretch" |
    "wave-x" |
    "wind";
}

const SwiperLG: React.FC<SwiperLGProps> = ({ children, effect = "random" }) => {
    return (
        <div className='containerSlider'>
            <Swiper
                effect="gl"
                onBeforeInit={(swiper: any) => (swiper.params.gl.shader = effect)}
                direction={'horizontal'}
                speed={1500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                spaceBetween={0}
                touchReleaseOnEdges={true}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, EffectFade, Pagination, SwiperGL, Autoplay]}
                className="mySwiper"
            >
                {children}
            </Swiper>
        </div>
    );
}

export default SwiperLG;