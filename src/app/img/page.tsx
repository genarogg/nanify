import React from 'react'
import Img from "@components/imgs/Img"
import imgLocak from "../../../public/bg-home.jpg"

interface imgProps {

}

const img: React.FC<imgProps> = () => {
    return (<Img src={imgLocak} alt="demo" />);
}

export default img;