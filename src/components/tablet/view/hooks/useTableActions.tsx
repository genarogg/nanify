"use client"

import { useTableCallbacks, useTableState } from "../../context/TableContext"
import type { DataTable } from "../../fn/defaultData"

/**
 * Hook personalizado para manejar las acciones CRUD de la tabla
 * Centraliza toda la lógica de acciones y callbacks
 */
export const useTableActions = () => {
  const { onAddUser, onEditUser, onViewUser, onDeleteUser, onSelectUser } = useTableCallbacks()
  const { currentUsers, handleSelectUser: handleSelectUserState } = useTableState()

  // Manejar la selección de usuario
  const handleUserSelect = (userId: number) => {
    handleSelectUserState(userId)

    const user = currentUsers.find((u: any) => u.id === userId)
    if (user && onSelectUser) {
      onSelectUser(user)
    }
  }

  // Funciones CRUD
  const handleCreateUser = () => {
    onAddUser?.()
  }

  const handleEditUserClick = (user: DataTable) => {
    onEditUser?.(user)
  }

  const handleViewUserClick = (user: DataTable) => {
    onViewUser?.(user)
  }

  const handleDeleteUserClick = (user: DataTable) => {
    onDeleteUser?.(user)
  }

  return {
    handleUserSelect,
    handleCreateUser,
    handleEditUserClick,
    handleViewUserClick,
    handleDeleteUserClick,
  }
}
