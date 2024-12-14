import React, { useRef, useState } from 'react'
import { Input, CheckBoxBasic, BtnSubmitBasic, BtnText } from 'nanify';

import { BsFillEnvelopeHeartFill } from 'react-icons/bs';
import { MdLock } from "react-icons/md";

import { $ } from "@fn";
import HeadBtn from "./global/HeadBtn";

interface LoginProps {
    cardState: (css: string) => void;
}

const Login: React.FC<LoginProps> = ({ cardState }) => {

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

    const active = () => {
        $("btnBack")?.classList.add("active");

        const register = $("register");

        if (register) {
            register.style.display = "none";
        }

        const reset = $("reset");

        if (reset) {
            reset.style.display = "flex";
        }
    };

    return (
        <>
            <div className="login front">
                <HeadBtn cardState={cardState} register={false}/>
                <form onSubmit={handleSubmit} >
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        icon={<BsFillEnvelopeHeartFill />}
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

                    <BtnSubmitBasic text='Acceder' disable={loading} onClick={(() => setLoading(true))} />

                    <BtnText text='¿Olvidaste tu contraseña?' onClick={() => {
                        active();
                        cardState("left-active");
                    }} />

                </form>
            </div>
        </>
    );
}

export default Login;