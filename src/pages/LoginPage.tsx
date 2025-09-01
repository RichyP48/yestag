import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconLetterHSmall } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../service/UserService';
import { errorNotification, successNotification } from '../utility/NotificationUtil';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJwt } from '../slices/JwtSlice';
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../slices/UserSlice';
import bgHopital from '../assets/slider-21.jpg'

//user

const LoginPage = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading]=useState(false)
   const backImg ={
    backgroundImage:`url(${bgHopital})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat'
  };
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
      
    }).catch((error)=>{
      errorNotification(error?.response?.data?.errorMessage);
    }).finally(()=>setLoading(false))
  };
    
  return (
     <div className="h-screen flex">

        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-gradient-to-r
from-[#2dd4bf]
to-[#1f2937]">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
          </div>

        
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Connexion</h2>
            <p className="text-sm text-gray-600">Bon retour parmi nous, Veuillez vous connecter pour continuer !</p>
          </div>
          <div className='backdrop-blur-3xl  p-10 py-8  rounded-lg'>

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
             {/* <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Comptes de démonstration :</h3>
            <div className="space-y-2 text-xs text-gray-600">
             
            </div>
          </div> */}
        </div>

       
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">© 2025 Project KFOKAM48 by RichardMogou99@gamil.com. Tous droits réservés.</p>
        </div>
      </div>

     
      <div className=" lg:block relative w-full flex-1 bg-primary-400">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-500 opacity-80"  style={backImg} />
          <div
            className="absolute inset-0 bg-cover bg-center"
           
          />
      </div>

      

    </div>
    
  )
}

export default LoginPage