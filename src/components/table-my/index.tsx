'use client'
import React, { useEffect } from "react";

import { inicializarContext, useGlobalZustand, useData } from "./context";

import TableHeader from "./view/components/table-header";

interface HolaMundoProps { }

const HolaMundo: React.FC<HolaMundoProps> = () => {
    const { configured } = useGlobalZustand();
    const { data, fetchData } = useData();

    if (!configured) {
        inicializarContext()
        return
    }

    console.log("HolaMundo", configured, data, useData);

    useEffect(() => {
        fetchData(1, 20); // Se ejecuta automáticamente al montar el componente
    }, [fetchData]);

    return (
        <div className="table-management-container">
            <TableHeader />
        </div>
    );
}

export default HolaMundo;