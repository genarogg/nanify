import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Tipos para el estado de autenticación
interface AuthState {
  token: string;
  loading: boolean;
  isAuthenticated: boolean;

  // acciones
  login: (tokenData: { token: string }) => void;
  logout: () => void;
  verifyAuth: () => Promise<void>;
}

// --- helpers para manejar localStorage ---
const isLocalStorageAvailable = (): boolean => {
  try {
    return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  } catch {
    return false;
  }
};

const getTokenFromStorage = (): string => {
  if (isLocalStorageAvailable()) {
    return localStorage.getItem("auth_token") || "";
  }
  return "";
};

const saveTokenToStorage = (token: string): void => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("auth_token", token);
  }
};

const removeTokenFromStorage = (): void => {
  if (isLocalStorageAvailable()) {
    localStorage.removeItem("auth_token");
  }
};

// --- estado global con zustand + devtools ---
export const useAuthStore = create<AuthState>()(
  devtools((set, get) => ({
    token: getTokenFromStorage(),
    loading: true,
    isAuthenticated: false,

    login: ({ token }) => {
      saveTokenToStorage(token);
      set(
        {
          token,
          loading: false,
          isAuthenticated: true,
        },
        false,
        "auth/login" // <- Nombre de acción que se ve en Redux DevTools
      );
      console.log("Login exitoso");
    },

    logout: () => {
      removeTokenFromStorage();
      set(
        {
          token: "",
          loading: false,
          isAuthenticated: false,
        },
        false,
        "auth/logout"
      );
      console.log("Sesión cerrada");
    },

    verifyAuth: async () => {
      try {
        const storedToken = getTokenFromStorage();

        if (!storedToken) {
          removeTokenFromStorage();
          set(
            {
              token: "",
              loading: false,
              isAuthenticated: false,
            },
            false,
            "auth/verifyAuth/failure-no-token"
          );
          return;
        }

        const response = await fetch("/api/auth/verify", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          if (!get().token) {
            set(
              {
                token: storedToken,
                loading: false,
                isAuthenticated: true,
              },
              false,
              "auth/verifyAuth/success-new-token"
            );
          } else {
            set(
              {
                loading: false,
                isAuthenticated: true,
              },
              false,
              "auth/verifyAuth/success"
            );
          }
        } else {
          removeTokenFromStorage();
          set(
            {
              token: "",
              loading: false,
              isAuthenticated: false,
            },
            false,
            "auth/verifyAuth/failure"
          );
        }
      } catch (error) {
        console.error("Error verificando token:", error);
        removeTokenFromStorage();
        set(
          {
            token: "",
            loading: false,
            isAuthenticated: false,
          },
          false,
          "auth/verifyAuth/error"
        );
      }
    },
  }))
);
