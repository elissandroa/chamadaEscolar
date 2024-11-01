import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Home } from './pages/Home'
import { Students } from './pages/Students'
import { Instruments } from './pages/Instruments'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/students' element={<Students />} />
        <Route path='/instruments' element={<Instruments />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
