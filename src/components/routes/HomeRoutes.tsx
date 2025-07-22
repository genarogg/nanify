// src/routes/homeRoutes.ts
import { RouteGroup } from './types';
import Home from "../docs/ux/page";
import Gravatar from '../docs/gravatar/page';
import Nano from "../docs/nono/page";
import Ux from "../docs/ux/page";

export const HomeRoutes: RouteGroup = {
  prefix: "",
  routes: [
    {
      path: "/",
      component: Home,
      key: "home"
    },
    {
      path: "/gravatar",
      component: Gravatar,
      key: "gravatar"
    },
    {
      path: "/nano",
      component: Nano,
      key: "nano"
    },
     {
      path: "/ux",
      component: Ux,
      key: "Ux"
    }
  ]
};