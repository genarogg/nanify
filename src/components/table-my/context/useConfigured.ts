import { useGlobalZustand } from "./Global";

interface Column {
    name: string;
    filtro?: boolean;
}

const useConfigured = () => {
    const { configured, setConfigured, setData } = useGlobalZustand();

    let rolUser = configured?.rol || "dev";
    let columns: Column[] = [];

    switch (rolUser) {
        case "super":
            columns = [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ];
            break;

        case "estandar":
            columns = [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ];
            break;

        case "dev":
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