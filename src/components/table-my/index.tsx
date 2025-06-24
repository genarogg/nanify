'use client'
import React, { useEffect } from "react";
import TableHeader from "./view/components/table-header";
import useConfigured from "./context/useConfigured";

import { useGlobalZustand } from "./context/Global";
import useData from "./context/data/useData";

import TableView from "./view/table-body/table-view";

import TablePagination from "./view/components/paginacion";

const HolaMundo: React.FC = () => {

    const { roles, configured, setConfigured } = useGlobalZustand();

    const { initialData } = useData();

    useEffect(() => {
        initialData()

        const rolUser = configured.rolUser
        const config = useConfigured({ rolUser, roles });

        setConfigured(config);
    }, [configured.rolUser]);


    return (
        <div className="table-management-container">
            <TableHeader />

            <TableView />
            {/* 
            {hasFilteredItems && (
                <>
                    {responsiveViewState.viewMode === "table" ?  : <TableCardView />}
                    
                    <TableFooter />
                </>
            )} */}
            <TablePagination />
        </div>
    );
}

export default HolaMundo;