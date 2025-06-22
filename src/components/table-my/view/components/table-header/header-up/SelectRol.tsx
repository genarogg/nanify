"use client"

import type React from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../ux/select"
import { useGlobalZustand } from "../../../../context/Global"

const SelectRol: React.FC = () => {
  const { roles, configured, setConfigured } = useGlobalZustand()
  const userRole = configured.rolUser

  const handleRoleChange = (value: string | string[]) => {
    if (typeof value === "string") {
      setConfigured({
        ...configured,
        rolUser: value,
      })
    }
  }

  return (
    <div className="dev-user-role-select">
      <Select value={userRole} onValueChange={handleRoleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona un rol" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(roles).map(([key, value]) => (
            <SelectItem key={key} value={String(value)}>
              {key.charAt(0) + key.slice(1).toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectRol