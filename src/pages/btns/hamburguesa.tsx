import React, { useState } from 'react'

import { BtnLoki, BtnFreya, BtnThor } from 'nanify';


interface hamburguesaProps { }

const hamburguesa: React.FC<hamburguesaProps> = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    return (
        <>
            <h3>BtnLoki</h3>
            <p>Componente BtnLoki</p>
            <BtnLoki isActive={isActive1} setIsActive={setIsActive1} />
            <br />
            Uso del componente <code>{'<BtnLoki isActive={isActive1} setIsActive={setIsActive1} />'}</code>
            <ul>
                <li className="prosp">El componente `BtnLoki` se utiliza para mostrar un botón de tipo Loki.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>isActive</strong>: Estado del botón.</li>
                    <li><strong>setIsActive</strong>: Función para cambiar el estado del botón.</li>
                </ul>
            </ul>

            <h3>BtnFreya</h3>
            <p>Componente BtnFreya</p>
            <BtnFreya isActive={isActive3} setIsActive={setIsActive3} />
            <br />
            Uso del componente <code>{'<BtnFreya isActive={isActive3} setIsActive={setIsActive3} />'}</code>
            <ul>
                <li className="prosp">El componente `BtnFreya` se utiliza para mostrar un botón de tipo Freya.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>isActive</strong>: Estado del botón.</li>
                    <li><strong>setIsActive</strong>: Función para cambiar el estado del botón.</li>
                </ul>
            </ul>

            <h3>BtnThor</h3>
            <p>Componente BtnThor</p>
            <BtnThor isActive={isActive2} setIsActive={setIsActive2} />
            <br />
            Uso del componente <code>{'<BtnThor isActive={isActive2} setIsActive={setIsActive2} />'}</code>
            <ul>
                <li className="prosp">El componente `BtnThor` se utiliza para mostrar un botón de tipo Thor.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>isActive</strong>: Estado del botón.</li>
                    <li><strong>setIsActive</strong>: Función para cambiar el estado del botón.</li>
                </ul>
            </ul>
        </>
    );
}

export default hamburguesa;