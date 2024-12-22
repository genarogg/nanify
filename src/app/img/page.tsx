import React from 'react'
import Img from "@components/imgs/Img"
import imgLocal from "../../../public/bg-home.jpg"


interface imgProps { }

const img: React.FC<imgProps> = () => {

    const remote = "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D"

    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN48H9K03L3M6/rGmZ4MDDwM/jnm07bmzJ5VRoAqwgL1RTPjO0AAAAASUVORK5CYII="

    const width = 1920 / 3;
    const height = 1080 / 3;

    return (
        <>
            <h1>remote</h1>
            <div className="" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1>NO / blurDataURL</h1>
                    <Img type="remote" src={remote} alt="demo" id='demo' style={{ border: "1px solid red" }} width={width} height={height} />
                </div>
                <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1>SI / blurDataURL</h1>
                    <Img type="remote" src={remote} alt="demo" id='demo2' blurDataURL={base64} style={{ border: "1px solid red" }} width={width} height={height} />
                </div>
            </div>
            <h1>local</h1>
            <div className="" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1>normal</h1>
                    <Img type="local" src={imgLocal} alt="demo" id='demo' style={{ border: "1px solid red" }} width={width} height={height} />
                </div>
                <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1>background</h1>
                    <Img type="bg" src={imgLocal} alt="demo" id='dedasmo' style={{ border: "1px solid red", display: "flex", justifyContent: "center",  alignItems: "center" }} width={width} height={height} >
                        <h1>hola</h1>
                    </Img>
                </div>
            </div>
        </>
    );
}

export default img;