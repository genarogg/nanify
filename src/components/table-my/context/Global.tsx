import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DataItem {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
    cedula: string;
    rol: "DEV" | "ESTANDAR" | "SUPER";
    estado: "ACTIVO" | "INACTIVO";
    limite: number;
    doc: string;
   
}

interface DataState {
    items: DataItem[];
    selectItems: DataItem[];
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
    badges: any;
    estados: any;

    getSearch: () => string;
    setSearch: (search: string) => void;
    getDate: () => { start: null | string; end: null | string };
    setDate: (date: { start: null | string; end: null | string }) => void;
    setDateStart: (start: null | string) => void;
    setDateEnd: (end: null | string) => void;

    // Corregir tipo del id (number en lugar de string)
    updateItem: (id: number, newData: Partial<DataItem>) => void;

    // Métodos para theme
    getTheme: () => ThemeState;
    setTheme: (theme: Partial<ThemeState>) => void;
    setDark: (dark: boolean) => void;

    // Métodos para configured
    getCuadricula: () => boolean;
    setCuadricula: (cuadricula: boolean) => void;

    // Métodos para manejo de selección - corregir tipos
    getSelectItems: () => DataItem[];
    setSelectItems: (items: DataItem[]) => void;
    toggleSelectItem: (item: DataItem, uniqueKey?: keyof DataItem) => void;
    selectAllItems: () => void;
    clearSelection: () => void;
    isItemSelected: (item: DataItem, uniqueKey?: keyof DataItem) => boolean;
    getSelectAllState: () => 'none' | 'some' | 'all';
    toggleAllSelect: () => void;

}

const useGlobalZustand = create<GlobalZustanProps>()(
    devtools((set, get) => ({

        theme: {
            dark: false
        },

        configured: {
            rolUser: "DEV",
            cuadricula: false,
            select: true,
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

        estados: {
            ACTIVO: "ACTIVO",
            INACTIVO: "INACTIVO",
        },

        badges: {
            roles: {
                SUPER: { name: "SUPER", color: "#ef4444" },
                ESTANDAR: { name: "ESTANDAR", color: "blue" },
                DEV: { name: "DEV", color: "#020817" },
            },
            estados: {
                ACTIVO: { name: "ACTIVO", color: "#22c55e" },
                INACTIVO: { name: "INACTIVO", color: "#f97316" },
            }
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

        // MÉTODOS PARA MANEJO DE SELECCIÓN

        // Función para obtener los elementos seleccionados
        getSelectItems: () => get().data.selectItems,

        // Función para establecer directamente los elementos seleccionados
        setSelectItems: (items: DataItem[]) => set(
            (state) => ({
                data: {
                    ...state.data,
                    selectItems: items
                }
            }),
            false,
            'setSelectItems'
        ),

        // Corregir updateItem para usar number como id
        updateItem: (id: number, newData: Partial<DataItem>) => set(
            (state) => ({
                data: {
                    ...state.data,
                    items: state.data.items.map(item =>
                        item.id === id ? { ...item, ...newData } : item
                    )
                }
            }),
            false,
            'updateItem'
        ),

        // Función principal para alternar selección de un elemento
        toggleSelectItem: (item: DataItem, uniqueKey: keyof DataItem = 'id') => set(
            (state) => {
                const currentSelectItems = state.data.selectItems;
                const itemExists = currentSelectItems.some(selectedItem =>
                    selectedItem[uniqueKey] === item[uniqueKey]
                );

                let newSelectItems: DataItem[];
                if (itemExists) {
                    // Si existe, lo eliminamos (deseleccionar)
                    newSelectItems = currentSelectItems.filter(selectedItem =>
                        selectedItem[uniqueKey] !== item[uniqueKey]
                    );
                } else {
                    // Si no existe, lo agregamos (seleccionar)
                    newSelectItems = [...currentSelectItems, item];
                }

                return {
                    data: {
                        ...state.data,
                        selectItems: newSelectItems
                    }
                };
            },
            false,
            'toggleSelectItem'
        ),

        toggleAllSelect: () => set((state) => {
            const allSelected = state.data.selectItems.length === state.data.items.length && state.data.items.length > 0;
            return {
                data: {
                    ...state.data,
                    selectItems: allSelected ? [] : [...state.data.items]
                }
            };
        }, false, 'toggleAllSelect'),

        // Función para seleccionar todos los elementos
        selectAllItems: () => set(
            (state) => ({
                data: {
                    ...state.data,
                    selectItems: [...state.data.items]
                }
            }),
            false,
            'selectAllItems'
        ),

        // Función para limpiar toda la selección
        clearSelection: () => set(
            (state) => ({
                data: {
                    ...state.data,
                    selectItems: []
                }
            }),
            false,
            'clearSelection'
        ),

        // Función para verificar si un elemento está seleccionado
        isItemSelected: (item: DataItem, uniqueKey: keyof DataItem = 'id') => {
            const selectItems = get().data.selectItems;
            return selectItems.some(selectedItem =>
                selectedItem[uniqueKey] === item[uniqueKey]
            );
        },

        getSelectAllState: () => {
            const selectItems = get().getSelectItems();
            const totalItems = get().data.items;

            if (selectItems.length === 0) return 'none';
            if (selectItems.length === totalItems.length && totalItems.length > 0) return 'all';
            return 'some';
        },

    }),
        {
            name: 'global-store',
        }
    )
);

export { useGlobalZustand };
export type { DataItem, DataState, GlobalZustanProps, ThemeState };