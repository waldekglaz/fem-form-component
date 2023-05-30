import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <main className="relative min-h-screen bg-blue-50">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="plan" element={<div>Plan</div>} />
        <Route path="add-ons" element={<div>add-ons</div>} />
        <Route path="summary" element={<div>summary</div>} />
      </Routes>
    </main>
  )
}

export default App
