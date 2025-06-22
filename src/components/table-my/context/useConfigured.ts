import { useGlobalContext } from "./Global";

const useConfigured = () => {
    const { configured, setConfigured } = useGlobalContext();

    let rolUser = configured?.rol || "dev";
    let columns: { name: string }[] = [];

    switch (rolUser) {
        case "super":
            columns = [
                { name: "Nombre" },
                { name: "Email" },
                { name: "Rol" },
                { name: "Acciones" }
            ];
            break;
        case "estandar":
            columns = [
                { name: "Nombre" },
                { name: "Email" },
                { name: "Rol" },
                { name: "Acciones" }
            ];
            break;

        case "dev":
            columns = [
                { name: "Nombre" },
                { name: "Email" },
                { name: "Rol" },
                { name: "Acciones" }
            ];
            break;
    }

    const confiugracion = {
        rolUser,
        columns
    };

    setConfigured(confiugracion);
};

export default useConfigured