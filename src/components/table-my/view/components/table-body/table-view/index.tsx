"use client"

import { Check, Minus } from "lucide-react"
// import { useTableRowActions } from "../../../context/hooks/useTableRowActions"
// import ViewUserModal from "../../modal-crud/ViewUserModal"
// import ActionsColumn from "../components/ActionsColumn"
// import BadgeWrapper from "../components/BadgeWrapper"
import "./user-management-table.css"


import { useGlobalZustand } from "../../../../context/Global"

export default function TableView() {
  // const { tableState, config } = useTableContext()
  // const { deleteItem } = useTableState()

  // const { currentItems, selectedItems, handleSelectAll, getSelectAllState } = tableState
  // const { select, cuadricula, columns } = config



  // Usar el hook de acciones - NO pasar onCustomView para que use el modal por defecto
  // const {
  //   handleDuplicate,
  //   handleView,
  //   handleDelete,
  //   handleEdit,
  //   viewModalOpen,
  //   selectedItemForView,
  //   closeViewModal,
  // } = useTableRowActions({
  //   onCustomDelete: (item) => {
  //     // Usar directamente la función deleteItem del contexto
  //     deleteItem(item.id)
  //   },
  //   // NO pasar onCustomView para que use el modal interno
  //   showConfirmDialog: true,
  // })

  // const handleItemSelect = (itemId: number) => {
  //   // Use the function from tableState to handle item selection
  //   tableState.handleSelectItem(itemId)
  // }

  const {
    configured,
    data,
    getSelectAllState,
    toggleAllSelect,
    isItemSelected,
    toggleSelectItem
  } = useGlobalZustand()

  console.log(data.items)



  return (
    <>
      <div className="table-container">
        <table
          className={`
            data-table 
            ${configured.select ? "" : "no-select"} 
            ${configured.cuadricula ? "with-grid" : ""}`
          }>
          <thead>
            <tr>
              {configured.select && (
                <th className="select-column">
                  <button
                    className={`select-btn master-select ${getSelectAllState()}`}
                    onClick={() => { toggleAllSelect() }}
                    title="Seleccionar todos"
                  >
                    {getSelectAllState() === "all" && <Check size={14} />}
                    {getSelectAllState() === "some" && <Minus size={14} />}
                  </button>
                </th>
              )}
              {configured.columns
                .map((column: any, index: any) => (
                  <th key={index} className={`col-${index}`}>
                    {column.column}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody style={{ minHeight: "320px", position: "relative" }}>
            {data.items.map((item: any, index: any) => (
              <tr key={item.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                {configured.select && (
                  <td className="select-column">
                    <button
                      className={`select-btn ${isItemSelected(item) ? "selected" : ""}`}
                      onClick={() => toggleSelectItem(item)}
                      title="Seleccionar elemento"
                    >
                      {isItemSelected(item) && <Check size={14} />}
                    </button>
                  </td>
                )}

                {data.items

                  .map((column) => {
                    if (column.id === "acciones") {
                      return (
                        <td key={column.id} className="acciones-column">

                        </td>
                      )
                    }

                    return (
                      <td key={column.id} className={`${column.id}-column`}>
                        {column.id === "nombre" && <span className="name-cell">{item[column.accessor]}</span>}
                        {column.id === "correo" && <span className="email-cell">{item[column.accessor]}</span>}
                        {/* {column.id === "rol" && (
                          <BadgeWrapper type="role" value={item.rol} />
                        )}
                        {column.id === "status" && (
                          <BadgeWrapper type="status" value={item.status} />
                        )}  */}
                        {column.id !== "nombre" &&
                          column.id !== "correo" &&
                          column.id !== "rol" &&
                          column.id !== "status" &&
                          item[column.accessor]}
                      </td>
                    )
                  })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
