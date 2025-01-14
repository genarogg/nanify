"use client";

import React, { useRef } from 'react';
import { CheckBoxBasic } from '@nano';

interface checkboxProps {}

const checkbox: React.FC<checkboxProps> = () => {
  const checkBoxRef = useRef<{ isChecked: boolean }>({ isChecked: false });

  return (
    <>
      <h3>CheckBoxBasic</h3>
      <p>Componente CheckBoxBasic</p>
      <CheckBoxBasic ref={checkBoxRef} text="Accept Terms and Conditions" />
      <p>{checkBoxRef.current.isChecked ? "Checked" : "Unchecked"}</p>
      <br />
      <h4>Uso del componente</h4>
      <code>{'{`useRef<{ isChecked: boolean }>({ isChecked: false })`}'}</code>
      <ul>
        <li className="prosp">El componente `CheckBoxBasic` se utiliza para mostrar una casilla de verificación.</li>
        <li className="prosp">Props:</li>
        <ul>
          <li><strong>text</strong>: El texto que se mostrará junto a la casilla de verificación.</li>
          <li><strong>ref</strong>: <code></code></li>
          <li><strong>onClick</strong>: Función que se ejecutará al hacer clic en la casilla de verificación.</li>
        </ul>
      </ul>
    </>
  );
};

export default checkbox;