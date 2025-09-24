import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Definimos la interfaz para el estado
interface Usuario {
    nombre: string;
    rol: "string"
}

interface AuthState {
    usuario: Usuario | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;

    // acciones
    setLogin: ({ usuario, token }: { usuario: Usuario; token: string }) => void;
    logout: () => void;
    setLoading: (value: boolean) => void;
}

// Creamos el store con soporte para Redux DevTools
export const useAuthStore = create<AuthState>()(
    devtools((set) => ({
        usuario: null,
        token: null,
        isAuthenticated: false,
        loading: true,

        setLogin: ({ usuario, token }) =>
            set(
                {
                    usuario,
                    token,
                    isAuthenticated: true,
                    loading: false,
                },
                false,
                "auth/login"
            ),

        logout: () =>
            set(
                {
                    usuario: null,
                    token: null,
                    isAuthenticated: false,
                    loading: false,
                },
                false,
                "auth/logout"
            ),

        setLoading: (value) =>
            set(
                {
                    loading: value,
                },
                false,
                "auth/setLoading"
            ),
    }))
);
