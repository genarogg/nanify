'use client'
import React, { useState } from 'react'
import Tablet from '@components/tablet';

import { useTable } from "@components/tablet/useTable";


interface pageProps {

}

const page: React.FC<pageProps> = () => {

    const tableState = useTable()

    // Estados para filtros adicionales
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("todos")

    const handleSelectUser = (user: any) => {
        console.log("Usuario seleccionado:", user)
        console.log("Usuarios seleccionados:", tableState.getSelectedUsers())
    }

    const statusOptions = [
        { value: "todos", label: "Todos" },
        { value: "admin_dace", label: "Admin DACE" },
        { value: "admin_fundesur", label: "Admin FUNDESUR" },
        { value: "super_usuario", label: "Super Usuario" },
    ]

    return (
        <main style={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
            <div style={{ marginBottom: "20px", padding: "16px", backgroundColor: "white", borderRadius: "8px" }}>
                <h3>Estado de la tabla:</h3>
                <p>Total de usuarios: {tableState.totalUsers}</p>
                <p>Usuarios filtrados: {tableState.filteredCount}</p>
                <p>Usuarios seleccionados: {tableState.selectedCount}</p>
                <p>Página actual: {tableState.currentPage}</p>
                <p>Término de búsqueda: "{tableState.searchTerm}"</p>

                <div style={{ marginTop: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <button
                        onClick={() => tableState.clearSearch()}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#f3f4f6",
                            border: "1px solid #d1d5db",
                            borderRadius: "4px",
                        }}
                    >
                        Limpiar búsqueda
                    </button>
                    <button
                        onClick={() => tableState.clearSelection()}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#f3f4f6",
                            border: "1px solid #d1d5db",
                            borderRadius: "4px",
                        }}
                    >
                        Limpiar selección
                    </button>
                    <button
                        onClick={() => tableState.selectAllUsers()}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#f3f4f6",
                            border: "1px solid #d1d5db",
                            borderRadius: "4px",
                        }}
                    >
                        Seleccionar todos
                    </button>
                    <button
                        onClick={() => tableState.deleteSelectedUsers()}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#ef4444",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                        }}
                        disabled={tableState.selectedCount === 0}
                    >
                        Eliminar seleccionados
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con modo automático responsive (768px breakpoint)</h2>
                <Tablet
                    tableState={tableState}
                    title="Gestión de Usuarios - Auto Responsive"
                    onSelectUser={handleSelectUser}
                    autoResponsive={true}
                    breakpoint={768}
                />
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "20px" }}>Tabla con breakpoint personalizado (1024px)</h2>
                <Tablet
                    config={{ cuadricula: true }}
                    title="Gestión de Trámites - Breakpoint 1024px"
                    searchPlaceholder="Buscar trámites..."
                    showDateFilters={true}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    onDateFromChange={setDateFrom}
                    onDateToChange={setDateTo}
                    showStatusFilter={true}
                    statusOptions={statusOptions}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    addButtonText="Nuevo Trámite"
                    onSelectUser={handleSelectUser}
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
                    onSelectUser={handleSelectUser}
                />
            </div>

            <div>
                <h2 style={{ marginBottom: "20px" }}>Tabla solo con toggle manual (sin auto)</h2>
                <Tablet
                    title="Control Manual Completo"
                    autoResponsive={false}
                    showAutoToggle={false}
                    onSelectUser={handleSelectUser}
                />
            </div>
        </main>
    );
}

export default page;