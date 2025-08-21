import { Avatar, Text } from '@mantine/core'
import { IconCalendarCheck,  IconLayoutGrid, IconLetterHSmall, IconMoodHeart, IconStethoscope, IconUser, IconVaccine } from '@tabler/icons-react'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'


const links=[
  {
    name:"Dashboard", url:"/doctor/dashboard", icon:<IconLayoutGrid stroke={1.5}/>
  },
   {
    name:"Profile", url:"/doctor/profile", icon:<IconUser stroke={1.5}/>
  },
 
  {
    name:"Appointments", url:"/doctor/appointments", icon:<IconCalendarCheck stroke={1.5}/>
  },
  {
    name:"Patients", url:"/doctor/patients", icon:<IconMoodHeart stroke={1.5}/>
  },
  {
    name:"Pharmacy", url:"/doctor/pharmacy", icon:<IconVaccine stroke={1.5}/>
  },
]
const Sidebar = () => {
  const user = useSelector((state:any)=>state.user)
  return (
    <div className='flex'>
      <div className='w-64'>

      </div>
    <div className='fixed bg-dark h-screen hide-scrollbar overflow-y-auto w-64 flex flex-col gap-7 items-center '>
        <div className='fixed z-[500] bg-dark py-3 text-primary-400 flex  gap-1 items-center'>
          <IconLetterHSmall size={40} stroke={2.5}/>
          <span className='font-heading text-3xl'>Hrichy48</span>
        </div>
        <div className='flex flex-col gap-5 mt-20 '>

      

        <div className='items-center flex flex-col gap-1'>
          <div className='p-1 bg-white rounded-full drop-shadow-xl'>
           <Avatar variant='filled' src="avatar.webp" size={'xl'} alt="it's me"/>
          
          </div>
        <span className='font-medium text-light' >{user.name}</span>
        <Text  c="dimmed" color='' className='text-light' size='xs'>{user.role}</Text>
        </div>
        <div className='flex flex-col gap-2'>
            {
              links.map((link)=>{
                return <NavLink to={link.url} key={link.url} className={({isActive})=>`flex items-center gap-5 w-full font-medium text-neutral-900 px-4 py-4 rounded-lg ${isActive? "bg-primary-400":"hover:bg-gray-100 hover:text-dark text-light"}`}>
                  {link.icon}
                  <span>{link.name}</span>
                  
                </NavLink>
              })
            }
        </div>
       </div>   
    </div>
    </div>
  )
}

export default Sidebar