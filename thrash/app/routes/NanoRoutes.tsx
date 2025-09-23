// src/routes/homeRoutes.ts
import { RouteGroup } from '../../../src/app/routers/types';

import Nano from "../docs/nano/page";
import Img from "../docs/nano/img/page";
import Squeleto from "../docs/nano/squeleto/page";
import A from "../docs/nano/a/page";
import Nanify from "../docs/nano/notify/page";

export const NanoRoutes: RouteGroup = {
    prefix: "/nano",
    routes: [
        {
            path: "",
            component: Nano,
            key: "nano"
        },
        {
            path: "/img",
            component: Img,
            key: "img"
        },
     
        {
            path: "/squeleto",
            component: Squeleto,
            key: "squeleto"
        },
        {
            path: "/img",
            component: Img,
            key: "Img"
        },
        {
            path: "/a",
            component: A,
            key: "a"
        },
        {
            path: "/nanify",
            component: Nanify,
            key: "nanify"
        }
    ]
};