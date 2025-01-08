"use client";
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { A, Icon } from 'nanify';

import { IoIosArrowForward } from "react-icons/io";

import SwiperLG from '@components/swiper/structura/SwiperLG';
import BtnNormalBasic from "@components/btns/basic/btnNormalBasic";

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
        <div className='containerSliderLg bg'>
            <SwiperLG >
                {elements.map((element, index) => (
                    <SwiperSlide key={index}>
                        <img src={element.img.src}
                            alt="img"
                            className="swiper-gl-image"
                        />
                        <div className="containerInfo">
                            <div className="content center">
                                <h2>Simple Style</h2>
                                <p>From casual to formal, we've got you covered</p>
                                <BtnNormalBasic>
                                    <A href="#">
                                        <span>Shop collection</span>
                                        <Icon icon={<IoIosArrowForward />} />
                                    </A>
                                </BtnNormalBasic>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperLG>
        </div>
    );
}

export default SliderBackground