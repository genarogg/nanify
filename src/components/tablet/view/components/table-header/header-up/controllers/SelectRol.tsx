"use client"

import type React from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../../ux/select"

interface SelectRolProps {
  userRole: "super" | "asistente"
  onRoleChange: (role: "super" | "asistente") => void
}

const SelectRol: React.FC<SelectRolProps> = ({ userRole, onRoleChange }) => {


  return (
    <div className="dev-user-role-select">
      <Select value={userRole} onValueChange={(value) => onRoleChange(value as "super" | "asistente")}>
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