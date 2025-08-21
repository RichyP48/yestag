import React from 'react'
import Sidebar from '../components/admin/sidebar/Sidebar'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'

const AdminDashboard = () => {
  return (
   <div className='flex'>
        <Sidebar/>
            <div className='w-full flex flex-col '>
        <Header/>
        <Outlet/>
        </div>
    </div>
  )
}

export default AdminDashboard