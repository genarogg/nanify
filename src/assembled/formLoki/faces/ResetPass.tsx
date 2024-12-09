import React, { useRef, useState } from 'react'

import { Input,  BtnSubmitBasic } from '@components/Index';

import { BsEnvelopeFill } from 'react-icons/bs';

interface ResetPassWordProps {

}

const ResetPassWord: React.FC<ResetPassWordProps> = () => {
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

    return (
        <div className="reset left" id="reset">
            <div className="title">
                {/* <button
                    id="btnBack"
                    onClick={() => {
                        active();
                        cardState("front-active");
                    }}
                >
                    <Icono icono={<FaArrowLeft />} />
                </button> */}

                <p>Restablecer la contraseña</p>

                {/* <hr className="titleHr" /> */}
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
                    icon={<BsEnvelopeFill />}
                    onChange={handleChange}
                />

                <BtnSubmitBasic text='Recuperar cuenta' disable={loading} />

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