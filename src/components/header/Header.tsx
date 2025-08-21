import React, { useEffect } from 'react'
import ProfileMenu from './ProfileMenu'
import { ActionIcon, Button } from '@mantine/core'
import { IconBellRinging, IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { removeJwt } from '../../slices/JwtSlice'
import { removeUser } from '../../slices/UserSlice'

const Header = () => {
  const dispatch= useDispatch();
  const jwt=useSelector((state:any)=>state.jwt);
  // useEffect(()=>{
  //   console.log(jwt);
  // }, [])
  const handleLogout=()=>{
    console.log("Logout")
    dispatch(removeJwt());
    dispatch(removeUser())
  }
  return (
    <div className='bg-light shadow-lg w-full h-16 flex justify-between px-5 items-center'>
       <ActionIcon variant="transparent" size={'xl'} aria-label="Settings">
      <IconLayoutSidebarLeftCollapseFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
    <div className='flex gap-5 items-center'>
      
      {jwt? <Button color='red' 
      onClick={handleLogout}>Logout</Button>:<Link to="login">
      <Button>Login</Button>
      </Link>}
       {jwt&&<><ActionIcon variant="transparent" size={'md'} aria-label="Settings">
      <IconBellRinging style={{ width: '70%', height: '70%' }} stroke={2} />
    </ActionIcon>
     <ProfileMenu/>
        </>}
    </div>
   
    </div>
  )
}

export default Header