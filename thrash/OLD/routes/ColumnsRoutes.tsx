// src/routes/layoutRoutes.ts
import { RouteGroup } from '../../../src/app/routers/types';
import ThreeColumns from '../docs/three-colunm/page';
import TwoColumns from '../docs/two-colunm/page';
import LayoutExample from '../docs/layout-example/page';
import LayoutClean from '../docs/layout/clean/page';

export const ColumnsRoutes: RouteGroup = {
  prefix: "/columns",
  routes: [
    {
      path: "/three",
      component: ThreeColumns,
      key: "three-columns"
    },
    {
      path: "/two",
      component: TwoColumns,
      key: "two-columns"
    }
  ]
};

export const layoutRoutes: RouteGroup = {
  prefix: "/layout",
  routes: [
    {
      path: "/example",
      component: LayoutExample,
      key: "layout-example"
    },
    {
      path: "/clean",
      component: LayoutClean,
      key: "layout-clean"
    }
  ]
};