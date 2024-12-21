import React from 'react'
import Img from "@components/imgs/Img"
import imgLocal from "../../../public/bg-home.jpg"
import Image from 'next/image'

interface imgProps { }

const img: React.FC<imgProps> = () => {

    const remote = "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"

    

    return (<>
    <Img src={remote} alt="demo" id='demo'  />
    
    </>);
}

export default img;