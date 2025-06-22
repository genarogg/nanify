'use client'
import React, { useEffect } from "react";
import TableHeader from "./view/components/table-header";
import useConfigured from "./context/useConfigured";
import { useGlobalZustand } from "./context/Global";

const HolaMundo: React.FC = () => {

    const { roles, configured, setConfigured } = useGlobalZustand();

    useEffect(() => {
        const rolUser = configured.rolUser
        const config = useConfigured({ rolUser, roles });

        setConfigured(config);
    }, [configured.rolUser]);


    return (
        <div className="table-management-container">
            <TableHeader />
        </div>
    );
}

export default HolaMundo;