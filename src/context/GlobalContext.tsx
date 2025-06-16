"use client"

import React, { createContext, useContext, useState, type ReactNode, useCallback } from "react"

// Define la interfaz para el contexto global
interface GlobalContextType {
  secondTitle: string
  setSecondTitle: (title: string) => void
}

// Crea el contexto
const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

// Define las props para el proveedor
interface GlobalProviderProps {
  children: ReactNode
}

// Crea el proveedor del contexto global
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [secondTitle, setSecondTitle] = useState("Título Secundario Global")

  // Asegúrate de que setSecondTitle sea estable si se pasa directamente
  const handleSetSecondTitle = useCallback((title: string) => {
    setSecondTitle(title);
  }, []);

  const contextValue = {
    secondTitle,
    setSecondTitle: handleSetSecondTitle,
  }

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

// Hook personalizado para usar el contexto global
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider")
  }
  return context
} 