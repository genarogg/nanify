import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    context: string;
    setContext: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType>({
    context: 'demo1',
    setContext: () => { },
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [context, setContext] = useState<string>('demo1');
    return (
        <AppContext.Provider value={{ context, setContext }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
