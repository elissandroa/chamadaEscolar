import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FormAddStudent } from './components/FormAddStudent.tsx'
import { Login } from './components/Login'
import { Addresses } from './pages/Addresses.tsx'
import { ClassRooms } from './pages/ClassRooms.tsx'
import { Disciplines } from './pages/Disciplines.tsx'
import { Graduations } from './pages/Graduations.tsx'
import { Home } from './pages/Home'
import { Instruments } from './pages/Instruments.tsx'
import { Registrations } from './pages/Registrations.tsx'
import { SchoolRollCalls } from './pages/SchoolRollCalls.tsx'
import { Schools } from './pages/Schools.tsx'
import { SchoolTests } from './pages/SchoolTests.tsx'
import { Students } from './pages/Students'
import { Teachers } from './pages/Teachers.tsx'
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
