// src/routes/tableRoutes.ts
import { RouteGroup } from '../../routes/types';
import TabletPage from '../docs/tablet/page';
import TabletMyPage from '../docs/tablet-my/page';

export const TableRoutes: RouteGroup = {
  prefix: "/table",
  routes: [
    {
      path: "",
      component: TabletPage,
      key: "tablet"
    },
    {
      path: "-my",
      component: TabletMyPage,
      key: "tablet-my"
    }
  ]
};