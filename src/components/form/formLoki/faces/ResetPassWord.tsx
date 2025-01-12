import React, { useRef, useState } from 'react'
import "./sass/_resetPassword.scss"

import { $ } from "@fn/index";
import { Input } from 'nanify';

import BtnSubmitBasic from '@components/btns/basic/btnSubmitBasic';
import BtnRowCircle from "@components/btns/animate/btnRowCircle";

import { BsFillEnvelopeHeartFill } from 'react-icons/bs';


interface ResetPassWordProps {
    cardState: (css: string) => void;
}

const ResetPassWord: React.FC<ResetPassWordProps> = ({ cardState }) => {
    const inputRef = useRef({
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current);
    };

    const active = () => {
        setTimeout(() => {
            $("btnBack")?.classList.remove("active");

            const register = $("register");

            if (register) {
                register.style.display = "flex";
            }

            const reset = $("reset");

            if (reset) {
                reset.style.display = "none";
            }
        }, 600);
    };


    return (
        <div className="reset left" id="reset">
            <div className="title">
                <BtnRowCircle id="btnBack" onClick={() => {
                    active();
                    cardState("front-active");
                }} />

                <p>Restablecer la contraseña</p>

                <hr className="titleHr" />
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    icon={<BsFillEnvelopeHeartFill />}
                    onChange={handleChange}
                />

                <BtnSubmitBasic disable={loading} onClick={(() => setLoading(true))} >
                    Recuperar cuenta
                </BtnSubmitBasic>

                <div className="text-recovery">
                    <span>
                        Ingrese el correo con el que se registro, Y se Te enviará un enlace
                        con el que podrá restablecer su contraseña.
                    </span>
                </div>
            </form>
        </div>
    );
}

export default ResetPassWord;