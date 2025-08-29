import { Avatar, Button, Divider, Modal, NumberInput, Select, Table, TableTbody, TagsInput, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { bloodGroups, doctorDepartments, doctorSpecializations } from '../../../data/DropdownData';
import { useDisclosure } from '@mantine/hooks';
import { getDoctor, updateDoctor } from '../../../service/DoctorProfileService';
import { data } from 'react-router';
import { formatDate } from '../../../utility/DateUtility';
import { errorNotification, successNotification } from '../../../utility/NotificationUtil';
import { useForm } from '@mantine/form';
 
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
const Profile = () => {
  const user = useSelector((state:any)=> state.user);
  const [editMode, setEdit]=useState(false)
  const [opened, {open, close}]=useDisclosure(false);
  const [profile, setProfile]=useState<any>({});

 
    useEffect(()=>{
      console.log(user)
      getDoctor(user.profileId).then((data)=>{
        setProfile({...data});
      }).catch((error)=>{
        console.log(error);
      })
    },[]);
    const form=useForm({
      initialValues:{
         dob: '',
         phone: '',
         address: '',
         licenseNo: '',
         specialization: '',
         department: '',
         totalExp: '',
       
      },
      validate:{
        dob:(value)=> !value?'Date of is required': undefined,
        phone:(value)=> !value?'Phone number is required': undefined,
        address:(value)=> !value?'address  is required': undefined,
       licenseNo:(value)=> !value?'licenseNo is required': undefined,
        specialization:(value)=> !value?'specialization number is required': undefined,

      },
    });
    const handleEdit =()=>{
      form.setValues({
        ...profile,  dob: profile.dob? new Date(profile.dob): undefined 
    });
      setEdit(true)
    }
    const handleSubmit=(e:any)=>{
      let values = form.getValues();
      form.validate();
      if(!form.isValid()) return;
      console.log(values)
      updateDoctor({ ...profile, ...values }).then((_data)=>{
        successNotification("Profile updated successfulle");
        setProfile({...profile, ...values})
        setEdit(false)
      }).catch((error)=>{
        console.log(error)
        errorNotification(error.response.data.errorMessage);
      })
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
          {!editMode ? <Button type='button' size='m' onClick={handleEdit} variant='filled' leftSection={<IconEdit/>}>Edit</Button>:
          <Button  onClick={handleSubmit} size='m' type='submit' variant='filled' >Submit</Button>}
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
                     <DateInput {...form.getInputProps("dob")}
                     placeholder='date of birth'/>
                     
                   </Table.Td>:<Table.Td className='text-xl'>{formatDate(profile.dob)?? '-'}</Table.Td>}
                 </Table.Tr>
 
                 <Table.Tr>
                   <Table.Td className='font-semibold text-xl'>Phone</Table.Td>
                    {editMode?
                   <Table.Td className='text-xl'>
                     <NumberInput {...form.getInputProps("phone")}
                     placeholder='phone number'
                     maxLength={10}
                     clampBehavior='strict'
                     hideControls/>
                   </Table.Td>:<Table.Td className='text-xl'>{profile.phone?? '-'}</Table.Td>}
                 </Table.Tr>
 
                 <Table.Tr>
                   <Table.Td className='font-semibold text-xl'>Address</Table.Td>
                    {editMode?
                   <Table.Td className='text-xl'>
                     <TextInput {...form.getInputProps("address")}
                     
                     placeholder='Address'
                     />
                   </Table.Td>:<Table.Td className='text-xl'>{profile.address?? '-'}</Table.Td>}
                 </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>License No</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <TextInput {...form.getInputProps("licenseNo")} 
                     maxLength={10}
                    placeholder='License Number'
                    />
                  </Table.Td>:<Table.Td className='text-xl'>{profile.licenseNo?? '-'}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Specialization</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                   <Select {...form.getInputProps("specialization")} 
                   data={doctorSpecializations}
                   placeholder='specialization' />
                  </Table.Td>:<Table.Td className='text-xl'>{profile.specialization?? '-'}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Department</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                   <Select {...form.getInputProps("department")} 
                    data={doctorDepartments}
                   placeholder='specialization' />
                  </Table.Td>:<Table.Td className='text-xl'>{profile.department?? '-'}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Total experience</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <NumberInput {...form.getInputProps("totalExp")} 
                    placeholder='total experience'
                    maxLength={2} max={50}
                    clampBehavior='strict'
                    hideControls/>
                  </Table.Td>:<Table.Td className='text-xl'>{profile.totalExp?? '-'}{profile.totalExp?  'years':''}</Table.Td>}
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