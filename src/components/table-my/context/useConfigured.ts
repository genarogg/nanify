

const useConfigured = ({ rolUser, roles }: any) => {
    const { DEV, SUPER, ESTANDAR } = roles;

    // Configuración base
    let config = {
        rolUser: rolUser,
        columns: [
            { column: "id" },
            { column: "Nombre" },
            { column: "Correo" },
            { column: "Teléfono" },
            { column: "Cédula" },
            { column: "Acciones" }
        ],
        rowActions: [{ name: "Ver", action: "view" }],
        headerFilter: [{}],
        headerActions: [{}],
        footerActions: [{}],
    };

    switch (rolUser) {
        case SUPER:
        case DEV:
        case ESTANDAR:
            config.columns.splice(4, 0, { column: "Rol" });
            config.columns.splice(6, 0, { column: "Estado" });
            break
    }

    return config
};

export default useConfigured;