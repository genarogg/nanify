'use client'
import React from 'react'
import MentorBasico from '@components/mentor/basico/MentorBasico'
import imgDemo from "@public/bg-home.jpg"

interface menorBasicoProps {

}

const menorBasico: React.FC<menorBasicoProps> = () => {

    const data = [
        { src: imgDemo, id: 'img1', alt: 'Descripción de la imagen 1', width: 600, height: 600, href: '/ruta1' },
        { src: imgDemo, id: 'de5mcoaf', alt: 'imagen de fondo', width: 600, height: 600, href: '/' },
        { src: imgDemo, id: 'dae5moaf', alt: 'imagen de fondo', width: 160, height: 190, href: '/' },
        { src: imgDemo, id: 'daexZ5moaf', alt: 'imagen de fondo', width: 160, height: 190, href: '/' },
        { src: imgDemo, id: 'de5mowaf', alt: 'imagen de fondo', width: 600, height: 600, href: '/' }
    ];

    const data2 = [
        { src: imgDemo, id: 'imsfg1', alt: 'Descripción de la imagen 1', width: 600, height: 600, href: '/ruta1' },
        { src: imgDemo, id: 'de5msdfcoaf', alt: 'imagen de fondo', width: 600, height: 600, href: '/' },
        { src: imgDemo, id: 'dasfde5moaf', alt: 'imagen de fondo', width: 160, height: 190, href: '/' },
        { src: imgDemo, id: 'dasfdexZ5moaf', alt: 'imagen de fondo', width: 160, height: 190, href: '/' },
        { src: imgDemo, id: 'de5mowsfdaf', alt: 'imagen de fondo', width: 600, height: 600, href: '/' }
    ];

    return (
        <div className='mentor-basico' style={{ margin: "0 auto", display: "grid", gap: "1rem" }} >
            <MentorBasico data={data} />
            <MentorBasico reverse={true} data={data2} />
        </div>
    );
}

export default menorBasico;