import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from '@/routes/Home'
import { Settings } from '@/routes/Settings'
import { CreditCards } from '@/routes/CreditCards'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/credit-cards" element={<CreditCards />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App