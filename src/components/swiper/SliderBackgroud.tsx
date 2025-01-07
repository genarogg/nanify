"use client";
import React from 'react';
import SwiperLG from '../../components/swiper/structura/SwiperLG';
import { SwiperSlide } from 'swiper/react';

import img1 from "@public/swiper/01.jpg";
import img2 from "@public/swiper/02.jpg";
import img3 from "@public/swiper/03.jpg";
import img4 from "@public/swiper/04.jpg";
import img5 from "@public/swiper/05.jpg";

const SliderBackground = () => {

    const elements = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
    ];

    return (
        <div className='containerSliderLg'>
            <SwiperLG >
                {elements.map((element, index) => (
                    <SwiperSlide key={index}>
                        <img src={element.img.src}
                            alt="img"
                            className="swiper-gl-image"
                        />
                        <div className={`containerInfo center`}>
                            <h1>Character</h1>
                            <p>Character description</p>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperLG>
        </div>
    );
}

export default SliderBackground