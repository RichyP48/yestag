import { Avatar, Button, Divider, Modal, NumberInput, Select, Table, TableTbody, TagsInput, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates';
import { IconEdit } from '@tabler/icons-react';
import { profile } from 'console';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { bloodGroups } from '../../../data/DropdownData';
import { useDisclosure } from '@mantine/hooks';
import { getPatient, updatePatient } from '../../../service/PatientProfileService';
import { formatDate } from '../../../utility/DateUtility';
import { useForm } from '@mantine/form';
import { data } from 'react-router';
import { errorNotification } from '../../../utility/NotificationUtil';

const patient: any={
    name: "richard mogou",
    email: "richardmogou99@gmail.com",
    dob: "1960-05-15",
    phone: "+237 673311016",
    address: "123, tradex emana Yaounde_Cameroun",
    aadharNo:"1234-568-9812",
    bloodGroup: "O+",
    allergies: "Peanuts",
    chronicDisease: "Diabetes",
    profilePicture: "https://randomuser.me/api/portraits/men/75.jpg"
  }


const Profile = () => {
  const user = useSelector((state:any)=> state.user);
  const [editMode, setEdit]=useState(false)
  const [opened, {open, close}]=useDisclosure(false);
 
   const [profile, setProfile]=useState<any>({});
    useEffect(()=>{
      console.log(user)
      getPatient(user.profileId).then((data)=>{
        setProfile(data);
      }).catch((error)=>{
        console.log(error);
      })
    },[]);
    const form=useForm({
      initialValues:{
        dob: profile.dob,
        phone: profile.phone,
        address: profile.address,
        aadharNo: profile.aadharNo,
        bloodGroup: profile.bloodGroup,
        allergies: profile.allergies,
        chronicDisease: profile.chronicDisease,
      },
      validate:{
        dob:(value)=> !value?'Date of is required': undefined,
        phone:(value)=> !value?'Phone number is required': undefined,
        address:(value)=> !value?'address  is required': undefined,
        aadharNo:(value)=> !value?'aadharNo is required': undefined,
        bloodGroup:(value)=> !value?'bloodGroup number is required': undefined,

      },
    });
    const handleSubmit=(values:any)=>{
      // console.log(values);
      updatePatient({...profile,...values}).then((data)=>{
        setProfile(data)
        setEdit(false)
      }).catch((error)=>{
        errorNotification(error.response.data.errorMessage);
      })
    }
  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className='p-10'>
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
          {!editMode ? <Button size='m' type='button' onClick={()=>setEdit(true)} variant='filled' leftSection={<IconEdit/>}>Edit</Button>:
          <Button size='m' type='submit' variant='filled' leftSection={<IconEdit/>}>Submit</Button>}
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
                  <Table.Td className='font-semibold text-xl'>AadharNo</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <TextInput {...form.getInputProps("AadharNo")}
                     maxLength={10}
                    placeholder='Aadhar Number'
                    />
                  </Table.Td>:<Table.Td className='text-xl'>{profile.aadharNo?? '-'}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>BloodGroup</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                   <Select data={bloodGroups} {...form.getInputProps("bloodGroup")}
                   placeholder='Blood group' />
                  </Table.Td>:<Table.Td className='text-xl'>{profile.bloodGroup?? '-'}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Allergies</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <TagsInput {...form.getInputProps("allergies")}
                    placeholder='Allergies separate by comma'/>
                  </Table.Td>:<Table.Td className='text-xl'>{profile.allergies ?? '-'}</Table.Td>}
                </Table.Tr>

                <Table.Tr>
                  <Table.Td className='font-semibold text-xl'>Chronic Diseases</Table.Td>
                   {editMode?
                  <Table.Td className='text-xl'>
                    <TagsInput {...form.getInputProps("chronicDisease")}
                    placeholder='Chronic Diseases separate by comma'/>
                  </Table.Td>:<Table.Td className='text-xl'>{profile.chronicDisease?? '-'}</Table.Td>}
                </Table.Tr>
               
            </TableTbody>
          </Table>
        </div>
      </div>
      <Modal centered opened={opened} onClose={close} title={<span className='text-xl font font-medium'>Upload Profile Picture</span>}>

      </Modal>
    </form>
  )
}

export default Profile