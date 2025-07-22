'use client'
import React from 'react'
import AnimatedBackgroundWrapper from "@/components/OLD/wrapper/animated-background-wrapper"

interface pageProps {

}

interface LightControl {
    id: number
    x: number // Posición X en porcentaje (0-100)
    y: number // Posición Y en porcentaje (0-100)  
    intensity: number // Intensidad (0.1 - 2.0)
}

const page: React.FC<pageProps> = () => {

    const basicLights: LightControl[] = [
        { id: 1, x: 25, y: 30, intensity: 1.2 },
        { id: 2, x: 75, y: 30, intensity: 0.8 },
        { id: 3, x: 50, y: 70, intensity: 1.5 },
        { id: 4, x: 0, y: 30, intensity: 0.8 },
    ]

    return (
        <AnimatedBackgroundWrapper
            enableMouseInteraction={false}
            intensity='low'
            movingLights={false}
            initialLightControls={basicLights}
            showLightControls={true}

        >
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>hola mundo</h1>
            </div>
        </AnimatedBackgroundWrapper>
    );
}

export default page;