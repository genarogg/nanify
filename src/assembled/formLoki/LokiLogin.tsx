import React from 'react'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// import { RECAPTCHA_KEY } from "@env";

import ResetPassWord from './faces/ResetPass';
import Login from './faces/Login';

interface LokiLoginProps {

}

const LokiLogin: React.FC<LokiLoginProps> = () => {

    return (
        <div className={`container-form-loki initial`} id='containerFormLoki'>
            {/* <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}> */}
            <ResetPassWord />
            <Login />
            {/* </GoogleReCaptchaProvider> */}
        </div>
    );
}

export default LokiLogin;