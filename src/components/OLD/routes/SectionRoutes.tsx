// src/routes/sectionRoutes.ts
import { RouteGroup } from '../../routes/types';
import MainContent from '@/components/OLD/sections/dinamicSection/index';


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

