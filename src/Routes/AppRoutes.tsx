import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import AdminDashboard from '../Layout/AdminDashboard'
import Random from '../components/Random'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import DoctorDashboard from '../Layout/DoctorDashboard'
import PatientDashboard from '../Layout/PatientDashboard'
import StudentProfilePage from '../pages/student/StudentProfilePage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<PublicRoute><HomePage/></PublicRoute>}/>
          <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
          <Route path='/register' element={<PublicRoute><RegisterPage/></PublicRoute>}/>
          <Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}>
               <Route path="dashboard" element={<Random />}/>
                <Route path="pharmacy" element={<Random />}/>
                 <Route path="patients" element={<Random />}/>
                  <Route path="doctors" element={<Random />}/>
          </Route>
            <Route path='/student' element={<ProtectedRoute><DoctorDashboard/></ProtectedRoute>}>
               <Route path="dashboard" element={<Random />}/>
               <Route path="profile" element={<StudentProfilePage />}/>
                <Route path="applications" element={<Random />}/>
                 <Route path="internships" element={<Random />}/>
                  <Route path="favorites" element={<Random />}/>
            <Route path="evaluations" element={<Random />}/>

          </Route>
          <Route path='/company' element={<ProtectedRoute><DoctorDashboard/></ProtectedRoute>}>
               <Route path="dashboard" element={<Random />}/>
               <Route path="profile" element={<Random />}/>
                <Route path="offres" element={<Random />}/>
                 <Route path="applications" element={<Random />}/>
                  <Route path="interns" element={<Random />}/>
          </Route>
            <Route path='/department' element={<ProtectedRoute><PatientDashboard/></ProtectedRoute>}>
                
               <Route path="dashboard" element={<Random />}/>
               <Route path="profile" element={<Random />}/>
                <Route path="applications" element={<Random />}/>
                 <Route path="interns" element={<Random />}/>
                 
          </Route>

        
        </Routes>
      
    </BrowserRouter>
  )
}

export default AppRoutes