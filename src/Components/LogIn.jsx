import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/Authcontext'
import Footer from './Footer'

const LogIn = () => {
    
    const {signIn} = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
  
    const handleSubmit = async (e) =>{
      e.preventDefault()
      setError('')
      try{
       await signIn (email, password)
       navigate('/')
       alert('welcome')
      } catch (e) {
        setError(e.message)
        alert('invalid Password or Email')
      }
    }


  return (
    <div>
           <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='my-4'>
                <label>Email</label>
                <div className='my-2 w-full relative rounded-sm'>
                    <input  onChange={(e) => setEmail(e.target.value)} className='w-full p-2 bg-primary border-secondary border rounded-sm' type="email" placeholder='Email' />
                    <AiOutlineMail className='absolute right-2 top-3 '/>
                </div>
            </div>
            <div className='my-4'>
                <label>Password</label>
                <div className='my-2 w-full relative rounded-sm'>
                    <input  onChange={(e) => setPassword(e.target.value)} className='w-full p-2 bg-primary border-secondary border rounded-sm' type="password" placeholder='Password' />
                 
                </div>
            </div>
            <button className='w-full my-2 p-3 bg-button text-btn-text rounded-xl font-medium hover:bg-[#1a8f6a] duration-500'>Login</button>
        </form>
        <p>Don't have an account yet? <Link to= '/SignUp' className='text-accent hover:border-b'>Sign Up</Link> </p>
      </div>

<Footer/>

    </div>
  )
}

export default LogIn
