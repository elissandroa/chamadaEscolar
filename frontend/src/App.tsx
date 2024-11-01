import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Home } from './pages/Home'
import { Students } from './pages/Students'
import { Instruments } from './pages/Instruments.tsx'
import { Teachers } from './pages/Teachers.tsx'
import { Disciplines } from './pages/Disciplines.tsx'
import { SchoolTests } from './pages/SchoolTests.tsx'
import { ClassRooms } from './pages/ClassRooms.tsx'
import { SchoolRollCalls } from './pages/SchoolRollCalls.tsx'
import { Addresses } from './pages/Addresses.tsx'
import { Registrations } from './pages/Registrations.tsx'
import { Schools } from './pages/Schools.tsx'
import { Graduations } from './pages/Graduations.tsx'
import { Tutors } from './pages/Tutors.tsx'
import { Users } from './pages/Users.tsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>


        <Route path='/users' element={<Users />} />
        <Route path='/students' element={<Students />} />
        <Route path='/tutors' element={<Tutors />} />
        <Route path='/graduations' element={<Graduations />} />
        <Route path='/schools' element={<Schools />} />
        <Route path='/registrations' element={<Registrations />} />
        <Route path='/addresses' element={<Addresses />} />
        <Route path='/schoolrollcalls' element={<SchoolRollCalls />} />
        <Route path='/classrooms' element={<ClassRooms />} />
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
