import React from 'react'
import SavedCoins from './SavedCoins'
import { UserAuth } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'



const MyPortfolio = () => {

  const navigate = useNavigate()
  const {logout, user} = UserAuth()
  const handleLogout = async () =>{
    try{
     await logout()
     navigate('/LogIn')
     alert('you are logged out')                       //logout button
    } catch (e) {
      console.log(e.message)
    }
  }


 

  return (
    <div className='mx-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div>
          <h1 className='text-2xl font-bold'>My Portfolio</h1>
          <div>
            <p>Welcome, {user && user.email}</p>
          </div>
        </div>
        <div>
<button onClick={handleLogout} className='px-6 border py-2 rounded-xl bg'>Log Out</button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='text-2xl font-bold py-4'>My Coins</h1>
          <SavedCoins/>
        </div>
      
      </div>
    </div>
  )
}

export default MyPortfolio
