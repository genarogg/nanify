import useConfigured from "./useConfigured";
import useData from "./data/useData";
import { useGlobalZustand } from "./Global";

const inicializarContext = () => {
    
    useConfigured()
}

export {
    inicializarContext,
    useGlobalZustand,
    useData
}