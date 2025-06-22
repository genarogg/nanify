import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DataState {
    items: any[];
    filterValue: {
        search: string;
        date: {
            start: null | string;
            end: null | string;
        };
    };
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
    inicializado: boolean;
    API: string;
    roles: any;
    getInicializado: () => boolean;
    setInicializado: (inicializado: boolean) => void;
    getSearch: () => string;
    setSearch: (search: string) => void;
    getDate: () => { start: null | string; end: null | string };
    setDate: (date: { start: null | string; end: null | string }) => void;
    setDateStart: (start: null | string) => void;
    setDateEnd: (end: null | string) => void;
}

const useGlobalZustand = create<GlobalZustanProps>()(
    devtools((set, get) => ({
        API: "http://localhost:3001/usuarios",
        inicializado: false,
        configured: {
            rolUser: "dev",
            columns: [],
            rowActions: [],
            headerFilter: [],
            headerActions: [],
            footerActions: [],
        },
        roles: {
            SUPER: "super",
            ESTANDAR: "estandar",
            DEV: "dev",
        },
        data: {
            items: [],
            filterValue: {
                search: '',
                date: {
                    start: null,
                    end: null
                }
            },
            page: 1,
            totalPages: 1,
            loading: true,
            error: null,
        },

        //FUNCIONES PARA CONFIGURAR EL ESTADO GLOBAL
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

        getInicializado: () => get().inicializado,

        // Función para cambiar el valor de inicializado
        setInicializado: (inicializado: boolean) => set(
            { inicializado },
            false,
            'setInicializado'
        ),

        // Función para obtener el valor de search desde filterValue
        getSearch: () => get().data.filterValue.search,

        // Función para cambiar directamente el search en filterValue
        setSearch: (search: string) => set(
            (state) => ({
                data: {
                    ...state.data,
                    filterValue: {
                        ...state.data.filterValue,
                        search
                    }
                }
            }),
            false,
            'setSearch'
        ),

        // Función para obtener el objeto date completo
        getDate: () => get().data.filterValue.date,

        // Función para cambiar todo el objeto date
        setDate: (date: { start: null | string; end: null | string }) => set(
            (state) => ({
                data: {
                    ...state.data,
                    filterValue: {
                        ...state.data.filterValue,
                        date
                    }
                }
            }),
            false,
            'setDate'
        ),

        // Función para cambiar solo el start date
        setDateStart: (start: null | string) => set(
            (state) => ({
                data: {
                    ...state.data,
                    filterValue: {
                        ...state.data.filterValue,
                        date: {
                            ...state.data.filterValue.date,
                            start
                        }
                    }
                }
            }),
            false,
            'setDateStart'
        ),

        // Función para cambiar solo el end date
        setDateEnd: (end: null | string) => set(
            (state) => ({
                data: {
                    ...state.data,
                    filterValue: {
                        ...state.data.filterValue,
                        date: {
                            ...state.data.filterValue.date,
                            end
                        }
                    }
                }
            }),
            false,
            'setDateEnd'
        ),
    }),
        {
            name: 'global-store',
        }
    )
);

export { useGlobalZustand };