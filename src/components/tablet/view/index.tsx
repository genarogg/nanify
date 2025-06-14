"use client"

import { useTableContext } from "../context/TableContext"
import { useTableActions } from "../hooks/useTableActions"
import TableCardView from "./table-card-view";
import TableView from "./table-view";
import TableHeader from "./table-header";
import Pagination from "./pagination";

export default function TableContent() {
    const { tableState, responsiveViewState, config } = useTableContext()

    const { handleUserSelect, handleEditUserClick, handleViewUserClick, handleDeleteUserClick } = useTableActions()

    const { currentUsers, selectedUsers, handleSelectAll, getSelectAllState, updateUser } = tableState
    const { select, cuadricula, columns } = config

    // Calculamos si hay usuarios filtrados basándonos en si currentUsers tiene elementos
    const hasFilteredUsers = currentUsers && currentUsers.length > 0

    const renderTableContent = () => {
        if (responsiveViewState.viewMode === "table") {
            return (
                <TableView
                    users={currentUsers}
                    selectedUsers={selectedUsers}
                    columns={columns}
                    select={select}
                    cuadricula={cuadricula}
                    onSelectUser={handleUserSelect}
                    onSelectAll={handleSelectAll}
                    getSelectAllState={getSelectAllState}
                    onEditUser={handleEditUserClick}
                    onViewUser={handleViewUserClick}
                    onDeleteUser={handleDeleteUserClick}
                    updateUser={updateUser}
                />
            )
        }

        return (
            <TableCardView
                users={currentUsers}
                selectedUsers={selectedUsers}
                onSelectUser={handleUserSelect}
                onEditUser={handleEditUserClick}
                onViewUser={handleViewUserClick}
                onDeleteUser={handleDeleteUserClick}
                showSelection={select}
            />
        )
    }

    return (
        <div className="user-management-container">
            <TableHeader />

            {renderTableContent()}

            {!hasFilteredUsers && (
                <div className="no-results">
                    <p>No se encontraron usuarios que coincidan con la búsqueda.</p>
                </div>
            )}

            {hasFilteredUsers && <Pagination />}
        </div>
    )
}