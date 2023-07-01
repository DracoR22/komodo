import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/Authcontext'
import { AiOutlineMail } from 'react-icons/ai'

import Footer from './Footer'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
  
    const {createUser} = UserAuth()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try{
     await createUser(email, password)
     navigate('/') 
     alert('account succesfuly created')  //Redirect to users profile
    } catch (e) {
      setError(e.message)
      alert('invalid Email or Password, Password should be at least 6 characters')
    }
  }
  

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className='my-4'>
                <label>Email</label>
                <div className='my-2 w-full relative rounded-sm'>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-2 bg-primary border-secondary border rounded-sm' type="email" placeholder='Email' />
                    <AiOutlineMail className='absolute right-2 top-3 '/>
                </div>
            </div>
            <div className='my-4'>
                <label>Password</label>
                <div className='my-2 w-full relative rounded-sm'>
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full p-2 bg-primary border-secondary border rounded-sm' type="password" placeholder='Password' />
                 
                </div>
            </div>
            <button className='w-full my-2 p-3 bg-button text-btn-text rounded-xl font-medium hover:bg-[#1a8f6a] duration-500'>Sign Up</button>
        </form>
        <p>Already have an account? <Link to= '/LogIn' className='text-accent hover:border-b'>Login</Link> </p>
      </div>

      <Footer/>

    </div>
  )
}

export default SignUp
