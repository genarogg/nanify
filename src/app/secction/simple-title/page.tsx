import React from 'react'
import TitleSection from '@components/sections/simpleTitle/SimpleTitle';

interface titleSecctionProps {

}

const titleSecction: React.FC<titleSecctionProps> = () => {
    return (
        <>
            <TitleSection titulo='Hola Mundo!' />
        </>
    );
}

export default titleSecction;