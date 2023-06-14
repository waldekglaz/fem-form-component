import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Home, Plan, AddOns, Summary } from './pages'

function App() {
  return (
    <main className="relative min-h-screen bg-blue-50 lg:flex justify-center items-center">
      <div className="bg-white lg:flex lg:w-[940px] lg:h-[600px] rounded-xl lg:p-4 lg:relative">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plan" element={<Plan />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
