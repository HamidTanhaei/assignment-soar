import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from '@/routes/Home'
import { Settings } from '@/routes/Settings'
import { CreditCards } from '@/routes/CreditCards'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
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