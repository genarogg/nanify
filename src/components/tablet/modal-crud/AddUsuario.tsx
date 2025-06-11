'use client'
import React from 'react'
import { Download } from "lucide-react"

import Modal from "../../ux/modal"

interface AddUsuarioProps {

}

const AddUsuario: React.FC<AddUsuarioProps> = () => {
    return (
        <>
            <Modal
                title="Exportar Datos"
                icon={<Download size={16} />}
                buttonClassName="table-modal-btn export-btn"
                buttonText="Guardar Exportación"
                onclick={() => console.log("Exportar datos")}
            >
                <div className="modal-export-content">

                </div>
            </Modal>
        </>
    );
}

export default AddUsuario;
