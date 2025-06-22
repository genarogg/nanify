'use client'
import React from 'react'
import { useGlobalContext } from "../context";


interface HolaMundoProps {

}

const HolaMundo: React.FC<HolaMundoProps> = () => {
    const { configured } = useGlobalContext();


    console.log("HolaMundo", configured);

    return (
        <p>hola</p>
    );
}

export default HolaMundo;