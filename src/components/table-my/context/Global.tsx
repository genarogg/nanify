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

interface ThemeState {
    dark: boolean;
}

interface GlobalZustanProps {
    configured: any;
    setConfigured: (value: any) => void;
    data: DataState;
    setData: (value: Partial<DataState>) => void;
    theme: ThemeState;

 
    roles: any;

    getSearch: () => string;
    setSearch: (search: string) => void;
    getDate: () => { start: null | string; end: null | string };
    setDate: (date: { start: null | string; end: null | string }) => void;
    setDateStart: (start: null | string) => void;
    setDateEnd: (end: null | string) => void;

    // Métodos para theme
    getTheme: () => ThemeState;
    setTheme: (theme: Partial<ThemeState>) => void;
    setDark: (dark: boolean) => void;

    // Métodos para configured
    getCuadricula: () => boolean;
    setCuadricula: (cuadricula: boolean) => void;
}

const useGlobalZustand = create<GlobalZustanProps>()(
    devtools((set, get) => ({


        theme: {
            dark: false
        },

        configured: {
            rolUser: "DEV",
            cuadricula: false,
            select: false,
            columns: [],
            rowActions: [],
            headerFilter: [],
            headerActions: [],
            footerActions: [],
        },
        roles: {
            SUPER: "SUPER",
            ESTANDAR: "ESTANDAR",
            DEV: "DEV",
        },
        data: {
            items: [],
            selectItems: [],
            
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

        // MÉTODOS PARA THEME

        // Función para obtener el objeto theme completo
        getTheme: () => get().theme,

        // Función para cambiar propiedades específicas del theme manteniendo las demás
        setTheme: (theme: Partial<ThemeState>) => set(
            (state) => ({
                theme: { ...state.theme, ...theme }
            }),
            false,
            'setTheme'
        ),

        // Función para cambiar solo dark
        setDark: (dark: boolean) => set(
            (state) => ({
                theme: {
                    ...state.theme,
                    dark
                }
            }),
            false,
            'setDark'
        ),

        // MÉTODOS PARA CONFIGURED

        // Función para obtener el valor de cuadricula desde configured
        getCuadricula: () => get().configured.cuadricula,

        // Función para cambiar solo cuadricula en configured
        setCuadricula: (cuadricula: boolean) => set(
            (state) => ({
                configured: {
                    ...state.configured,
                    cuadricula
                }
            }),
            false,
            'setCuadricula'
        ),

    }),
        {
            name: 'global-store',
        }
    )
);

export { useGlobalZustand };