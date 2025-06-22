import { useGlobalZustand } from "./Global";

interface Column {
    name: string;
    filtro?: boolean;
}

const useConfigured = () => {
    const { configured, setConfigured, setData, roles } = useGlobalZustand();

    let rolUser = configured?.rol;
    let columns: Column[] = [];

    let { DEV, SUPER, ESTANDAR } = roles

    switch (rolUser) {
        case SUPER:
            columns = [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ];
            break;

        case ESTANDAR:
            columns = [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ];
            break;

        case DEV:
            columns = [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ];
            break;
        default:
            columns = [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ];
    }

    const confiugracion = {
        rolUser,
        columns
    };

    setConfigured(confiugracion);

    setData({ filter: columns });
};

export default useConfigured