import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconLetterHSmall } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router';
import { loginUser } from '../service/UserService';
import { errorNotification, successNotification } from '../utility/NotificationUtil';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJwt } from '../slices/JwtSlice';
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../slices/UserSlice';

//user

const LoginPage = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading]=useState(false)
    const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value:string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password:(value:string)=>(!value?"Password is required": null)
    },});

     const handleSubmit = (values: typeof form.values) => {
      setLoading(true);
    loginUser(values).then((_data)=>{
      console.log(jwtDecode(_data));
      successNotification("Logged in Successfully");
      dispatch(setJwt(_data));
      dispatch(setUser(jwtDecode(_data)))
      navigate("/dashboard");
    }).catch((error)=>{
      errorNotification(error?.response?.data?.errorMessage);
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
                <div className='self-center font-medium font-heading text-white text-xl'>Login</div>
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
                <Button loading={loading} radius={'md'} size={'md'} type='submit' color=''>Login</Button>
                <div className='text-neutral-100 text-sm self-center'>Don't have an account? <Link to="/register" className='hover:underline'>Register</Link></div>
            </form>
        </div>

    </div>
  )
}

export default LoginPage