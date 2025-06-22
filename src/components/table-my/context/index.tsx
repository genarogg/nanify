import useConfigured from "./useConfigured";
import { useGlobalContext } from "./Global";

const inicializarContext = () => {
    useConfigured()
}

export {
    inicializarContext,
    useGlobalContext
}