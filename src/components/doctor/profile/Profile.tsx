import { Avatar, Button, Divider, Modal, NumberInput, Select, Table, TableTbody, TagsInput, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { bloodGroups, doctorDepartments, doctorSpecializations } from '../../../data/DropdownData';
import { useDisclosure } from '@mantine/hooks';

const Profile = () => {
  const user = useSelector((state:any)=> state.user);
  const [editMode, setEdit]=useState(false)
  const [opened, {open, close}]=useDisclosure(false);
  const doctor: any={
    name: "sarah mogou",
    email: "sarahmogou99@gmail.com",
    dob: "1965-05-15",
    phone: "+237 673311016",
    address: "123, tradex emana Yaounde_Cameroun",
    licenseNo:"OL12345XYZ",
    specialization: "Cardiology",
    department: "Cardiology",
    totalExp: 10,
    profilePicture: "https://randomuser.me/api/portraits/men/75.jpg"
  }
  return (
    <div className='p-10'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <div className='flex flex-col items-center gap-3'>
            <Avatar variant='filled' src={'/avatar.webp'} size={150} alt="it's me"/>
            {editMode && <Button size='sm' onClick={open} variant='filled' leftSection={<IconEdit/>}>Upload</Button>}
          </div>
          
          <div className='flex flex-col gap-3'>
            
            <div className='text-3xl font-medium text-neutral-900'>{user.name}</div>
            <div className='text-xl text-neutral-700'>{user.email}</div>
          </div>
          {!editMode ? <Button size='m' onClick={()=>setEdit(true)} variant='filled' leftSection={<IconEdit/>}>Edit</Button>:
          <Button size='m' onClick={()=>setEdit(false)} variant='filled' leftSection={<IconEdit/>}>Submit</Button>}
        </div>
      </div>
      <Divider my="xl"/>
      <div>
        <div className=''>
          <div className='text-2xl font-medium text-neutral-900 '>Personal Information</div>
          <Table striped stripedColor='primary.1'  withColumnBorders={false} verticalSpacing={'md'}  >
            <TableTbody className='[&>tr]:!mb-3'>
                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Date of Birth</Table.Td>
                 {editMode?
                  <Table.Td className='text-xl'>
                    <DateInput 
                    placeholder='date of birth'/>
                    
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.dob}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Phone</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <NumberInput
                    placeholder='phone number'
                    maxLength={10}
                    clampBehavior='strict'
                    hideControls/>
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.phone}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Address</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <TextInput
                    
                    placeholder='Address'
                    />
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.address}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>License No</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <TextInput
                     maxLength={10}
                    placeholder='License Number'
                    />
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.licenseNo}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Specialization</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                   <Select data={doctorSpecializations}
                   placeholder='specialization' />
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.specialization}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Department</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                   <Select data={doctorDepartments}
                   placeholder='specialization' />
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.department || "none"}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Total experience</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <NumberInput 
                    placeholder='total experience'
                    maxLength={2} max={50}
                    clampBehavior='strict'
                    hideControls/>
                  </Table.Td>:<Table.Td className='text-xl'>{doctor.totalExp || "none"}</Table.Td>}
                </Table.Tr>
               
            </TableTbody>
          </Table>
        </div>
      </div>
      <Modal centered opened={opened} onClose={close} title={<span className='text-xl font font-medium'>Upload Profile Picture</span>}>

      </Modal>
    </div>
  )
}

export default Profile