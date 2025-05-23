import './App.css';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import NotFound from './pages/not_found/NotFound.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.tsx';

import { routesConfig } from './routesConfig.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import DynamicPages from './components/DynamicPages/DynamicPages.tsx';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/ro" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/:lang/" element={<Home />} />
            <Route path="/*" element={<DynamicPages />} />
            <Route path="*" element={<NotFound />} />

            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
