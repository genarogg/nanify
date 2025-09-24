import { RouteGroup } from './types';
import Home from "../docs/layout/page";
import Gravatar from '../docs/gravatar/page';
import Ux from "../docs/ux/page";
import Tablet from "../docs/table/page"
import Youtube from '../docs/youtube/page';
import Tooltip from "../docs/tooltip/page"


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

    {
      path: "/tablet",
      component: Tablet,
      key: "tablet"
    },
    {
      path: "/youtube",
      component: Youtube,
      key: "youtube"
    },
    {
      path: "/tooltip",
      component: Tooltip,
      key: "tooltip"
    },
  ]
};

export default HomeRoutes