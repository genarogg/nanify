import React from 'react'
import Img from "@components/imgs/Img"
import imgLocal from "../../../public/bg-home.jpg"
import Image from 'next/image'

interface imgProps { }

const img: React.FC<imgProps> = () => {

    const remote = "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D"

    

    return (<>
    <Img src={remote} alt="demo" id='demo'  />
    
    </>);
}

export default img;