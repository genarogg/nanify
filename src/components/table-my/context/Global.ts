import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// ===== TIPOS BÁSICOS =====
type UserRole = "DEV" | "ESTANDAR" | "SUPER" | "Todos";
type UserStatus = "ACTIVO" | "INACTIVO" | "Todos";

// ===== INTERFACES DE CONFIGURACIÓN =====
interface RoleConfig {
    DEV: "DEV";
    ESTANDAR: "ESTANDAR";
    SUPER: "SUPER";
}

interface StatusConfig {
    ACTIVO: "ACTIVO";
    INACTIVO: "INACTIVO";
}

// ===== INTERFACES PARA BADGES =====
interface RoleBadge {
    name: string;
    color: string;
}

interface StatusBadge {
    name: string;
    color: string;
}

interface RoleBadges {
    SUPER: RoleBadge;
    ESTANDAR: RoleBadge;
    DEV: RoleBadge;
}

interface StatusBadges {
    ACTIVO: StatusBadge;
    INACTIVO: StatusBadge;
}

interface BadgeConfig {
    roles: RoleBadges;
    estados: StatusBadges;
}

// ===== INTERFACE PRINCIPAL DE DATOS =====
interface DataItem {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
    cedula: string;
    rol: UserRole;
    estado: UserStatus;
    limite: number;
    doc: string;
}

// ===== INTERFACES DE FILTROS =====
interface DateRange {
    start: string | null;
    end: string | null;
}

interface FilterValue {
    search: string;
    date: DateRange;
    rol: UserRole | "";
    estado: UserStatus | "";
}

// ===== INTERFACES DE ESTADO =====
interface DataState {
    items: DataItem[];
    selectItems: DataItem[];
    filterValue: FilterValue;
    page: number;
    totalPages: number;
    totalItems: number;
    loading: boolean;
    error: string | null;
}

interface ThemeState {
    dark: boolean;
}

interface ColumnConfig {
    column: string;
}

interface ActionConfig {
    name: string;
    type: string;
}

interface ConfiguredState {
    rolUser: UserRole;
    cuadricula: boolean;
    select: boolean;
    columns: ColumnConfig[];
    rowActions: ActionConfig[];
    headerFilter: string[];
    headerActions: string[];
    footerActions: string[];
}

// ===== TIPO DE ESTADO DE SELECCIÓN =====
type SelectAllState = 'none' | 'some' | 'all';

// ===== INTERFACE DEL STORE ESTÁTICO =====
interface StaticGlobalProps {
    // Estados estáticos
    roles: RoleConfig;
    badges: BadgeConfig;
    estados: StatusConfig;
    theme: ThemeState;
    configured: ConfiguredState;
}

// ===== INTERFACE DEL STORE GLOBAL =====
interface GlobalZustanProps {
    // Estados dinámicos
    data: DataState;

    // Métodos de configuración
    setData: (value: Partial<DataState>) => void;

    // Métodos de búsqueda
    getSearch: () => string;
    setSearch: (search: string) => void;

    // Métodos de fecha
    getDate: () => DateRange;
    setDate: (date: DateRange) => void;
    setDateStart: (start: string | null) => void;
    setDateEnd: (end: string | null) => void;

    // Métodos de items
    updateItem: (id: number, newData: Partial<DataItem>) => void;

    // Métodos de selección
    getSelectItems: () => DataItem[];
    setSelectItems: (items: DataItem[]) => void;
    toggleSelectItem: (item: DataItem, uniqueKey?: keyof DataItem) => void;
    selectAllItems: () => void;
    clearSelection: () => void;
    isItemSelected: (item: DataItem, uniqueKey?: keyof DataItem) => boolean;
    getSelectAllState: () => SelectAllState;
    toggleAllSelect: () => void;
}

// ===== STORE ESTÁTICO =====
// ===== INTERFACE DEL STORE ESTÁTICO =====
interface StaticGlobalProps {
    // Estados estáticos
    roles: RoleConfig;
    badges: BadgeConfig;
    estados: StatusConfig;
    theme: ThemeState;
    configured: ConfiguredState;

    // Nuevo método: cambia solo 'configured'
    setConfigured: (value: Partial<ConfiguredState>) => void;
}

// ===== STORE ESTÁTICO =====
const useGlobalStatic = create<StaticGlobalProps>()(
    devtools(
        (set, get) => ({
            // --- estado inicial ---
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

            // Configuraciones tipadas (estáticas)
            roles: {
                SUPER: "SUPER",
                ESTANDAR: "ESTANDAR",
                DEV: "DEV",
            } as RoleConfig,

            estados: {
                ACTIVO: "ACTIVO",
                INACTIVO: "INACTIVO",
            } as StatusConfig,

            badges: {
                roles: {
                    SUPER: { name: "SUPER", color: "#ef4444" },
                    ESTANDAR: { name: "ESTANDAR", color: "#3b82f6" },
                    DEV: { name: "DEV", color: "#020817" },
                },
                estados: {
                    ACTIVO: { name: "ACTIVO", color: "#22c55e" },
                    INACTIVO: { name: "INACTIVO", color: "#f97316" },
                },
            } as BadgeConfig,

            // --- nuevo método ---
            setConfigured: (value) =>
                set((state) => ({
                    configured: {
                        ...state.configured,
                        ...value,
                    },
                })),
        }),
        { name: "static-global-store" }
    )
);


// ===== STORE GLOBAL DINÁMICO =====
const useGlobal = create<GlobalZustanProps>()(
    devtools(
        immer((set, get) => ({

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



            setData: (value: Partial<DataState>) => set(
                (state) => {
                    Object.assign(state.data, value);
                }
            ),

            // ===== MÉTODOS DE BÚSQUEDA =====
            getSearch: () => get().data.filterValue.search,

            setSearch: (search: string) => set(
                (state) => {
                    state.data.filterValue.search = search;
                }
            ),

            // ===== MÉTODOS DE FECHA =====
            getDate: () => get().data.filterValue.date,

            setDate: (date: DateRange) => set(
                (state) => {
                    state.data.filterValue.date = date;
                }
            ),

            setDateStart: (start: string | null) => set(
                (state) => {
                    state.data.filterValue.date.start = start;
                }
            ),

            setDateEnd: (end: string | null) => set(
                (state) => {
                    state.data.filterValue.date.end = end;
                }
            ),

            // ===== MÉTODOS DE ITEMS =====
            updateItem: (id: number, newData: Partial<DataItem>) => set(
                (state) => {
                    const itemIndex = state.data.items.findIndex(item => item.id === id);
                    if (itemIndex !== -1) {
                        Object.assign(state.data.items[itemIndex], newData);
                    }
                }
            ),

            // ===== MÉTODOS DE SELECCIÓN =====
            getSelectItems: () => get().data.selectItems,

            setSelectItems: (items: DataItem[]) => set(
                (state) => {
                    state.data.selectItems = items;
                }
            ),

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
                    state.data.selectItems.length = 0;
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
                    state.data.selectItems.length = 0;
                }
            ),

            isItemSelected: (item: DataItem, uniqueKey: keyof DataItem = 'id'): boolean => {
                const selectItems = get().data.selectItems;
                return selectItems.some(selectedItem =>
                    selectedItem[uniqueKey] === item[uniqueKey]
                );
            },

            getSelectAllState: (): SelectAllState => {
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

// ===== EXPORTS =====
export { useGlobal, useGlobalStatic };

export type {
    DataItem,
    DataState,
    GlobalZustanProps,
    StaticGlobalProps,
    ThemeState,
    ConfiguredState,
    FilterValue,
    DateRange,
    UserRole,
    UserStatus,
    RoleBadge,
    StatusBadge,
    BadgeConfig,
    SelectAllState,
    RoleConfig,
    StatusConfig
};