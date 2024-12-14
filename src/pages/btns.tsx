import React, { useState } from 'react';

import {
    BtnSubmitBasic,
    BtnNormalBasic,
    BtnText,
    CheckBoxBasic
} from "nanify";

interface btsProps { }

const bts: React.FC<btsProps> = () => {

    const [isChecked, setIsChecked] = useState(false);
    
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    
    return (
        <>
            <h1>Documentación</h1>
            <p>Esta página documenta varios componentes y funciones utilizados en el proyecto.</p>

            <h2>Components</h2>

            <h3>BtnText</h3>
            <p>Componente BtnText</p>
            <BtnText text="Hola" onClick={() => { console.log("Hola") }} />
            <br />
            Uso del componente <code>{'<BtnText text="Hola" onClick={() => { console.log("Hola") }} />'}</code>
            <ul>
                <li className="prosp">El componente `BtnText` se utiliza para mostrar un botón con texto.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>text</strong>: El texto que se mostrará en el botón.</li>
                    <li><strong>onClick</strong>: Función que se ejecutará al hacer clic en el botón.</li>
                </ul>
            </ul>

            <h3>CheckBoxBasic</h3>
            <p>Componente CheckBoxBasic</p>
            {/* <CheckBoxBasic text="Accept Terms and Conditions" valueChange={handleValueChange} /> */}
            <p>{isChecked ? "Checked" : "Unchecked"}</p>
            <br />
            Uso del componente <code>{'<CheckBoxBasic text="Accept Terms and Conditions" valueChange={handleValueChange} />'}</code>
            <ul>
                <li className="prosp">El componente `CheckBoxBasic` se utiliza para mostrar una casilla de verificación.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>text</strong>: El texto que se mostrará junto a la casilla de verificación.</li>
                    <li><strong>valueChange</strong>: Función que se ejecutará al cambiar el estado de la casilla.</li>
                </ul>
            </ul>

           
            <h3>BtnSubmitBasic</h3>
            <p>Componente BtnSubmitBasic</p>
            <BtnSubmitBasic text="Submit" />
            <br />
            Uso del componente <code>{'<BtnSubmitBasic text="Submit" />'}</code>
            <ul>
                <li className="prosp">El componente `BtnSubmitBasic` se utiliza para mostrar un botón de envío.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>text</strong>: El texto que se mostrará en el botón.</li>
                </ul>
            </ul>

            <h3>BtnNormalBasic</h3>
            <p>Componente BtnNormalBasic</p>
            <BtnNormalBasic onClick={() => { console.log("Normal") }} >hola</BtnNormalBasic>
            <br />
            Uso del componente <code>{'<BtnNormalBasic onClick={() => { console.log("Normal") }} >hola</BtnNormalBasic>'}</code>
            <ul>
                <li className="prosp">El componente `BtnNormalBasic` se utiliza para mostrar un botón normal.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>onClick</strong>: Función que se ejecutará al hacer clic en el botón.</li>
                    <li><strong>children</strong>: Contenido del botón.</li>
                </ul>
            </ul>
        </>
    );
}

export default bts;