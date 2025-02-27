import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';

const routes = {
  home: {
    path: '/',
    component: React.lazy(() => import('@/pages/Home/Home').then(m => ({ default: m.Home })))
  },
  settings: {
    path: '/settings',
    component: React.lazy(() => import('@/pages/Settings/Settings').then(m => ({ default: m.Settings })))
  },
  creditCards: {
    path: '/credit-cards',
    component: React.lazy(() => import('@/pages/CreditCards/CreditCards').then(m => ({ default: m.CreditCards })))
  }
} as const;

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.values(routes).map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </React.Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
