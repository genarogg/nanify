'use client'
import React from 'react'
import { Img } from "@nano"

import imgBg from "@public/bg-home.jpg"
import LokiLogin from '@components/form/formLoki/LokiLogin';

import "./sass/_authBasico.scss"

interface AuthOutRegisterProps {

}

const AuthOutRegister: React.FC<AuthOutRegisterProps> = () => {
    return (
        <div className="container-authOutRegister">
            <Img type="bg" src={imgBg} alt='bg-home' width={"100%"} id="container-authOutRegister-165" height={"100vh"}>
                <div className="container-form">
                    <LokiLogin  register={false}/>
                </div>
            </Img>
        </div>
    );
}

export default AuthOutRegister;