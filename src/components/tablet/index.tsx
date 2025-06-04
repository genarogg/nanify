"use client"

import { useState } from "react"
import "./css/user-management-table.css"

import { Edit, Eye, Check, Minus, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import defaultConfig, { type TableConfig } from "./config"
import { useTable, type UseTableReturn } from "./useTable"
import { type User } from "./fn/defaultUsers"
import { useResponsiveView } from "./useResponsiveView"
import TableHeader from "./table-header"
import TablePagination from "./pagination/table-pagination"
import TableCardView from "./table-card-view"
import UserCrudModal from "./user-crud-modal"

interface UserManagementTableProps {
    config?: Partial<TableConfig>
    tableState?: UseTableReturn
    onAddUser?: () => void
    onEditUser?: (user: User) => void
    onViewUser?: (user: User) => void
    onSelectUser?: (user: User) => void
    // Props para personalizar el header
    title?: string
    searchPlaceholder?: string
    addButtonText?: string
    showAddButton?: boolean
    showSearch?: boolean
    // Props para filtros adicionales
    showDateFilters?: boolean
    dateFrom?: string
    dateTo?: string
    onDateFromChange?: (date: string) => void
    onDateToChange?: (date: string) => void
    showStatusFilter?: boolean
    statusOptions?: { value: string; label: string }[]
    selectedStatus?: string
    onStatusChange?: (status: string) => void
    // Props para personalizar la paginación
    showPaginationInfo?: boolean
    paginationInfoText?: string
    previousText?: string
    nextText?: string
    // Props para vista responsive
    showViewToggle?: boolean
    defaultViewMode?: "table" | "cards"
    autoResponsive?: boolean
    breakpoint?: number
    showAutoToggle?: boolean
}

export default function UserManagementTable({
    config = {},
    tableState,
    onAddUser,
    onEditUser,
    onViewUser,
    onSelectUser,
    // Header props
    title,
    searchPlaceholder,
    addButtonText,
    showAddButton,
    showSearch,
    // Filter props
    showDateFilters,
    dateFrom,
    dateTo,
    onDateFromChange,
    onDateToChange,
    showStatusFilter,
    statusOptions,
    selectedStatus,
    onStatusChange,
    // Pagination props
    showPaginationInfo,
    paginationInfoText,
    previousText,
    nextText,
    // Responsive view props
    showViewToggle = true,
    defaultViewMode = "table",
    autoResponsive = false,
    breakpoint = 768,
    showAutoToggle = true,
}: UserManagementTableProps) {
    // Usar el estado proporcionado o crear uno nuevo
    const defaultTableState = useTable()
    const state = tableState || defaultTableState

    const {
        searchTerm,
        currentPage,
        selectedUsers,
        currentUsers,
        totalPages,
        handleSearch,
        goToPage,
        goToNextPage,
        goToPreviousPage,
        handleSelectUser: handleSelectUserState,
        handleSelectAll,
        getSelectAllState,
        getPageNumbers,
        hasFilteredUsers,
        addUser,
        updateUser,
        deleteUser,
    } = state

    // Hook para manejo responsive de vistas
    const responsiveViewState = useResponsiveView({
        autoResponsive,
        breakpoint,
        defaultViewMode,
    })

    // Estados para el modal CRUD
    const [modalState, setModalState] = useState<{
        isOpen: boolean
        mode: "create" | "edit" | "view" | "delete"
        user?: User | null
    }>({
        isOpen: false,
        mode: "create",
        user: null,
    })

    // Combinar la configuración por defecto con la configuración proporcionada
    const tableConfig: TableConfig = {
        ...defaultConfig,
        ...config,
        columns: config.columns || defaultConfig.columns,
    }

    const { select, cuadricula, columns } = tableConfig

    // Manejar la selección de usuario
    const handleUserSelect = (userId: number) => {
        if (!select) return

        handleSelectUserState(userId)

        const user = currentUsers.find((u: any) => u.id === userId)
        if (user && onSelectUser) {
            onSelectUser(user)
        }
    }

    // Funciones CRUD
    const handleCreateUser = () => {
        setModalState({
            isOpen: true,
            mode: "create",
            user: null,
        })
        onAddUser?.()
    }

    const handleEditUserClick = (user: User) => {
        setModalState({
            isOpen: true,
            mode: "edit",
            user,
        })
        onEditUser?.(user)
    }

    const handleViewUserClick = (user: User) => {
        setModalState({
            isOpen: true,
            mode: "view",
            user,
        })
        onViewUser?.(user)
    }

    const handleDeleteUserClick = (user: User) => {
        setModalState({
            isOpen: true,
            mode: "delete",
            user,
        })
    }

    const handleModalClose = () => {
        setModalState({
            isOpen: false,
            mode: "create",
            user: null,
        })
    }

    const handleModalSave = (userData: Partial<User>) => {
        if (modalState.mode === "create") {
            addUser(userData as User)
        } else if (modalState.mode === "edit" && modalState.user) {
            updateUser(modalState.user.id, userData)
        }
    }

    const handleModalDelete = (userId: number) => {
        deleteUser(userId)
    }

    return (
        <div className="user-management-container">
            <TableHeader
                title={title}
                searchTerm={searchTerm}
                searchPlaceholder={searchPlaceholder}
                onSearch={handleSearch}
                onAddUser={handleCreateUser}
                addButtonText={addButtonText}
                showAddButton={showAddButton}
                showSearch={showSearch}
                showDateFilters={showDateFilters}
                dateFrom={dateFrom}
                dateTo={dateTo}
                onDateFromChange={onDateFromChange}
                onDateToChange={onDateToChange}
                showStatusFilter={showStatusFilter}
                statusOptions={statusOptions}
                selectedStatus={selectedStatus}
                onStatusChange={onStatusChange}
                showViewToggle={showViewToggle}
                responsiveViewState={responsiveViewState}
                showAutoToggle={showAutoToggle}
            />

            {responsiveViewState.viewMode === "table" ? (
                <div className="table-container">
                    <table className={`users-table ${!select ? "no-select" : ""} ${cuadricula ? "with-grid" : ""}`}>
                        <thead>
                            <tr>
                                {select && (
                                    <th className="select-column">
                                        <button
                                            className={`select-btn master-select ${getSelectAllState()}`}
                                            onClick={handleSelectAll}
                                            title="Seleccionar todos"
                                        >
                                            {getSelectAllState() === "all" && <Check size={14} />}
                                            {getSelectAllState() === "some" && <Minus size={14} />}
                                        </button>
                                    </th>
                                )}
                                {columns
                                    .filter((column) => !column.hidden)
                                    .map((column) => (
                                        <th key={column.id}>{column.header}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            <AnimatePresence mode="popLayout">
                                {currentUsers.map((user: any, index: any) => (
                                    <motion.tr
                                        key={user.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className={index % 2 === 0 ? "row-even" : "row-odd"}
                                    >
                                        {select && (
                                            <td className="select-column">
                                                <button
                                                    className={`select-btn ${selectedUsers.includes(user.id) ? "selected" : ""}`}
                                                    onClick={() => handleUserSelect(user.id)}
                                                    title="Seleccionar usuario"
                                                >
                                                    {selectedUsers.includes(user.id) && <Check size={14} />}
                                                </button>
                                            </td>
                                        )}
                                        {columns
                                            .filter((column) => !column.hidden)
                                            .map((column) => {
                                                if (column.id === "acciones") {
                                                    return (
                                                        <td key={column.id}>
                                                            <div className="actions-cell">
                                                                <motion.button
                                                                    className="action-btn edit-btn"
                                                                    onClick={() => handleEditUserClick(user)}
                                                                    title="Editar usuario"
                                                                    whileHover={{ scale: 1.05 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                >
                                                                    <Edit size={16} />
                                                                </motion.button>
                                                                <motion.button
                                                                    className="action-btn view-btn"
                                                                    onClick={() => handleViewUserClick(user)}
                                                                    title="Ver usuario"
                                                                    whileHover={{ scale: 1.05 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                >
                                                                    <Eye size={16} />
                                                                </motion.button>
                                                                <motion.button
                                                                    className="action-btn delete-btn"
                                                                    onClick={() => handleDeleteUserClick(user)}
                                                                    title="Eliminar usuario"
                                                                    whileHover={{ scale: 1.05 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                >
                                                                    <Trash2 size={16} />
                                                                </motion.button>
                                                            </div>
                                                        </td>
                                                    )
                                                }

                                                if (column.id === "nombre") {
                                                    return (
                                                        <td key={column.id} className="name-cell">
                                                            {user[column.accessor]}
                                                        </td>
                                                    )
                                                }

                                                if (column.id === "correo") {
                                                    return (
                                                        <td key={column.id} className="email-cell">
                                                            {user[column.accessor]}
                                                        </td>
                                                    )
                                                }

                                                if (column.id === "rol") {
                                                    return (
                                                        <td key={column.id}>
                                                            <span className={`role-badge role-${user.rol.toLowerCase().replace("_", "-")}`}>
                                                                {user.rol}
                                                            </span>
                                                        </td>
                                                    )
                                                }

                                                return <td key={column.id}>{user[column.accessor]}</td>
                                            })}
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            ) : (
                <TableCardView
                    users={currentUsers}
                    selectedUsers={selectedUsers}
                    onSelectUser={handleUserSelect}
                    onEditUser={handleEditUserClick}
                    onViewUser={handleViewUserClick}
                    onDeleteUser={handleDeleteUserClick}
                    showSelection={select}
                />
            )}

            {!hasFilteredUsers && (
                <motion.div
                    className="no-results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <p>No se encontraron usuarios que coincidan con la búsqueda.</p>
                </motion.div>
            )}

            {hasFilteredUsers && (
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={goToPage}
                    onNextPage={goToNextPage}
                    onPreviousPage={goToPreviousPage}
                    getPageNumbers={getPageNumbers}
                    showInfo={showPaginationInfo}
                    infoText={paginationInfoText}
                    previousText={previousText}
                    nextText={nextText}
                />
            )}

            <UserCrudModal
                isOpen={modalState.isOpen}
                mode={modalState.mode}
                user={modalState.user}
                onClose={handleModalClose}
                onSave={handleModalSave}
                onDelete={handleModalDelete}
            />
        </div>
    )
}
