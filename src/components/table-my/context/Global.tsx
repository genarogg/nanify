import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DataState {
    items: any[];
    search: string;
    filter: any[];
    page: number;
    totalPages: number;
    loading: boolean;
    error: null | string;
}

interface GlobalZustanProps {
    configured: any;
    setConfigured: (value: any) => void;
    data: DataState;
    setData: (value: Partial<DataState>) => void;
    API: string;
    roles: any;
    getSearch: () => string;
    setSearch: (search: string) => void;
}

const useGlobalZustand = create<GlobalZustanProps>()(
    devtools((set, get) => ({
        API: "http://localhost:3001/usuarios",
        configured: {
            rolUser: "dev",
            columns: [
                { name: "Nombre", filtro: true },
                { name: "Email", filtro: true },
                { name: "Rol", filtro: true },
                { name: "Acciones", filtro: true }
            ]
        },
        roles: {
            SUPER: "super",
            ESTANDAR: "estandar",
            DEV: "dev",
        },
        data: {
            items: [],
            search: "",
            filter: [],
            page: 1,
            totalPages: 1,
            loading: true,
            error: null,
        },
        setConfigured: (value) => set(
            { configured: value },
            false,
            'setConfigured'
        ),
        setData: (value) => set(
            (state) => ({
                data: { ...state.data, ...value }
            }),
            false,
            'setData'
        ),

        // Función para obtener el valor de search
        getSearch: () => get().data.search,

        // Función para cambiar directamente el search
        setSearch: (search: any) => set(
            (state) => ({
                data: { ...state.data, search }
            }),
            false,
            'setSearch'
        ),
    }),
        {
            name: 'global-store',
        }
    )
);

export { useGlobalZustand };