"use client"

import type React from "react"

import "./css/index.css"

import HeaderUp from "./header-up"
import Search from "./Search"
// import Filter from "./header-down/filters"

// import AddUsuario from "../../modal-crud/AddUsuario"

const TableHeader: React.FC = () => {
  return (
    <div className="table-header-container">
      <HeaderUp />

      {/* Controles principales */}
      <div className="table-header-controls-section">
        <div className="box-left">
          <Search />
        </div>


        {/* Botones fijos a la derecha */}
        <div className="box-right">
          {/* <Filter /> */}

          {/* <div className="modal-button-wrapper">
            <AddUsuario />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default TableHeader
