// src/routes/wrapperRoutes.ts
import { RouteGroup } from '../../app/routes/types';
import ParticleWrapper from "../docs/wrapper/particulas/page";
import Grid from "../docs/wrapper/grid/page";
import AnimatedBackgroundWrapper from '../docs/wrapper/animated-background-wrapper/page';

export const WrapperRoutes: RouteGroup = {
  prefix: "/wrapper",
  routes: [
    {
      path: "/particulas",
      component: ParticleWrapper,
      key: "particles"
    },
    {
      path: "/grid",
      component: Grid,
      key: "grid"
    },
    {
      path: "/animated-background-wrapper",
      component: AnimatedBackgroundWrapper,
      key: "animated-bg"
    }
  ]
};