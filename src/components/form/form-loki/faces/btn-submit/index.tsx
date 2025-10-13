import React, { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v4';
import { print } from 'graphql';
import { RECAPTCHA_KEY, URL_BACKEND } from "@env";
import { notify } from "@/components/nano"
import { isStrongPassword, isValidEmail } from "@fn"
import "./btnSubmitBasic.css"
import { useNavigate as useRouter } from 'react-router-dom';

import { useAuthStore } from "@/context/AuthContext"

import {
  REGISTER_USUARIO,
  LOGIN_USUARIO,
  RESET_PASSWORD
} from "@/query"

interface BtnSubmitBasicProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  disable?: boolean;
  formData: any;
  context: string;
}

const BtnSubmitBasic = ({
  children,
  className = "",
  id = "",
  formData,
  context,
}: BtnSubmitBasicProps) => {

  const { setLogin } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();

  let rebootToken: string | null;
  let tokenCaptcha: string;
  let response: any;
  let data: any;
  let queriesConfig: any;
  const endpoint: string = URL_BACKEND + "/graphql"

  const handleSubmit = async () => {


    if (RECAPTCHA_KEY && executeRecaptcha) {
      tokenCaptcha = await executeRecaptcha("submit");
    }

    rebootToken = localStorage.getItem("reboot-token") || null;

    data = {
      ...formData.data.current,
    };

    console.log(data)

    if (context === "login") {
      queriesConfig = {
        query: LOGIN_USUARIO,
        variables: {
          email: data.email.toLowerCase(),
          password: data.passwordLogin,
          tokenCaptcha
        }
      }
    }

    if (context === "register") {
      queriesConfig = {
        query: REGISTER_USUARIO,
        variables: {
          name: data.name,
          email: data.email.toLowerCase(),
          password: data.password,
          tokenCaptcha
        }
      }
    }

    if (context === "recover-password") {
      queriesConfig = {
        query: RESET_PASSWORD,
        variables: {
          email: data.email.toLowerCase(),
        }
      }
    }

    if (context === "reboot-password") {
      queriesConfig = {
        query: null,
        variables: {
          password: data.password,
          confirmPassword: data.confirmPassword,
          tokenCaptcha,
          rebootToken
        }
      }
    }

    const dataPull = queriesConfig.variables

    try {
      // validaciones
      if (!dataPull.email && context !== "reboot-password") {
        notify({ type: "error", message: "El email es requerido" })
        return
      }

      if (!dataPull.password && context !== "recover-password") {
        notify({ type: "error", message: "La contraseña es requerida" })
        return
      }

      if (context === "register" || context === "reboot-password") {

        if (!data.confirmPassword) {
          notify({ type: "error", message: "La confirmación de la contraseña es requerida" })
          return
        }

        if (data.password !== data.confirmPassword) {
          notify({ type: "error", message: "Las contraseñas no coinciden" })
          return
        }

        if (!isStrongPassword(data.password)) {
          notify({ type: "warning", message: "La contraseña debe tener al menos 8 caracteres, incluir letras, números y al menos un símbolo" })
          return
        }
      }


      if (context === "register") {

        if (!isValidEmail(data.email)) {
          notify({ type: "error", message: "El email no es válido" })
          return
        }

        if (!data.name) {
          notify({ type: "error", message: "El nombre es requerido" })
          return
        }
      }

      console.log(queriesConfig)



      response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: print(queriesConfig.query),
          variables: queriesConfig.variables,
        }),
      });

      if (!response) {
        notify({ type: "error", message: "Error al enviar la solicitud" });
        return;
      }

      const responseData = await response.json();

      let dataContext;

      if (context === "login") {
        dataContext = responseData.data.loginUsuario
      }

      else if (context === "register") {
        dataContext = responseData.data.registerUsuario
      }

      else if (context === "recover-password") {
        dataContext = responseData.data.resetPassword
      }

      const { data: datos, type, message } = dataContext

      console.log(datos, type, message)

      if (type === "error") {
        notify({ type, message });
        return
      }

      notify({ type, message });

      if (context === "recover-password") {
        return
      }

      localStorage.setItem("token", datos.token)

      setLogin({
        token: datos.token,
        usuario: {
          nombre: datos.name,
          rol: datos.rol
        }
      })

      router("/");

    }
    catch (error) {
      console.error("Error en las validaciones", error)
    }
    finally {
      setLoading(false)
    }

  }

  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          handleSubmit();
        }}>
        {children}
      </button>
    </div>
  );
};

export default BtnSubmitBasic;