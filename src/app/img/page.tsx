import React, {use} from 'react'
import Img from "@components/imgs/Img"
import imgLocak from "../../../public/bg-home.jpg"


interface imgProps {

}

const img: React.FC<imgProps> = () => {
    
    debugger

    return (<Img src="https://www.kupywrestlingwallpapers.info/wallpapers/2024/seth-rollins-vs-cm-punk-raw-netflix-wallpaper-4k.jpg" alt="demo" />);
}

export default img;