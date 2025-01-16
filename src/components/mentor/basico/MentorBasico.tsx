'use client'
import React from 'react'
import { Img, A } from "@nano"
import imgDemo from "@public/bg-home.jpg"
import "./sass/_mentorBasico.scss"

interface MentorBasicoProps {
    reverse?: boolean
}

const MentorBasico: React.FC<MentorBasicoProps> = ({ reverse = false }) => {
    const MentorElement = ({ src, id, alt, width, height, href }: any) => {
        return (
            <A href={href}>
                <Img type='bg' className='content' src={src} id={id} alt={alt} width={width} height={height} >
                    <div className="link">
                        link
                    </div>
                </Img>
            </A>
        )
    }

    const primerElemento = { src: imgDemo, id: 'img1', alt: 'Descripción de la imagen 1', width: 600, height: 600, href: '/ruta1' };
    const segundoElemento = { src: imgDemo, id: 'de5mcoaf', alt: 'imagen de fondo', width: 600, height: 600, href: '/' };
    const tercerElemento = { src: imgDemo, id: 'dae5moaf', alt: 'imagen de fondo', width: 160, height: 190, href: '/' };
    const cuartoElemento = { src: imgDemo, id: 'daexZ5moaf', alt: 'imagen de fondo', width: 160, height: 190, href: '/' };
    const quintoElemento = { src: imgDemo, id: 'de5mowaf', alt: 'imagen de fondo', width: 600, height: 600, href: '/' };



    return (
        <div className={`bentor-container ${reverse ? 'reverse' : ''}`} >
            <div className="primer-elemento-container box" >
                <MentorElement
                    src={primerElemento.src}
                    id={primerElemento.id}
                    alt={primerElemento.alt}
                    width={primerElemento.width}
                    height={primerElemento.height}
                    href={primerElemento.href}

                />
            </div>
            <div className="segundo-elemento-container">
                <div className="segundo-primero-elemento">
                    <div className="segundo-primero-elemento-1  box">
                        <MentorElement
                            src={segundoElemento.src}
                            id={segundoElemento.id}
                            alt={segundoElemento.alt}
                            width={segundoElemento.width}
                            height={segundoElemento.height}
                            href={segundoElemento.href}
                        />
                    </div>
                    <div className="segundo-segundo-elemento-2">
                        <div className="segundo-elemento-2-1  box">
                            <MentorElement
                                src={tercerElemento.src}
                                id={tercerElemento.id}
                                alt={tercerElemento.alt}
                                width={tercerElemento.width}
                                height={tercerElemento.height}
                                href={tercerElemento.href}
                            />
                        </div>
                        <div className="segundo-elemento-2-2  box">
                            <MentorElement
                                src={cuartoElemento.src}
                                id={cuartoElemento.id}
                                alt={cuartoElemento.alt}
                                width={cuartoElemento.width}
                                height={cuartoElemento.height}
                                href={cuartoElemento.href}
                            />
                        </div>
                    </div>
                </div>
                <div className="segundo-segundo-elemento  box">
                    <MentorElement
                        src={quintoElemento.src}
                        id={quintoElemento.id}
                        alt={quintoElemento.alt}
                        width={quintoElemento.width}
                        height={quintoElemento.height}
                        href={quintoElemento.href}
                    />
                </div>
            </div>
        </div >
    );
}

export default MentorBasico;