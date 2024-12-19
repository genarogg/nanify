import React from 'react'
import Img from "@components/imgs/Img"
import imgLocak from "../../../public/bg-home.jpg"

interface localProps {

}

const local: React.FC<localProps> = () => {
    return (<><Img src={imgLocak} alt="demo" /></>);
}

export default local;