import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import AdminDashboard from '../Layout/AdminDashboard'
import Random from '../components/Random'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import DoctorDashboard from '../Layout/DoctorDashboard'
import PatientDashboard from '../Layout/PatientDashboard'
import PatientProfilePage from '../pages/Patient/PatientProfilePage'
import DoctorProfilePage from '../pages/doctor/DoctorProfilePage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
          <Route path='/register' element={<PublicRoute><RegisterPage/></PublicRoute>}/>
          <Route path='/' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}>
               <Route path="/dashboard" element={<Random />}/>
                <Route path="/pharmacy" element={<Random />}/>
                 <Route path="/patients" element={<Random />}/>
                  <Route path="/doctors" element={<Random />}/>
          </Route>
            <Route path='/doctor' element={<ProtectedRoute><DoctorDashboard/></ProtectedRoute>}>
               <Route path="dashboard" element={<Random />}/>
               <Route path="profile" element={<DoctorProfilePage />}/>
                <Route path="pharmacy" element={<Random />}/>
                 <Route path="patients" element={<Random />}/>
                  <Route path="appointment" element={<Random />}/>
          </Route>
            <Route path='/patient' element={<ProtectedRoute><PatientDashboard/></ProtectedRoute>}>
                
               <Route path="dashboard" element={<Random />}/>
               <Route path="profile" element={<PatientProfilePage />}/>
                <Route path="appointment" element={<Random />}/>
                 <Route path="book" element={<Random />}/>
                 
          </Route>

        
        </Routes>
      
    </BrowserRouter>
  )
}

export default AppRoutes