import { useCallback } from "react";
import { useGlobalZustand } from "../Global";
import dataFake from "./data-fake";



const useData = () => {
    const { setData } = useGlobalZustand();
    const API = "http://localhost:3001/usuarios";

    const initialData = useCallback(async (page: number = 1, limit: number = 20) => {
        setData({ loading: true });
        try {
            console.log("Data fetched:", dataFake);
            const res = await fetch(`${API}?_page=${page}&_limit=${limit}`);
            const json = await res.json();


            setData({
                items: json.data.reverse() || [],
                page,
                loading: false,
            });
        } catch (error) {
            setData({
                items: dataFake.usuarios.data.reverse(),
                page,
                loading: false,
            });
            setData({ loading: false });
        }
    }, [setData]);

    return { initialData };
};

export default useData;