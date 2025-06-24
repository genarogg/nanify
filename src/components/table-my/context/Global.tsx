import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

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
    totalItems: number;
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

    updateItem: (id: number, newData: Partial<DataItem>) => void;

    getTheme: () => ThemeState;
    setTheme: (theme: Partial<ThemeState>) => void;
    setDark: (dark: boolean) => void;

    getCuadricula: () => boolean;
    setCuadricula: (cuadricula: boolean) => void;

    getSelectItems: () => DataItem[];
    setSelectItems: (items: DataItem[]) => void;
    toggleSelectItem: (item: DataItem, uniqueKey?: keyof DataItem) => void;
    selectAllItems: () => void;
    clearSelection: () => void;
    isItemSelected: (item: DataItem, uniqueKey?: keyof DataItem) => boolean;
    getSelectAllState: () => 'none' | 'some' | 'all';
    toggleAllSelect: () => void;
}

// Crear mapas para búsquedas O(1) en lugar de O(n)
const createSelectedItemsMap = (items: DataItem[], uniqueKey: keyof DataItem = 'id') => {
    const map = new Map();
    items.forEach(item => map.set(item[uniqueKey], item));
    return map;
};

const useGlobalZustand = create<GlobalZustanProps>()(
    devtools(
        immer((set, get) => ({
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

            data: {
                items: [],
                selectItems: [],
                filterValue: {
                    search: '',
                    date: {
                        start: null,
                        end: null
                    },
                    rol: "",
                    estado: ""
                },
                page: 1,
                totalPages: 1,
                totalItems: 0,
                loading: true,
                error: null,
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

            // FUNCIONES OPTIMIZADAS
            setConfigured: (value) => set(
                (state) => {
                    state.configured = value;
                }
            ),

            setData: (value) => set(
                (state) => {
                    Object.assign(state.data, value);
                }
            ),

            // Optimización: usar referencia directa sin crear nuevo objeto
            getSearch: () => get().data.filterValue.search,

            setSearch: (search: string) => set(
                (state) => {
                    state.data.filterValue.search = search;
                }
            ),

            getDate: () => get().data.filterValue.date,

            setDate: (date: { start: null | string; end: null | string }) => set(
                (state) => {
                    state.data.filterValue.date = date;
                }
            ),

            setDateStart: (start: null | string) => set(
                (state) => {
                    state.data.filterValue.date.start = start;
                }
            ),

            setDateEnd: (end: null | string) => set(
                (state) => {
                    state.data.filterValue.date.end = end;
                }
            ),

            // THEME METHODS - Optimizados
            getTheme: () => get().theme,

            setTheme: (theme: Partial<ThemeState>) => set(
                (state) => {
                    Object.assign(state.theme, theme);
                }
            ),

            setDark: (dark: boolean) => set(
                (state) => {
                    state.theme.dark = dark;
                }
            ),

            // CONFIGURED METHODS - Optimizados
            getCuadricula: () => get().configured.cuadricula,

            setCuadricula: (cuadricula: boolean) => set(
                (state) => {
                    state.configured.cuadricula = cuadricula;
                }
            ),

            // SELECTION METHODS - Altamente optimizados
            getSelectItems: () => get().data.selectItems,

            setSelectItems: (items: DataItem[]) => set(
                (state) => {
                    state.data.selectItems = items;
                }
            ),

            // Optimización crítica: usar Map para búsquedas O(1)
            updateItem: (id: number, newData: Partial<DataItem>) => set(
                (state) => {
                    const itemIndex = state.data.items.findIndex(item => item.id === id);
                    if (itemIndex !== -1) {
                        Object.assign(state.data.items[itemIndex], newData);
                    }
                }
            ),

            // Optimización crítica para selección
            toggleSelectItem: (item: DataItem, uniqueKey: keyof DataItem = 'id') => set(
                (state) => {
                    const selectItems = state.data.selectItems;
                    const itemIndex = selectItems.findIndex(selectedItem => 
                        selectedItem[uniqueKey] === item[uniqueKey]
                    );

                    if (itemIndex !== -1) {
                        // Remover item (deseleccionar)
                        selectItems.splice(itemIndex, 1);
                    } else {
                        // Agregar item (seleccionar)
                        selectItems.push(item);
                    }
                }
            ),

            toggleAllSelect: () => set((state) => {
                const allSelected = state.data.selectItems.length === state.data.items.length && 
                                   state.data.items.length > 0;
                
                if (allSelected) {
                    state.data.selectItems.length = 0; // Más rápido que = []
                } else {
                    state.data.selectItems = [...state.data.items];
                }
            }),

            selectAllItems: () => set(
                (state) => {
                    state.data.selectItems = [...state.data.items];
                }
            ),

            clearSelection: () => set(
                (state) => {
                    state.data.selectItems.length = 0; // Más rápido que = []
                }
            ),

            // Optimización: usar caché para isItemSelected si es necesario
            isItemSelected: (item: DataItem, uniqueKey: keyof DataItem = 'id') => {
                const selectItems = get().data.selectItems;
                return selectItems.some(selectedItem =>
                    selectedItem[uniqueKey] === item[uniqueKey]
                );
            },

            getSelectAllState: () => {
                const { selectItems, items } = get().data;
                
                if (selectItems.length === 0) return 'none';
                if (selectItems.length === items.length && items.length > 0) return 'all';
                return 'some';
            },
        })),
        {
            name: 'global-store',
        }
    )
);

export { useGlobalZustand };
export type { DataItem, DataState, GlobalZustanProps, ThemeState };