import React from 'react'
import Local from "@components/imgs/Local"
import imgLocak from "../../../public/bg-home.jpg"

interface localProps {

}

const local: React.FC<localProps> = () => {
    return (<><Local src={imgLocak} alt="demo" /></>);
}

export default local;