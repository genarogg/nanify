import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

/* ===== TIPOS BÁSICOS ===== */
type UserRole = "DEV" | "ESTANDAR" | "SUPER" | "Todos";
type UserStatus = "ACTIVO" | "INACTIVO" | "Todos";

/* ===== INTERFACES DE CONFIGURACIÓN ===== */
interface RoleConfig {
  DEV: "DEV";
  ESTANDAR: "ESTANDAR";
  SUPER: "SUPER";
}

interface StatusConfig {
  ACTIVO: "ACTIVO";
  INACTIVO: "INACTIVO";
}

/* ===== INTERFACES PARA BADGES ===== */
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

/* ===== INTERFACE PRINCIPAL DE DATOS ===== */
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

/* ===== INTERFACES DE FILTROS ===== */
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

/* ===== INTERFACES DE ESTADO ===== */
interface DataState {
  items: DataItem[];
  selectItems: DataItem[];
  page: number;
  totalPages: number;
  totalItems: number;
  loading: boolean;
  error: string | null;
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

/* ===== TIPO DE ESTADO DE SELECCIÓN ===== */
type SelectAllState = "none" | "some" | "all";

/* ===== INTERFACE DEL STORE ESTÁTICO ===== */
interface StaticGlobalProps {
  /* Estados estáticos */
  roles: RoleConfig;
  badges: BadgeConfig;
  estados: StatusConfig;
  configured: ConfiguredState;

  /* Cambia solo 'configured' */
  setConfigured: (value: Partial<ConfiguredState>) => void;
}

/* ===== INTERFACE DEL STORE DE FILTROS ===== */
interface GlobalFilterProps {
  filterValue: FilterValue;

  /* Métodos de búsqueda */
  getSearch: () => string;
  setSearch: (search: string) => void;

  /* Métodos de fecha */
  getDate: () => DateRange;
  setDate: (date: DateRange) => void;
  setDateStart: (start: string | null) => void;
  setDateEnd: (end: string | null) => void;

  /* Métodos de filtros */
  setRol: (rol: UserRole | "") => void;
  setEstado: (estado: UserStatus | "") => void;
  clearFilters: () => void;
}

/* ===== STORE ESTÁTICO ===== */
const useGlobalStatic = create<StaticGlobalProps>()(
  devtools(
    (set) => ({
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

/* ===== STORE DE FILTROS ===== */
const useGlobalFilter = create<GlobalFilterProps>()(
  devtools(
    immer((set, get) => ({
      filterValue: {
        search: "",
        date: { start: null, end: null },
        rol: "",
        estado: "",
      },

      /* ===== MÉTODOS DE BÚSQUEDA ===== */
      getSearch: () => get().filterValue.search,

      setSearch: (search: string) =>
        set((state) => {
          state.filterValue.search = search;
        }),

      /* ===== MÉTODOS DE FECHA ===== */
      getDate: () => get().filterValue.date,

      setDate: (date: DateRange) =>
        set((state) => {
          state.filterValue.date = date;
        }),

      setDateStart: (start: string | null) =>
        set((state) => {
          state.filterValue.date.start = start;
        }),

      setDateEnd: (end: string | null) =>
        set((state) => {
          state.filterValue.date.end = end;
        }),

      /* ===== MÉTODOS DE FILTROS ===== */
      setRol: (rol: UserRole | "") =>
        set((state) => {
          state.filterValue.rol = rol;
        }),

      setEstado: (estado: UserStatus | "") =>
        set((state) => {
          state.filterValue.estado = estado;
        }),

      clearFilters: () =>
        set((state) => {
          state.filterValue = {
            search: "",
            date: { start: null, end: null },
            rol: "",
            estado: "",
          };
        }),
    })),
    { name: "global-filter-store" }
  )
);

/* ===== INTERFACE DEL STORE GLOBAL DINÁMICO ===== */
interface GlobalZustanProps {
  data: DataState;

  /* Métodos de configuración */
  setData: (value: Partial<DataState>) => void;

  /* Métodos de items */
  updateItem: (id: number, newData: Partial<DataItem>) => void;

  /* Métodos de selección */
  getSelectItems: () => DataItem[];
  setSelectItems: (items: DataItem[]) => void;
  toggleSelectItem: (item: DataItem, uniqueKey?: keyof DataItem) => void;
  selectAllItems: () => void;
  clearSelection: () => void;
  isItemSelected: (item: DataItem, uniqueKey?: keyof DataItem) => boolean;
  getSelectAllState: () => SelectAllState;
  toggleAllSelect: () => void;
}

/* ===== STORE GLOBAL DINÁMICO ===== */
const useGlobal = create<GlobalZustanProps>()(
  devtools(
    immer((set, get) => ({
      data: {
        items: [],
        selectItems: [],
        page: 1,
        totalPages: 1,
        totalItems: 0,
        loading: true,
        error: null,
      },

      setData: (value: Partial<DataState>) =>
        set((state) => {
          Object.assign(state.data, value);
        }),

      /* ===== MÉTODOS DE ITEMS ===== */
      updateItem: (id: number, newData: Partial<DataItem>) =>
        set((state) => {
          const i = state.data.items.findIndex((item) => item.id === id);
          if (i !== -1) Object.assign(state.data.items[i], newData);
        }),

      /* ===== MÉTODOS DE SELECCIÓN ===== */
      getSelectItems: () => get().data.selectItems,

      setSelectItems: (items: DataItem[]) =>
        set((state) => {
          state.data.selectItems = items;
        }),

      toggleSelectItem: (item: DataItem, uniqueKey: keyof DataItem = "id") =>
        set((state) => {
          const { selectItems } = state.data;
          const index = selectItems.findIndex(
            (s) => s[uniqueKey] === item[uniqueKey]
          );

          if (index !== -1) {
            /* Remover */
            selectItems.splice(index, 1);
          } else {
            /* Agregar */
            selectItems.push(item);
          }
        }),

      toggleAllSelect: () =>
        set((state) => {
          const allSelected =
            state.data.selectItems.length === state.data.items.length &&
            state.data.items.length > 0;

          state.data.selectItems = allSelected ? [] : [...state.data.items];
        }),

      selectAllItems: () =>
        set((state) => {
          state.data.selectItems = [...state.data.items];
        }),

      clearSelection: () =>
        set((state) => {
          state.data.selectItems.length = 0;
        }),

      isItemSelected: (item: DataItem, uniqueKey: keyof DataItem = "id") =>
        get().data.selectItems.some(
          (s) => s[uniqueKey] === item[uniqueKey]
        ),

      getSelectAllState: (): SelectAllState => {
        const { selectItems, items } = get().data;
        if (selectItems.length === 0) return "none";
        if (selectItems.length === items.length && items.length > 0)
          return "all";
        return "some";
      },
    })),
    { name: "global-store" }
  )
);

/* ===== EXPORTS ===== */
export { useGlobal, useGlobalStatic, useGlobalFilter };

export type {
  DataItem,
  DataState,
  GlobalZustanProps,
  StaticGlobalProps,
  GlobalFilterProps,
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
  StatusConfig,
};