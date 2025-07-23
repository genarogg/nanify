// src/routes/formRoutes.ts
import { RouteGroup } from '../../../pages/routes/types';
import FormLoki from "../docs/form/form-loki/page";

export const FormRoutes: RouteGroup = {
  prefix: "/form",
  routes: [
    {
      path: "/form-loki",
      component: FormLoki,
      key: "form-loki"
    }
  ]
};