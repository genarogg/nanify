import { create } from 'zustand';

interface DataState {
    items: any[];
    search: string;
    filter: any[];
    page: number;
    totalPages: number;
    loading: boolean;
}

interface GlobalZustanProps {
    configured: any;
    setConfigured: (value: any) => void;
    data: DataState;
    setData: (value: Partial<DataState>) => void;
    API: string;
}

const useGlobalZustand = create<GlobalZustanProps>((set) => {
    return {
        API: "http://localhost:3001/usuarios",
        configured: null,
        data: {
            items: [],
            search: "",
            filter: [],
            page: 1,
            totalPages: 1,
            loading: true,
            error: null,

        },
        setConfigured: (value) => set({ configured: value }),
        
        setData: (value) => set((state) => ({
            data: { ...state.data, ...value }
        })),
    };
});

export { useGlobalZustand };