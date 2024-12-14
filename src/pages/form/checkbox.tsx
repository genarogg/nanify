import React, { useRef } from 'react';
import { CheckBoxBasic } from '@nanify';

interface checkboxProps { }

const checkbox: React.FC<checkboxProps> = () => {
    const checkBoxRef = useRef<{ isChecked: boolean }>({ isChecked: false });

    const handleClick = () => {
        console.log(checkBoxRef.current.isChecked);
    };

    return (
        <>
            <h3>CheckBoxBasic</h3>
            <p>Componente CheckBoxBasic</p>
            <CheckBoxBasic ref={checkBoxRef} text="Accept Terms and Conditions" onClick={handleClick} />
            <p>{checkBoxRef.current.isChecked ? "Checked" : "Unchecked"}</p>
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
        </>
    );
};

export default checkbox;