import { useGlobalZustand } from "./Global";

const useConfigured = () => {
    const { configured, setConfigured, roles, setInicializado } = useGlobalZustand();

    const rolUser = configured?.rol;
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
    setInicializado(true)
    setConfigured(config);
};

export default useConfigured;