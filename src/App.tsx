import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './components/Home'
import { MainLayout } from './components/layout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App