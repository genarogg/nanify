// src/routes/homeRoutes.ts
import { RouteGroup } from './types';

import SliderBackground from "../docs/slider/page";


const SliderRoutes: RouteGroup = {
    prefix: "/slider",
    routes: [
        {
            path: "/slider-background",
            component: SliderBackground,
            key: "SliderBackground"
        },
    
    ]
};

export default SliderRoutes