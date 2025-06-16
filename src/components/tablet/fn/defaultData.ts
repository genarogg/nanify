import type { DataTable } from "../context/types"

const defaultData: DataTable[] = [
    {
        id: 707,
        nombre: "Miguel Reyes",
        correo: "reyesolivares2024@gmail.com",
        telefono: "04120482582",
        cedula: "17251549",
        rol: "ADMIN_DACE",
        status: "ACTIVO",
    },
    {
        id: 6,
        nombre: "Francisco Torrealba",
        correo: "franktorre180@gmail.com",
        telefono: "04243208887",
        cedula: "18972206",
        rol: "ADMIN_DACE",
        status: "ACTIVO",
    },
    {
        id: 118,
        nombre: "Eyerlin Santana",
        correo: "santanaeyerlin@gmail.com",
        telefono: "04143455473",
        cedula: "16804638",
        rol: "ADMIN_DACE",
        status: "INACTIVO",
    },
    {
        id: 3,
        nombre: "carlos villasmil villasmil",
        correo: "villasalavrez@gmail.com",
        telefono: "04128540607",
        cedula: "17062927",
        rol: "ADMIN_FUNDESUR",
        status: "PENDIENTE",
    },
    {
        id: 1,
        nombre: "Genaro Gonzalez",
        correo: "solicitudes@unerg.edu.ve",
        telefono: "04127554970",
        cedula: "123456789",
        rol: "SUPER_USUARIO",
        status: "ACTIVO",
    },
    // Agregar más usuarios para demostrar la paginación
    ...Array.from({ length: 25 }, (_, i) => ({
        id: 1000 + i,
        nombre: `Usuario Ejemplo ${i + 1}`,
        correo: `usuario${i + 1}@ejemplo.com`,
        telefono: `04${Math.floor(10000000 + Math.random() * 90000000)}`,
        cedula: `${Math.floor(10000000 + Math.random() * 90000000)}`,
        rol: ["ADMIN_DACE", "ADMIN_FUNDESUR", "SUPER_USUARIO"][Math.floor(Math.random() * 3)],
        status: ["ACTIVO", "INACTIVO", "PENDIENTE"][Math.floor(Math.random() * 3)],
    })),
]

export { defaultData }
