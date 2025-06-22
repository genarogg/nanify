import { useCallback } from "react";
import { useGlobalZustand } from "../Global";



const useData = () => {
    const { API, data, setData } = useGlobalZustand();

    // Traer datos paginados
    const fetchData = useCallback(async (page: number = 1, limit: number = 20) => {
        setData({ loading: true });
        try {
            const res = await fetch(`${API}?_page=${page}&_limit=${limit}`);
            const json = await res.json();

            // Si usas json-server, los datos están en json.data
            setData({
                items: json.data || [],
                page,
                loading: false,
                // Puedes calcular totalPages si json-server te da el header x-total-count
                // totalPages: Math.ceil(total / limit)
            });
        } catch (error) {
            setData({ loading: false });
            // Manejo de error opcional
        }
    }, [setData]);

    return {
        data,
        fetchData,
    };
};

export default useData;