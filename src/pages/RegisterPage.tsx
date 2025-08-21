import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconLetterHSmall } from '@tabler/icons-react'

import { registerUser } from '../service/UserService';
import { errorNotification, successNotification } from '../utility/NotificationUtil';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;

const RegisterPage = () => {
  const navigate=useNavigate();
   const [loading, setLoading]=useState(false);
    const form = useForm({
    initialValues: {
      name: '',
      role:"PATIENT",
      email: '',
      password: '',
      confirmPassword: ""
    },

    validate: {
       name: (value: string) => value.trim() ? null : 'Name is required',
      email: (value:string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string) =>
      !value
        ? "Password is required"
        : !passwordRegex.test(value)
        ? "Password must be 6–15 characters and include uppercase, lowercase, number, and special character"
        : null,

       confirmPassword:(value:string, values:{password: string})=>(value===values.password? null: "Passwords don't match")
    },});

     const handleSubmit = (values: typeof form.values) => {
      setLoading(true);
   registerUser(values).then((_data)=>{
    
    successNotification("register Successfully");
    navigate('/login');
   }).catch((error)=>{
    
    errorNotification(error.response.data.errorMessage)
   }).finally(()=>setLoading(false))
  };
    
  return (
    <div style={{background:'url(/bgHopital.png)'}} className='h-screen w-screen bg-["url(`/bgHopital.png`)"] !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center'>
        <div className=' py-3 text-primary-400 flex  gap-1 items-center'>
          <IconLetterHSmall size={40} stroke={2.5}/>
          <span className='font-heading text-3xl'>Hrichy48</span>
        </div>
        <div className='w-[450px] backdrop-blur-md p-10 py-8 rounded-lg'>
            <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5  [&_input]:placeholder:bg-neutral-100 [&_.mantine-Input-input]:!border-white [&_.mantine-Input-input]:!border [&_input]:!pl-2 [&_svg]:text-white [&_input]:text-white focus-within:[&_.mantine-Input-input]:!border-green-100'>
                <div className='self-center font-medium font-heading text-white text-xl'>Register</div>
               <SegmentedControl 
               {...form.getInputProps("role")}
                fullWidth 
                size="md" 
                radius="md" 
                color='primary'
                 bg="none" 
                 data={[
                  {label:'Patient', value:"PATIENT"},
                   {label:'Doctor', value:"DOCTOR"}, 
                   {label:'Admin', value:"ADMIN"}]} />
                <TextInput  {...form.getInputProps('name')}
                withAsterisk
                className='transition duration-300'
                variant='unstyled'
                size='md'
                radius={'md'}
                placeholder='name'
                />
                <TextInput  {...form.getInputProps('email')}
                withAsterisk
                className='transition duration-300'
                variant='unstyled'
                size='md'
                radius={'md'}
                placeholder='email'
                />
                  <PasswordInput {...form.getInputProps('password')}
                  withAsterisk
                  className='transition duration-300 '
                variant='unstyled'
                size='md'
                radius={'md'}
                placeholder='*****'
                />
                 <PasswordInput {...form.getInputProps('confirmPassword')}
                  withAsterisk
                  className='transition duration-300 '
                variant='unstyled'
                size='md'
                radius={'md'}
                placeholder='*****'
                />
                <Button loading={loading} radius={'md'} size={'md'} type='submit' color=''>Register</Button>
                <div className='text-neutral-100 text-sm self-center'>Have an account? <Link to="/login" className='hover:underline'>Login</Link></div>
            </form>
        </div>

    </div>
  )
}

export default RegisterPage