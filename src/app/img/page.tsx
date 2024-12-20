import React from 'react'
import Img from "@components/imgs/Img"
import imgLocal from "../../../public/bg-home.jpg"

interface imgProps { }

const img: React.FC<imgProps> = () => {

    const remote = "https://img.freepik.com/foto-gratis/mujer-sonriente-hablando-telefono-plano-medio_23-2149476757.jpg?t=st=1734735651~exp=1734739251~hmac=13889539c18762559e49b1fb79e6ad3074c095cff611ff4224429e187744d626&w=1380"

    

    return (<Img src={remote} alt="d emo"  />);
}

export default img;