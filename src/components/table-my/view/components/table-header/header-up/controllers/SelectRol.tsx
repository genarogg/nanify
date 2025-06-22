"use client"

import type React from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../../ux/select"
import { useTableState } from "../../../../../context/TableContext"

const SelectRol: React.FC = () => {
  const { userRole, updateUserRole } = useTableState()

  return (
    <div className="dev-user-role-select">
      <Select value={userRole} onValueChange={(value) => updateUserRole(value as "super" | "asistente")}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="super">Super</SelectItem>
          <SelectItem value="asistente">Asistente</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectRol