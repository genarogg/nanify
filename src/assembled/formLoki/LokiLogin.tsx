import React from 'react'
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// import { RECAPTCHA_KEY } from "@env";

import ResetPassWord from './faces/ResetPassWord';
import Login from './faces/Login';
import Register from './faces/Register';

interface LokiLoginProps {

}

const LokiLogin: React.FC<LokiLoginProps> = () => {

    return (
        <div className={`container-form-loki initial`} id='containerFormLoki'>
            {/* <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}> */}
            <ResetPassWord />
            <Login />
            <Register />
            {/* </GoogleReCaptchaProvider> */}
        </div>
    );
}

export default LokiLogin;