import { BrowserRouter, Routes, Route } from 'react-router'

import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { Home } from '@/pages/Home/Home.tsx'
import { Settings } from '@/pages/Settings/Settings.tsx'
import { CreditCards } from '@/pages/CreditCards/CreditCards.tsx'

import {browserRoutes} from "@/consts";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={browserRoutes.home} element={<Home />} />
          <Route path={browserRoutes.settings} element={<Settings />} />
          <Route path={browserRoutes["credit-cards"]} element={<CreditCards />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App