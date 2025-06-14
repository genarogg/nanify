interface DataTable {
    id: number
    nombre: string
    correo: string
    telefono: string
    cedula: string
    rol: string
    [key: string]: any
}

interface TableColumn {
    id: string
    header: string
    accessor: string
    sortable?: boolean
    hidden?: boolean
}

interface TableConfig {
    select: boolean
    cuadricula: boolean
    columns: TableColumn[]
}


export type { DataTable, TableColumn, TableConfig }
