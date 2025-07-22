import { ComponentType } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentType;
  key: string;
}

export interface RouteGroupItem {
  path: string;
  component: ComponentType;
  key: string;
}

export interface RouteGroup {
  prefix: string;
  routes: RouteGroupItem[];
}
