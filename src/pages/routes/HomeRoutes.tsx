// src/routes/homeRoutes.ts
import { RouteGroup } from './types';
import Home from "../docs/home/page";
import Gravatar from '../docs/gravatar/page';
import Nano from "../docs/nono/page";
import Ux from "../docs/ux/page";
import Img from "../docs/img/page";

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
    },
    {
       path: "/img",
      component: Img,
      key: "Img"
    }
  ]
};