'use client'
import React from 'react'
import { useTableState } from "../../../../context/TableContext"
import DataStatusIndicator from "./DataStatusIndicator"
import SelectRol from "./controllers/SelectRol"
import TableConfigModal from "./controllers/TableConfigModal"

import "./css/header-up.css"

interface HeaderUpProps {

}

const HeaderUp: React.FC<HeaderUpProps> = () => {
    const { dataLoading, dataError, refetchData } = useTableState()

    const isDevelopment = process.env.NODE_ENV === "development"


    return (
        <>
            <div className="table-header-title-section">
                <div className="title-and-role-container">
                    <div className="box-left">
                        <h2 className="table-title">Table Example</h2>

                        {dataLoading && <DataStatusIndicator type="loading" message="Cargando datos..." />}

                        {dataError && (
                            <DataStatusIndicator
                                type="error"
                                message={`Error: ${dataError}`}
                                onRetry={refetchData}
                            />
                        )}
                    </div>

                    <div className="box-right">
                        {isDevelopment && (
                            <SelectRol />
                        )}
                        <TableConfigModal />
                    </div>
                </div>


            </div>
            <div className="table-header-divider"></div>
        </>
    );
}

export default HeaderUp;