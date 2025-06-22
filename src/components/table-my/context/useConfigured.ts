

const useConfigured = ({ rolUser, roles }: any) => {
    const { DEV, SUPER, ESTANDAR } = roles;

    // Configuración base
    let config = {
        rolUser: rolUser,
        columns: [
            { name: "id" },
            { name: "Nombre" },
            { name: "Correo" },
            { name: "Teléfono" },
            { name: "Cédula" },
            { name: "Acciones" }
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
            config.columns.splice(4, 0, { name: "Rol" });
            config.columns.splice(6, 0, { name: "Estado" });
            break
    }

    return config
};

export default useConfigured;