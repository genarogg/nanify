// src/routes/sectionRoutes.ts
import { RouteGroup } from '../../pages/routes/types';
import MainContent from '@/OLD/sections/dinamicSection/index';


export const SectionRoutes: RouteGroup = {
  prefix: "/section",
  routes: [
    {
      path: "/dinamicSection",
      component: MainContent,
      key: "dinamic-section"
    }
  ]
};

