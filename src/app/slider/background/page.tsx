"use client";
import React from 'react';
import SliderBackground from '@components/swiper/sliderBackgroud/SliderBackgroud';

import img1 from "@public/swiper/01.jpg";
import img2 from "@public/swiper/02.jpg";
import img3 from "@public/swiper/03.jpg";
import img4 from "@public/swiper/04.jpg";
import img5 from "@public/swiper/05.jpg";

const swiper = () => {

    const data = [
        {
            img: img1.src,
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
            img: img2.src,
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
            img: img3.src,
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
            img: img4.src,
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
            img: img5.src,
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
        <SliderBackground data={data} />
    );
}

export default swiper