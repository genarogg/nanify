import Modal from "@/components/ux/modal"
import { Input } from "@/components/ux"

import { useRef } from "react"

import { BsFillEnvelopeHeartFill } from "react-icons/bs"
import { HiAdjustmentsVertical } from "react-icons/hi2";

// Iconos SVG simples
const DocumentIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
)

const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
)

export default function Home() {
    // Función de ejemplo para el botón guardar
    const handleSaveDocument = () => {
        console.log("Documento guardado!")
        // Aquí iría la lógica para guardar el documento
    }

    const inputRef = useRef({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };



    return (
        <div
            style={{
                padding: "40px",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f9fafb", // Fondo gris claro para simular la imagen
                minHeight: "100vh",
            }}
        >
            <h1 style={{ marginBottom: "32px", fontSize: "28px", fontWeight: "bold" }}>Ejemplo de Modal</h1>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {/* Modal para agregar documento */}
                <Modal
                    title="Agregar Documento"
                    icon={<DocumentIcon />}
                    onclick={handleSaveDocument}
                    buttonText="Agregar Documento"
                >
                    <Input
                        type="date"
                        name="email"
                        id="emailLogin"
                        placeholder="Email"
                        icon={<BsFillEnvelopeHeartFill />}
                        onChange={handleChange}
                    />
                

                    <Input
                        type="password"
                        name="pass"
                        id="passLogin"
                        placeholder="pass"

                        onChange={handleChange}
                    />

                    <div style={{ marginTop: "16px" }}>
                        <label className="modal-label">Código</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Nombre del Documento</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Costo Actual Simple</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Costo Actual Seguridad</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Requisitos del Documento</label>
                        <div className="modal-input-group">
                            <input type="text" className="modal-input" placeholder="Agregar nuevo requisito..." />
                            <button className="modal-input-group-button">
                                <PlusIcon />
                            </button>
                        </div>
                        <p className="modal-info-message">No hay requisitos agregados para este documento.</p>
                    </div>
                    <div style={{ marginTop: "16px" }}>
                        <label className="modal-label">Código</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Nombre del Documento</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Costo Actual Simple</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Costo Actual Seguridad</label>
                        <input type="text" className="modal-input" placeholder="" />
                    </div>
                    <div>
                        <label className="modal-label">Requisitos del Documento</label>
                        <div className="modal-input-group">
                            <input type="text" className="modal-input" placeholder="Agregar nuevo requisito..." />
                            <button className="modal-input-group-button">
                                <PlusIcon />
                            </button>
                        </div>
                        <p className="modal-info-message">No hay requisitos agregados para este documento.</p>
                    </div>
                </Modal>

                <Modal
                    title="Editar Usuario"
                    icon={<HiAdjustmentsVertical />}
                    type="btn"
                >
                    <p>Contenido del modal</p>
                </Modal>
            </div>
        </div>
    )
}
