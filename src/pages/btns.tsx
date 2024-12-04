import React, { useState } from 'react'

import {
    BtnLoki,
    BtnFreya,
    BtnThor,

    BtnSubmitBasic,
    BtnNormalBasic,
    BtnText,

    CheckBoxBasic
} from "nanify"

interface btsProps {

}

const bts: React.FC<btsProps> = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const [isActive, setIsActive] = useState(false);

    return (<>

        <BtnText text="Hola" onClick={() => { console.log("Hola") }} />
        <h1>Checkbox Example</h1>

        <CheckBoxBasic text="Accept Terms and Conditions" valueChange={handleValueChange} />
        <p>{isChecked ? "Checked" : "Unchecked"}</p>

        <h1>Button Hamburguesa</h1>
        BtnLoki <BtnLoki isActive={isActive} setIsActive={setIsActive} />
        BtnFreya <BtnFreya isActive={isActive} setIsActive={setIsActive} />
        BtnThor <BtnThor isActive={isActive} setIsActive={setIsActive} />


        <h1>Button Submit</h1>
        <BtnSubmitBasic text="Submit" />

        <h1>BtnNormalBasic</h1>
        <BtnNormalBasic onClick={() => { console.log("Normal") }} >hola</BtnNormalBasic>


    </>);
}

export default bts;