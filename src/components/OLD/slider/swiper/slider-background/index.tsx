"use client";
import React from 'react';
import "./sass/_sliderBackgroud.scss";
import { SwiperSlide } from 'swiper/react';
import { A } from "@/components/nano";
import { Icon } from "@/components/ux"

import { IoIosArrowForward } from "react-icons/io";

import SwiperLGBackgroud from '@/components/OLD/slider/swiper/estructura/SwiperLGBackgroud';
import {BtnNormalBasic} from "@/components/ux";

interface SliderBackgroundProps { data: any }

const SliderBackground: React.FC<SliderBackgroundProps> = ({ data }) => {

    return (
        <div className='containerSliderLg bg'>
            <SwiperLGBackgroud >
                {data.map((element: any, index: any) => (
                    <SwiperSlide key={index}>
                        <img src={element.img}
                            alt="img"
                            className="swiper-gl-image"
                        />
                        <div className="containerInfo" key={index}>
                            <div className="content center">
                                <h2 className="slide-title">{element.info.title}</h2>
                                <p className="slide-description">{element.info.description}</p>
                                <div className="button-wrapper">
                                    <BtnNormalBasic className="btnNormalBasic">
                                        <A href={element.info.btn.link} className="button-link">
                                            <span>{element.info.btn.text}</span>
                                            <Icon icon={<IoIosArrowForward className="arrow-icon" />} />
                                        </A>
                                    </BtnNormalBasic>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperLGBackgroud>
        </div>
    );
}

export default SliderBackground