// src/routes/uxRoutes.ts
import { RouteGroup } from './types';
import ModalPage from '../docs/ux/modal/page';
import SelectPage from '../docs/ux/select/page';
import TabsPage from '../docs/ux/tabs/page';
import BtnPage from '../docs/ux/btns/page';

export const UxRoutes: RouteGroup = {
  prefix: "/ux",
  routes: [
    {
      path: "/modal",
      component: ModalPage,
      key: "modal"
    },
    {
      path: "/select",
      component: SelectPage,
      key: "select"
    },
    {
      path: "/tabs",
      component: TabsPage,
      key: "tabs"
    },
    {
      path: "/btns",
      component: BtnPage,
      key: "ux-btns"
    }
  ]
};