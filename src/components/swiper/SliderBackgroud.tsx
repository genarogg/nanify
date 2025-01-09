"use client";
import React from 'react';
import "./sass/_sliderBackgroud.scss";
import { SwiperSlide } from 'swiper/react';
import { A, Icon } from 'nanify';

import { IoIosArrowForward } from "react-icons/io";

import SwiperLGBackgroud from '@components/swiper/structura/SwiperLGBackgroud';
import BtnNormalBasic from "@components/btns/basic/btnNormalBasic";

import img1 from "@public/swiper/01.jpg";
import img2 from "@public/swiper/02.jpg";
import img3 from "@public/swiper/03.jpg";
import img4 from "@public/swiper/04.jpg";
import img5 from "@public/swiper/05.jpg";

interface SliderBackgroundProps { }

const SliderBackground: React.FC<SliderBackgroundProps> = () => {

    const elements = [
        {
            img: img1,
            info: {
                title: "Simple Style",
                description: "From casual to formal, we've got you covered",
                btn: {
                    text: "Shop collection",
                    link: "#"
                }
            }
        },
        {
            img: img2,
            info: {
                title: "Simple Style2",
                description: "From casual to formal, we've got you covered",
                btn: {
                    text: "Shop collection",
                    link: "#"
                }
            }
        },
        {
            img: img3,
            info: {
                title: "Simple Style3",
                description: "From casual to formal, we've got you covered",
                btn: {
                    text: "Shop collection",
                    link: "#"
                }
            }
        },

        {
            img: img4,
            info: {
                title: "Simple Style4",
                description: "From casual to formal, we've got you covered",
                btn: {
                    text: "Shop collection",
                    link: "#"
                }
            }
        },
        {
            img: img5,
            info: {
                title: "Simple Style5",
                description: "From casual to formal, we've got you covered",
                btn: {
                    text: "Shop collection",
                    link: "#"
                }
            }
        },



    ];

    return (
        <div className='containerSliderLg bg'>
            <SwiperLGBackgroud >
                {elements.map((element, index) => (
                    <SwiperSlide key={index}>
                        <img src={element.img.src}
                            alt="img"
                            className="swiper-gl-image"
                        />
                        <div className="containerInfo" key={index}>
                            <div className="content center">
                                <h2>{element.info.title}</h2>
                                <p>{element.info.description}</p>
                                <BtnNormalBasic className="btnNormalBasic" >
                                    <A href={element.info.btn.link}>
                                        {element.info.btn.text}
                                        <Icon icon={<IoIosArrowForward />} />
                                    </A>
                                </BtnNormalBasic>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperLGBackgroud>
        </div>
    );
}

export default SliderBackground