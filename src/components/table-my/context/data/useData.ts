import { useCallback } from "react";
import { useGlobalZustand } from "../Global";



const useData = () => {
    const { setData } = useGlobalZustand();
    const API = "http://localhost:3001/usuarios";

    const fetchData = useCallback(async (page: number = 1, limit: number = 20) => {
        setData({ loading: true });
        try {
            const res = await fetch(`${API}?_page=${page}&_limit=${limit}`);
            const json = await res.json();

            setData({
                items: json.data || [],
                page,
                loading: false,
            });
        } catch (error) {
            setData({ loading: false });
        }
    }, [setData]);

    return { fetchData };
};

export default useData;