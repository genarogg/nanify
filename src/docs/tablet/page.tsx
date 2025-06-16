'use client'

import React, { useState } from 'react'
import Tablet from '@components/tablet'

interface pageProps { }

const page: React.FC<pageProps> = () => {
    // Solo necesitas estos estados si quieres controlar los filtros externamente
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("todos")

    // Callbacks personalizados opcionales
    const handleAddUser = () => {
        console.log("Agregando nuevo usuario...")
        // Lógica personalizada
    }

    const handleEditUser = (user: any) => {
        console.log("Editando usuario:", user)
        // Lógica personalizada
    }

    const handleViewUser = (user: any) => {
        console.log("Viendo usuario:", user)
        // Lógica personalizada
    }

    const handleDeleteUser = (user: any) => {
        console.log("Eliminando usuario:", user)
        // Lógica personalizada
    }

    return (
        <main style={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>

            {/* Ejemplo 1: Uso básico - sin props */}
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla Básica (sin configuración)</h2>
                <Tablet />
            </div>

            {/* Ejemplo 2: Con título personalizado */}
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con Título Personalizado</h2>
                <Tablet

                />
            </div>

            {/* Ejemplo 3: Con callbacks personalizados */}
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con Callbacks Personalizados</h2>
                <Tablet

                />
            </div>

            {/* Ejemplo 4: Con datos iniciales personalizados */}
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con Datos Personalizados</h2>
                <Tablet

                />
            </div>

            {/* Ejemplo 5: Con API (si tienes una) */}
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con API</h2>
                <Tablet

                />
            </div>

            {/* Ejemplo 6: Configuración mínima */}
            <div>
                <h2 style={{ marginBottom: "20px" }}>Tabla Solo con Título</h2>
                <Tablet />
            </div>
        </main>
    );
}

export default page;