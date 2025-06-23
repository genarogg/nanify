import { useCallback } from "react";
import { useGlobalZustand } from "../Global";



const useData = () => {
    const { setData } = useGlobalZustand();
    const API = "http://localhost:3001/usuarios";

    const initialData = useCallback(async (page: number = 1, limit: number = 20) => {
        setData({ loading: true });
        try {
            const res = await fetch(`${API}?_page=${page}&_limit=${limit}`);
            const json = await res.json();

            setData({
                items: json.data.reverse() || [],
                page,
                loading: false,
            });
        } catch (error) {
            setData({ loading: false });
        }
    }, [setData]);

    return { initialData };
};

export default useData;