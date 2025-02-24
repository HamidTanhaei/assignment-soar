import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { Home } from './components/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
