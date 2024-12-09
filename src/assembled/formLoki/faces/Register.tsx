import React, { useState, useRef } from 'react'
import { Input, BtnSubmitBasic } from 'nanify';
import { BsFillEnvelopeHeartFill, BsPersonFill } from 'react-icons/bs';
import { MdLock } from 'react-icons/md';
import { IoMdUnlock } from "react-icons/io";

import HeadBtn from "./global/HeadBtn";

interface RegisterProps {
    cardState: (css: string) => void;
}

const Register: React.FC<RegisterProps> = ({ cardState }) => {
    const inputRef = useRef({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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

    return (

        <div className="register right" id="register">
            <HeadBtn cardState={cardState} />
            <form onSubmit={(e) => { e.preventDefault() }}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    icon={<BsPersonFill />}
                    onChange={handleChange}
                />

                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    icon={<BsFillEnvelopeHeartFill />}
                    onChange={handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    icon={<IoMdUnlock />}
                    onChange={handleChange}
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    icon={<MdLock />}
                    onChange={handleChange}
                />

                <BtnSubmitBasic text='Registrarse' disable={loading} onClick={(() => setLoading(true))}  />

                <div className="text-recovery">
                    <span>
                        Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Register;