'use client'
import React from 'react'
import ParticleWrapper from "@/components/OLD/wrapper/ParticleWrapper"
import "./styles.css"

interface pageProps {

}

const page: React.FC<pageProps> = () => {
    return (
        <>
            <div className="particle-container">
                <ParticleWrapper
                    particleCount={20}
                    particleColors={["#87CEEB", "#FFB6C1", "#ADD8E6", "#F8BBD9", "#B0E0E6", "#DDA0DD"]}
                    particleSize={0.5}
                    animationSpeed={0.3}
                    flowDirection="leftToRight"
                >
                    <div className="content-wrapper">
                        <h1 className="title">Bienvenido a la Página de Partículas</h1>
                    </div>
                </ParticleWrapper>
            </div>
        </>
    );
}

export default page;