'use client'
import React from 'react'
import MentorBasico from '@components/mentor/basico/MentorBasico'
interface menorBasicoProps {

}

const menorBasico: React.FC<menorBasicoProps> = () => {
    return (
        <>
            <MentorBasico />
            <MentorBasico reverse={true} />
        </>
    );
}

export default menorBasico;