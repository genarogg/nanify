'use client'
import React, { useEffect } from "react";
import TableHeader from "./view/components/table-header";
import useConfigured from "./context/useConfigured";
import { useGlobalZustand } from "./context/Global";

import TableView from "./view/components/table-body/table-view";

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

            <TableView />
            {/* 
            {hasFilteredItems && (
                <>
                    {responsiveViewState.viewMode === "table" ?  : <TableCardView />}
                    <TablePagination showEllipsis={true} />
                    <TableFooter />
                </>
            )} */}
        </div>
    );
}

export default HolaMundo;