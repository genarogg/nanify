import React from 'react'
import Img from "@components/imgs/Img"
import imgLocal from "../../../public/bg-home.jpg"


interface imgProps { }

const img: React.FC<imgProps> = () => {

    const remote = "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D"

    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN48H9K03L3M6/rGmZ4MDDwM/jnm07bmzJ5VRoAqwgL1RTPjO0AAAAASUVORK5CYII="

    return (<>
        <Img type="remote" src={remote} alt="demo" id='demo' style={{ border: "1px solid red" }} />
        <Img type="remote" src={remote} alt="demo" id='demo' blurDataURL={base64} style={{ border: "1px solid red" }} />
    </>);
}

export default img;