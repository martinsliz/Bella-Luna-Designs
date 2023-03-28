import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <main>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
