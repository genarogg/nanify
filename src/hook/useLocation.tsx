import { useLocation } from 'react-router-dom';

// Opción 1: Hook personalizado para usar dentro de componentes de React
const useRouteDetector = () => {
    const location = useLocation();

    const isCurrentRoute = (url: string): boolean => {
        return location.pathname === url;
    };

    // Versión más flexible que permite coincidencias parciales
    const isRouteMatch = (url: string, exact: boolean = true): boolean => {
        if (exact) {
            return location.pathname === url;
        }
        return location.pathname.startsWith(url);
    };

    return {
        isCurrentRoute,
        isRouteMatch,
        currentPath: location.pathname,
        fullLocation: location
    };
};

export default useRouteDetector;