"use client";

import React from "react"



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"

import { EffectCoverflow, Autoplay } from "swiper/modules"
// Import Swiper styles
import "swiper/css"



interface TeamProps { }

const Team: React.FunctionComponent<TeamProps> = () => {


    return (
        <>
            <section className="containerTeam">
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 0,
                        depth: 500,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className="">
                            <img src="/bg-home.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="">
                            <img src="/bg-home.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="">
                            <img src="/bg-home.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>


            </section >
        </>
    )
}

export default Team
