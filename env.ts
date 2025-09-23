const DEBUG = false

const BACKEND_DEV = "DEV"
const BACKEND_PROD = "PROD"

const FRONTEND_DEV = "http://localhost:3000"
const FRONTEND_PROD = "PROD"

/* GOOGLE */
const RECAPTCHA_KEY = "6LfVlLUqAAAAAHSxM5KYvmr--NOupZdKFu-JYIwf"

// saber si estoy en produccion
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

const URL_BACKEND = isProd ? BACKEND_PROD : BACKEND_DEV;
const URL_FRONTEND = isProd ? FRONTEND_PROD : FRONTEND_DEV;

export {
    isProd,
    DEBUG,
    URL_BACKEND,
    URL_FRONTEND,
    RECAPTCHA_KEY
};