import { RouteGroup } from './types';
import Home from "../docs/home/page";
import Gravatar from '../docs/gravatar/page';
import Ux from "../docs/ux/page";



const HomeRoutes: RouteGroup = {
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
      path: "/ux",
      component: Ux,
      key: "Ux"
    },

  ]
};

export default HomeRoutes