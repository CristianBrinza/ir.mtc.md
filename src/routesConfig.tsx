// routesConfig.tsx
import React from 'react';
import MisionVision from './pages/mision-vision/MisionVision.tsx';
import Awards from './pages/awards/Awards.tsx';
import Values from './pages/values/Values.tsx';
import Directors from './pages/directors/Directors.tsx';
import Logotypes from './pages/logotypes/Logotypes.tsx';

export interface RouteConfig {
  path: string;
  i18nKey: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  // { path: '/', i18nKey: 'home.title', element: React.createElement(Values) },
  {
    path: '/:lang/awards',
    i18nKey: 'home.title',
    element: React.createElement(Awards),
  },
  {
    path: '/:lang/mision-vision',
    i18nKey: 'home.title',
    element: React.createElement(MisionVision),
  },
  {
    path: '/:lang/values',
    i18nKey: 'home.title',
    element: React.createElement(Values),
  },
  {
    path: '/:lang/directors',
    i18nKey: 'home.title',
    element: React.createElement(Directors),
  },
  {
    path: '/:lang/logotypes',
    i18nKey: 'home.title',
    element: React.createElement(Logotypes),
  },
];
