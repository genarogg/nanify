// src/routes/index.tsx
import React from 'react';
import { Routes, Route as RouterRoute } from 'react-router-dom';
import { RouteGroup, RouteConfig } from './types';
import { HomeRoutes } from './HomeRoutes';
import { UxRoutes } from './UxRoutes';
import { NanoRoutes } from './NanoRoutes'
// import { ButtonRoutes } from './ButtonRoutes';
import { FormRoutes } from './FormRoutes';
import { DashboardLayout } from '.';
// import { SliderRoutes, cardRoutes, mediaRoutes } from './SliderRoutes';
// import { ColumnsRoutes, layoutRoutes } from './ColumnsRoutes';
// import { WrapperRoutes } from './WrapperRoutes';
// import { TableRoutes } from './TableRoutes';
// import { SectionRoutes, miscRoutes } from './SectionRoutes';

// Función para convertir RouteGroup a RouteConfig[]
const expandRouteGroup = (routeGroup: RouteGroup): RouteConfig[] => {
  return routeGroup.routes.map(route => ({
    ...route,
    path: routeGroup.prefix + route.path
  }));
};

// Combinar todas las rutas
const allRouteGroups: RouteGroup[] = [
  HomeRoutes,
  UxRoutes,
  NanoRoutes,
  // ButtonRoutes,
  FormRoutes,
  // SliderRoutes,
  // cardRoutes,
  // mediaRoutes,
  // ColumnsRoutes,
  // layoutRoutes,
  // WrapperRoutes,
  // TableRoutes,
  // SectionRoutes,
  // miscRoutes,
];

const allRoutes: RouteConfig[] = allRouteGroups.flatMap(expandRouteGroup);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {allRoutes.map(({ path, component: Component, key }) => (
        <RouterRoute key={key} path={path} element={<Component />} />
      ))}
      <RouterRoute path="*" element={<div>Página no encontrada - 404</div>} />
    </Routes>
  );
};