'use client'
import React, { useState } from 'react'
import Tablet from '@components/tablet';

interface pageProps {}

const page: React.FC<pageProps> = () => {
    // Estados para filtros adicionales
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("todos")

    const statusOptions = [
        { value: "todos", label: "Todos" },
        { value: "admin_dace", label: "Admin DACE" },
        { value: "admin_fundesur", label: "Admin FUNDESUR" },
        { value: "super_usuario", label: "Super Usuario" },
    ]


    return (
        <main style={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con modo automático responsive (768px breakpoint)</h2>
                <Tablet
                    title="Gestión de Usuarios - Auto Responsive"
                    
                    autoResponsive={true}
                    breakpoint={768}
                    config={{ cuadricula: true }}
                />
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con breakpoint personalizado (1024px)</h2>
                <Tablet
                    config={{ cuadricula: true }}
                    title="Gestión de Trámites - Breakpoint 1024px"
                    searchPlaceholder="Buscar trámites..."
               
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    onDateFromChange={setDateFrom}
                    onDateToChange={setDateTo}
                    showStatusFilter={true}
                    statusOptions={statusOptions}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    addButtonText="Nuevo Trámite"
                    
                    autoResponsive={true}
                    breakpoint={1024}
                />
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla sin modo automático (control manual)</h2>
                <Tablet
                    config={{ select: false }}
                    title="Vista Manual"
                    showAutoToggle={false}
                    autoResponsive={false}
                    defaultViewMode="cards"
                    
                />
            </div>

            <div>
                <h2 style={{ marginBottom: "20px" }}>Tabla solo con toggle manual (sin auto)</h2>
                <Tablet
                    title="Control Manual Completo"
                    autoResponsive={false}
                    showAutoToggle={false}
                    
                />
            </div>
        </main>
    );
}

export default page;