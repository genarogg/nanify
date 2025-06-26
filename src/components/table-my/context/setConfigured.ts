
const setConfigured = ({ rolUser, roles }: any) => {
    const { DEV, SUPER, ESTANDAR } = roles;

    // Configuración base
    let config = {
        rolUser: rolUser,
        select: true,
        cuadricula: true,

        columns: [
            { column: "id" },
            { column: "nombre" },

            { column: "telefono" },
            { column: "cedula" },

        ],
        rowActions: [
            { name: "view", type: "btn" },
            { name: "report", type: "btn" },
        ],
        headerFilter: ["estado", "rol"],
        headerActions: [],
        footerActions: [],
    };



    switch (rolUser) {
        case SUPER:
            config.columns.splice(6, 0, { column: "correo" });
            config.rowActions.splice(4, 0, { name: "edit", type: "btn" });
            break
        case DEV:
            //columns
            config.columns.splice(7, 0, { column: "rol" });
            config.columns.splice(6, 0, { column: "estado" });

            // rowActions
            config.rowActions.splice(0, 0, { name: "changeRol", type: "select" });
            config.rowActions.splice(4, 0, { name: "edit", type: "btn" });
            break
        case ESTANDAR:
            break
    }

    config.columns.splice(10, 0, { column: "acciones" });

    return config;
};

export default setConfigured;