'use client'
import React, { useEffect } from "react";

import { inicializarContext, useGlobalZustand, useData } from "./context";

import TableHeader from "./view/components/table-header";

interface HolaMundoProps { }

const HolaMundo: React.FC<HolaMundoProps> = () => {
    const { configured, getInicializado } = useGlobalZustand();
    const { data, fetchData } = useData();

    if (!getInicializado()) {
        inicializarContext()
        return
    }


    // useEffect(() => {
    //     fetchData(1, 20);
    // }, [fetchData]);

    console.log("indexTablet", configured, data);

    return (
        <div className="table-management-container">
            <TableHeader />
        </div>
    );
}

export default HolaMundo;