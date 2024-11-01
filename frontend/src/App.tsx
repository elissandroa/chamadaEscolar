import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Home } from './pages/Home'
import { Students } from './pages/Students'
import { Instruments } from './pages/Instruments.tsx'
import { Teachers } from './pages/Teachers.tsx'
import { Disciplines } from './pages/Disciplines.tsx'
import { SchoolTests } from './pages/SchoolTests.tsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>


        <Route path='/students' element={<Students />} />
        <Route path='/schooltests' element={<SchoolTests />} />
        <Route path='/disciplines' element={<Disciplines />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/instruments' element={<Instruments />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
