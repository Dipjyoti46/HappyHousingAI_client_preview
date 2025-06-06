import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import propgpt from './components/Propgpt'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <BrowserRouter basename="/HappyHousingAI">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propgpt" element={<propgpt />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
