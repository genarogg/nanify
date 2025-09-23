import React from 'react';
import { Routes, Route as RouterRoute } from 'react-router-dom';
import { RouteGroup, RouteConfig } from './types';

import HomeRoutes from './HomeRoutes';


// Función para convertir RouteGroup a RouteConfig[]
const expandRouteGroup = (routeGroup: RouteGroup): RouteConfig[] => {
    return routeGroup.routes.map((route: any) => ({
        ...route,
        path: routeGroup.prefix + route.path
    }));
};

// Combinar todas las rutas
const allRouteGroups: RouteGroup[] = [
    HomeRoutes,
];

const allRoutes: RouteConfig[] = allRouteGroups.flatMap(expandRouteGroup);

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {allRoutes.map(({ path, component: Component, key }) => (
                <RouterRoute key={key} path={path} element={<Component />} />
            ))}
            <RouterRoute path="*" element={<div>Página no encontrada - 404</div>} />
        </Routes>
    );
};

export default AppRoutes