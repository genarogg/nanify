import { RouteGroup } from './types';
import Loki from "../docs/form/loki/page";



const FormRoutes: RouteGroup = {
    prefix: "/form",
    routes: [
        {
            path: "/loki",
            component: Loki,
            key: "Loki"
        },
    ]
};

export default FormRoutes