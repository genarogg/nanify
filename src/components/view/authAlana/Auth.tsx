"use client";
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import LokiLogin from '@components/form/formLoki/LokiLogin';
import SwiperLGBackgroud from '@components/swiper/estructura/SwiperLGBackgroud';

import img1 from "@public/authAlana/fashion1.png";
import img2 from "@public/authAlana/fashion2.png";
import img3 from "@public/authAlana/fashion3.png";

// import img1 from "@public/swiper/01.jpg";
// import img2 from "@public/swiper/02.jpg";
// import img3 from "@public/swiper/03.jpg";

interface AuthProps {

}

const Auth: React.FC<AuthProps> = () => {

    const data = [
        {
            img: img1.src,

        },
        {
            img: img2.src,

        },
        {
            img: img3.src,

        },
    ];

    return (
        <>
            <div className="auth-loki">
                <div className="container-form">
                    <LokiLogin />
                </div>

                <div className="container-slider">
                    <SwiperLGBackgroud effect='wind'>
                        {data.map((element: any, index: any) => (
                            <SwiperSlide key={index}>
                                <img src={element.img}
                                    alt="img"
                                    className="swiper-gl-image"
                                />

                            </SwiperSlide>
                        ))}
                    </SwiperLGBackgroud>
                </div>
            </div>
        </>
    );
}

export default Auth;