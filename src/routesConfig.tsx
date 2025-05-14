// routesConfig.tsx
import React from 'react';
import MisionVision from './pages/mision-vision/MisionVision.tsx';
import Awards from './pages/awards/Awards.tsx';

export interface RouteConfig {
  path: string;
  i18nKey: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  // { path: '/', i18nKey: 'home.title', element: React.createElement(MisionVision) },
  {
    path: '/:lang/awards',
    i18nKey: 'home.title',
    element: React.createElement(Awards),
  },
  {
    path: '/:lang/mission-vision',
    i18nKey: 'home.title',
    element: React.createElement(MisionVision),
  },
];
