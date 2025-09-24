import { RouteGroup } from './types';
import layoutClean from "../docs/layout/clean/page";



const LayoutRoutes: RouteGroup = {
    prefix: "/layout",
    routes: [
        {
            path: "/layout-clean",
            component: layoutClean,
            key: "layout-clean"
        },
    ]
};

export default LayoutRoutes