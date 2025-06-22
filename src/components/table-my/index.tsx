"use client"

import { GlobalProvider } from "./context/Global.tsx"
import TableContent from "./view"

const Table = () => {
    return (
        <GlobalProvider>
            <TableContent />
        </GlobalProvider>
    )
}

export default Table
