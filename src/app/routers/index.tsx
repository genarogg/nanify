import React from 'react';
import { Routes, Route as RouterRoute } from 'react-router-dom';
import LayoutDocs from '../../layout/layout';
import { RouteGroup, RouteConfig } from './types';


import HomeRoutes from './HomeRoutes';
import NanoRoutes from "./NanoRoutes"
import UxRoutes from './UxRoutes';
import WrapperRoutes from "./WrapperRoutes"
import SliderRoutes from "./SliderRoutes"
import SectionsRoutes from "./SectionsRoutes"
import FormRoutes from "./FormRoutes"
import LayoutRoutes from "./LayoutRoutes"

import ComponentePrueba from "../../components/layout/cleanDashboard"

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
    NanoRoutes,
    UxRoutes,
    WrapperRoutes,
    SliderRoutes,
    SectionsRoutes,
    FormRoutes,
    // LayoutRoutes
];

const allRoutes: RouteConfig[] = allRouteGroups.flatMap(expandRouteGroup);

const AppRoutes: React.FC = () => {
    return (
        <>
            {/* <LayoutDocs> */}
                <Routes>
                    <RouterRoute path="nuevo" element={<ComponentePrueba>Página no encontrada - 405</ComponentePrueba>} />
                    {allRoutes.map(({ path, component: Component, key }) => (
                        <RouterRoute key={key} path={path} element={<Component />} />
                    ))}
                    <RouterRoute path="*" element={<div>Página no encontrada - 404</div>} />
                </Routes>
            {/* </LayoutDocs> */}
        </>
    );
};

export default AppRoutes