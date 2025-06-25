import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// ===== TIPOS BÁSICOS =====
type UserRole = "DEV" | "ESTANDAR" | "SUPER" | "Todos";

// ===== INTERFACES DE CONFIGURACIÓN =====
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

// ===== INTERFACE DEL STORE DE CONFIGURACIÓN =====
interface ConfigZustanProps {
    // Estado de configuración
    configured: ConfiguredState;

    // Método principal para configurar todo de una vez
    setConfigured: (value: Partial<ConfiguredState>) => void;
}

// ===== CONFIGURACIÓN INICIAL =====
const initialConfigState: ConfiguredState = {
    rolUser: "DEV",
    cuadricula: false,
    select: true,
    columns: [],
    rowActions: [],
    headerFilter: [],
    headerActions: [],
    footerActions: [],
};

// ===== IMPLEMENTACIÓN DEL STORE =====
const useConfigZustand = create<ConfigZustanProps>()(
    devtools(
        immer((set) => ({
            // Estado inicial
            configured: initialConfigState,

            // ===== MÉTODO PRINCIPAL DE CONFIGURACIÓN =====
            setConfigured: (value: Partial<ConfiguredState>) => set(
                (state) => {
                    Object.assign(state.configured, value);
                }
            ),
        })),
        {
            name: 'config-store',
        }
    )
);

export { useConfigZustand };
export type {
    ConfiguredState,
    ColumnConfig,
    ActionConfig,
    ConfigZustanProps,
    UserRole
};