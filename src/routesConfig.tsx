// routesConfig.tsx
import React from 'react';
import MisionVision from './pages/mision-vision/MisionVision.tsx';
import Awards from './pages/awards/Awards.tsx';
import Values from './pages/values/Values.tsx';
import Directors from './pages/directors/Directors.tsx';
import Logotypes from './pages/logotypes/Logotypes.tsx';
import Strategy from './pages/strategy/Strategy.tsx';
import News from './pages/news/News.tsx';
import Faq from './pages/faq/Faq.tsx';
import Contact from './pages/contact/Contact.tsx';

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
  {
    path: '/:lang/strategy',
    i18nKey: 'home.title',
    element: React.createElement(Strategy),
  },
  {
    path: '/:lang/news',
    i18nKey: 'home.title',
    element: React.createElement(News),
  },
  {
    path: '/:lang/faq',
    i18nKey: 'home.title',
    element: React.createElement(Faq),
  },
  {
    path: '/:lang/contact',
    i18nKey: 'home.title',
    element: React.createElement(Contact),
  },
];
