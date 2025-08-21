import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Sidebar from "../components/patient/sidebar/Sidebar"

const PatientDashboard = () => {
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

export default PatientDashboard