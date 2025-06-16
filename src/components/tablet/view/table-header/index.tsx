"use client"

import React from "react"
import { Printer } from "lucide-react"
import "./css/index.css"

import AddUsuario from "../modal-crud/AddUsuario"
import TableConfigModal from "../modal-crud/TableConfigModal"
import { useTableState } from "../../context/TableContext"
import StatusFilterSelect from "./hook/useRoleFilter"

import Title from "./Title"
import Search from "./Search"
import FromToDate from "./FromToDates"

const TableHeader: React.FC = () => {
  const { getSelectedItems, } =
    useTableState()


  const handlePrintSelected = (): void => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
      console.log("No hay elementos seleccionados para imprimir")
      return
    }
    console.log("Elementos seleccionados para imprimir:", selectedItems)
  }



  return (
    <div className="table-header-container">
      <Title />

      {/* Controles */}
      <div className="table-header-controls-section">
        <div className="box-left">
          <Search />
        </div>
        <div className="box-right">

          <FromToDate />
          {/* Modal Buttons */}
         
            {/* <button className="modal-trigger" onClick={handlePrintSelected} title="Imprimir seleccionados">
              <span className="modal-trigger-icon">
                <Printer size={16} />
              </span>
            </button> */}

            <div className="modal-button-wrapper">
              <StatusFilterSelect />
            </div>

            <div className="modal-button-wrapper">
              <TableConfigModal />
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