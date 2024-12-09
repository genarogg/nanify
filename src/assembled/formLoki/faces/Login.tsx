import React, { useRef, useState } from 'react'

import { Input, CheckBoxBasic, BtnSubmitBasic, BtnText } from 'nanify';

import { BsEnvelopeFill } from 'react-icons/bs';
import { MdLock } from "react-icons/md";

interface LoginProps { }

const Login: React.FC<LoginProps> = () => {

    const inputRef = useRef({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const [isChecked, setIsChecked] = useState(false);
    const toogleChecked = () => {
        setIsChecked(!isChecked);
    }

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current);
    };

    return (
        <>
            <div className="login front">
                {/* <HeadBtn cardState={cardState} /> */}
                <form onSubmit={handleSubmit} >
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        icon={<BsEnvelopeFill />}
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        name="passwordLogin"
                        placeholder={"Contraseña"}
                        icon={<MdLock />}
                        onChange={handleChange}
                    />

                    <CheckBoxBasic
                        text="Mantener sesión"
                        onClick={toogleChecked}
                    />

                    <BtnSubmitBasic text='Acceder' disable={loading} />


                    <BtnText text='¿Olvidaste tu contraseña?' onClick={() => {
                        // changeFace("left-active");
                    }} />

                </form>
            </div>
        </>
    );
}

export default Login;