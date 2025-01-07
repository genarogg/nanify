"use client";
import React from 'react';
import SwiperLG from '@components/swiper/SwiperLG';
import { SwiperSlide } from 'swiper/react';

import img1 from "@public/swiper/01.jpg";
import img2 from "@public/swiper/02.jpg";
import img3 from "@public/swiper/03.jpg";
import img4 from "@public/swiper/04.jpg";
import img5 from "@public/swiper/05.jpg";
// Import Swiper React components


const Characters = () => {

    const elements = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }];

    return (
        <div>
            <SwiperLG>
                <SwiperSlide>
                    <img className="swiper-gl-image" src='/bg-home.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-gl-image" src='/bg-home.jpg' />
                </SwiperSlide>
            </SwiperLG>
        </div>
    );
}

export default Characters