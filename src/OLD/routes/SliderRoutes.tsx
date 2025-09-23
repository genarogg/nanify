// src/routes/mediaRoutes.ts
import { RouteGroup } from '../../app/routes/types';
import SliderBG from "../docs/slider/background/page";
import Youtube from '../docs/youtube/page';
import Img from "../../app/docs/img/page";
import CardProductoAlana from '../docs/card/alana-ecomerce/page';

export const SliderRoutes: RouteGroup = {
  prefix: "/slider",
  routes: [
    {
      path: "/background",
      component: SliderBG,
      key: "slider-bg"
    }
  ]
};

export const cardRoutes: RouteGroup = {
  prefix: "/card",
  routes: [
    {
      path: "/alana-ecomerce",
      component: CardProductoAlana,
      key: "card-alana"
    }
  ]
};

export const mediaRoutes: RouteGroup = {
  prefix: "",
  routes: [
    {
      path: "/youtube",
      component: Youtube,
      key: "youtube"
    },
    {
      path: "/img",
      component: Img,
      key: "img"
    }
  ]
};