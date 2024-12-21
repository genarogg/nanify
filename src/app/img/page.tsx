import React from 'react'
import Img from "@components/imgs/Img"
import imgLocal from "../../../public/bg-home.jpg"

interface imgProps { }

const img: React.FC<imgProps> = () => {

    const remote = "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"

    

    return (<>
    <Img src={imgLocal} alt="demo" id='demo'  />
    <Img src={remote} alt="demod" id='demos'  />
    </>);
}

export default img;