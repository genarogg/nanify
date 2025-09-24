import { RouteGroup } from './types';
import FormLoki from "../../../trash/app/docs/components/dashboard-layout/page";

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