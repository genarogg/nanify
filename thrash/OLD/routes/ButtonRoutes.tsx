// src/routes/buttonRoutes.ts
import { RouteGroup } from '../../../src/app/routers/types';
import Hamburger from "../docs/btns/hamburguesa/page";
import BtnBasico from "../docs/btns/basico/page";

export const ButtonRoutes: RouteGroup = {
  prefix: "/btns",
  routes: [
    {
      path: "/hamburguesa",
      component: Hamburger,
      key: "hamburger"
    },
    {
      path: "/basico",
      component: BtnBasico,
      key: "btn-basico"
    }
  ]
};