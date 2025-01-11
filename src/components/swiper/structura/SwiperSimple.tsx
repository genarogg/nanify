import React from 'react'
import { Swiper } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import SwiperProps from './SwiperProps'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SwiperSimple: React.FC<SwiperProps> = ({
    children,
    height = "300px",
    width = "300px",
    slidesPerView = 3,
    spaceBetween = 30
}) => {
    return (<>
        <Swiper
            style={{ height: height, width: width }}
            effect="fade"
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
        >
            {children}
        </Swiper>
    </>);
}

export default SwiperSimple;