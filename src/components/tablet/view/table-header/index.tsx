"use client"

import type React from "react"

import "./css/index.css"

import AddUsuario from "../modal-crud/AddUsuario"
import TableConfigModal from "../modal-crud/TableConfigModal"
import { useTableState } from "../../context/TableContext"

import Title from "./Title"
import Search from "./Search"
import FromToDate from "./FromToDates"
import FilterToggleButton from "./filters"

import { SelectStatus, SelectRol } from "./SearchSelected"

const TableHeader: React.FC = () => {
  const { getSelectedItems } = useTableState()

  return (
    <div className="table-header-container">
      <Title />

      {/* Controles principales */}
      <div className="table-header-controls-section">
        <div className="box-left">
          <Search />
        </div>

        {/* Área de filtros expandibles */}

        {/* Botones fijos a la derecha */}
        <div className="box-right">
          <div className="box-filter">
            <FilterToggleButton storageKey="table-filters-visible">
              <FromToDate />
              <SelectStatus />
              <SelectRol />
              <TableConfigModal />
            </FilterToggleButton>
          </div>


          <div className="modal-button-wrapper">
            <AddUsuario />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableHeader
