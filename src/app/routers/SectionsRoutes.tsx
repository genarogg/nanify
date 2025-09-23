import { RouteGroup } from './types';

import ThreeColumns from "../docs/secctions/three-column/page"
import TwoColumns from '../docs/secctions/two-column/page';
import SimpleTitle from "../docs/secctions/title/page"


const SectionsRoutes: RouteGroup = {
  prefix: "/sections",
  routes: [
    {
      path: "/three-columns",
      component: ThreeColumns,
      key: "ThreeColumns"
    },
    {
      path: "/two-columns",
      component: TwoColumns,
      key: "TwoColumns"
    },

    {
      path: "/simple-title",
      component: SimpleTitle,
      key: "SimpleTitle"
    },
  ]
};

export default SectionsRoutes