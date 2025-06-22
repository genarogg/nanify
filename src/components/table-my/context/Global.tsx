import React, { createContext, useContext, useState } from "react";


/** como funcionan los context en react
* con el GlobalProvider podemos envolver nuestra aplicacion y proveer un contexto global
* en el GlobalContext definimos los valores que queremos compartir
* useGlobalContext es un hook que nos permite acceder a los valores del contexto
*/

interface GlobalContextProps {
    configured: any;
    setConfigured: any;
    dataTablet: any,
    setDataTablet: any;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [configured, setConfigured] = useState<any>();
    const [dataTablet, setDataTablet] = useState<any[]>([]);
    

    const value: GlobalContextProps = {
        configured,
        setConfigured,
        dataTablet,
        setDataTablet
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext debe usarse dentro de un GlobalProvider");
    }
    return context;
};

export {
    GlobalProvider,
    useGlobalContext,
    
}
