"use client";

import React from 'react';
import { Swiper } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade, Autoplay } from 'swiper/modules';

/* lib */
// @ts-ignore
import SwiperGL from './lib/swiper-gl.esm.js';
import "./lib/swiper-gl.css";

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/effect-fade';

import SwiperLGProps from './SwiperProps.js';

const getContent = (slide: Element | null) => ({
    containerInfo: slide?.querySelector('.containerInfo') as HTMLElement | null,
    content: slide?.querySelector('.content') as HTMLElement | null,
});

/* Oculta el texto del slide que SALE */
const hideContent = (swiper: any) => {
    const previousSlide = swiper.slides[swiper.previousIndex];
    const { containerInfo, content } = getContent(previousSlide);

    if (containerInfo) {
        containerInfo.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        containerInfo.style.opacity = '0';
        // containerInfo.style.transform = 'translateY(-20px)';
    }
    if (content) {
        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        content.style.opacity = '0';
        // content.style.transform = 'translateY(-16px)';
    }
};

/* Muestra el texto del slide que ENTRA */
const showContent = (swiper: any) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const { containerInfo, content } = getContent(activeSlide);

    if (containerInfo) {
        containerInfo.style.transition = 'none';
        containerInfo.style.opacity = '0';
        containerInfo.style.transform = 'translateY(-20px)';
        void containerInfo.offsetHeight;

        containerInfo.style.transition = 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        containerInfo.style.opacity = '1';
        containerInfo.style.transform = 'translateY(0)';
    }

    if (content) {
        content.style.transition = 'none';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-16px)';
        void content.offsetHeight;

        setTimeout(() => {
            content.style.transition = 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 200);
    }
};

const SwiperLGBackgroud: React.FC<SwiperLGProps> = ({
    children,
    effect = "random",
    height = "100dvh",
    autoplay = {
        delay: 3000,
        disableOnInteraction: false,
    }
}) => {
    return (
        <div className='containerSlider'>
            <Swiper
                style={{ height: height }}
                effect="gl"
                onBeforeInit={(swiper: any) => {
                    swiper.params.gl.shader = effect;
                }}
                onSwiper={(swiper: any) => {
                    showContent(swiper);
                }}
                onSlideChangeTransitionStart={(swiper: any) => {
                    hideContent(swiper); // oculta el que SALE con previousIndex
                }}
                onSlideChangeTransitionEnd={(swiper: any) => {
                    showContent(swiper); // muestra el que ENTRÓ con activeIndex
                }}
                direction={'horizontal'}
                speed={3000}
                autoplay={autoplay}
                loop={true}
                spaceBetween={0}
                touchReleaseOnEdges={true}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, EffectFade, Pagination, SwiperGL, Autoplay]}
                className="mySwiper"
            >
                {children}
            </Swiper>
        </div>
    );
}

export default SwiperLGBackgroud;