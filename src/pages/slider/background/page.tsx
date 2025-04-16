
"use client";

import SliderBackground from '@components/slider/swiper/sliderBackgroud';

// @ts-ignore
import img1 from "/img/wallpaper/demo-1.jpg";
// @ts-ignore
import img2 from "/img/wallpaper/demo-2.jpg";
// @ts-ignore
import img3 from "/img/wallpaper/demo-3.jpg";
// @ts-ignore
import img4 from "/img/wallpaper/demo-4.jpg";
// @ts-ignore
import img5 from "/img/wallpaper/demo-5.jpg";
// @ts-ignore
import img6 from "/img/wallpaper/demo-6.jpg";
// @ts-ignore
import img7 from "/img/wallpaper/demo-7.jpg";
// @ts-ignore
import img8 from "/img/wallpaper/demo-8.jpg";
// @ts-ignore
import img9 from "/img/wallpaper/demo-9.jpg";
// @ts-ignore
import img10 from "/img/wallpaper/demo-10.jpg";
// @ts-ignore
import img11 from "/img/wallpaper/demo-11.jpg";
// @ts-ignore
import img12 from "/img/wallpaper/demo-12.jpg";
// @ts-ignore
import img13 from "/img/wallpaper/demo-13.jpg";
// @ts-ignore
import img14 from "/img/wallpaper/demo-14.jpg";
// @ts-ignore
import img15 from "/img/wallpaper/demo-15.jpg";



const swiper = () => {

    const data = [
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
                title: "Simple Style",
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
                title: "Simple Style2",
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
                title: "Simple Style2",
                description: "From casual to formal, we've got you covered",
                btn: {
                    text: "Shop collection",
                    link: "#"
                }
            }
        },
        {
            img: img6,
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
            img: img7,
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
            img: img8,
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
            img: img9,
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
            img: img10,
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
            img: img11,
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
            img: img12,
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
            img: img13,
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
            img: img14,
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
            img: img15,
            info: {
                title: "Simple Style2",
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