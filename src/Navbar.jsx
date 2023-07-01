import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './Components/ThemeToggle'
import {AiOutlineMenu, AiFillStar, AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from './Context/Authcontext'



const Navbar = () => {

const [nav, setNav] = useState(true)

const {user} = UserAuth()

const handleClick = () => {
    setNav(!nav)
}

  return (
    <div className='rounded-div2 flex items-center justify-between h-20 font-bold mb-[20px] mt-[10px]'>

            <Link to='/' className='flex ml-6'>
            <img className='h-[60px] rounded-full hidden sm:flex' src="komodo3.png" alt="Logo" />
           <h1 className='text-2xl p-4'>KOMODO</h1>
           </Link>

           <ul className='hidden md:flex justify justify-between pl-[70px] cursor-pointer'>
          <Link to ='/Footer'><li className='hover:text-accent duration-500'>About Us</li></Link>
          <Link to='/Trending'><li className='pl-[100px] hover:text-accent duration-500'>Trending Coins</li></Link>
           </ul>

           <div className='hidden md:flex ml-[70px]'>
            <ThemeToggle/>
           </div>

        {user?.email ? <div className='hidden md:flex '>
              <Link to='/Myport' className='p-4 hover:text-accent duration-500 flex'> <AiFillStar className='text-2xl mr-2 text-[#ffd700]'/> My Portfolio </Link>
               </div> :
              <div className='hidden md:flex '>
              <Link to='/LogIn' className='p-4 hover:text-accent duration-500'>  Login </Link>
               <Link to='/SignUp' className='rounded bg-button px-5 pt-[15px] ml-2 hover:bg-[#1a8f6a] text-btnText duration-500'>Sign Up</Link>
               </div>}

           {/* MOBILE */}
           <div className='block md:hidden cursor-pointer z-10 text-3xl right-4 absolute' onClick={handleClick}>
            <AiOutlineMenu/>
           </div>
    
            {/* Black Filter */}
           <div className={!nav ? 'bg-black/60 fixed w-full h-screen z-10 top-0 left-0 duration-300 md:hidden' : ''}></div>

           <div className={!nav ? 'fixed top-10 left-0 flex flex-col items-center justify-center w-full h-[90%] ease-in duration-500 z-10 md:hidden' :
            'fixed top-10 left-[-300%] flex flex-col items-center justify-center w-full h-[90%] ease-in duration-500 z-10 md:hidden'}>

          {user?.email ? <ul className='p-4 w-full sm:w-[70%] bg-primary'>

<AiOutlineClose className='text-2xl cursor-pointer' onClick={handleClick}/>

<li onClick={handleClick} className='border-b py-6 hover:text-accent duration-500 ml-2'>
<Link to='/'>Home</Link>  
</li>

<li onClick={handleClick} className='border-b py-6 hover:text-accent duration-500 ml-2'>
<Link to='/Footer'>About Us</Link>  
</li>

<li onClick={handleClick} className='border-b py-6 hover:text-accent duration-500 ml-2'>
<Link className='flex' to='/Myport'><AiFillStar className='text-2xl mr-2 text-[#ffd700]'/> My Portfolio</Link>  
</li>

<li className='border-b py-6'>
    <ThemeToggle/>
</li>

<li onClick={handleClick} className='border-b py-6 ml-2'>
<Link to='/Trending'>Trending Coins</Link>   
</li>


</ul> : <ul className='p-4 w-full sm:w-[70%] bg-primary'>

<AiOutlineClose className='text-2xl cursor-pointer' onClick={handleClick}/>

<li onClick={handleClick} className='border-b py-6 hover:text-accent duration-500 ml-2'>
<Link to='/'>Home</Link>  
</li>

<li onClick={handleClick} className='border-b py-6 hover:text-accent duration-500 ml-2'>
<Link to='/Footer'>About Us</Link>  
</li>

<li onClick={handleClick} className='border-b py-6 hover:text-accent duration-500 ml-2'>
<Link className='flex' to='/Myport'><AiFillStar className='text-2xl mr-2 text-[#ffd700]'/> My Portfolio</Link>  
</li>

<li className='border-b py-6'>
    <ThemeToggle/>
</li>

<div className='flex flex-col text-center p-4'>
<Link to={'/SignUp'}>
 <button onClick={handleClick} className='my-2 p-3 bg-button rounded-xl w-full text-btnText hover:bg-[#1a8f6a] duration-500'>Sign Up</button>
</Link>
<Link to={'/LogIn'}>
 <button onClick={handleClick} className='my-2 p-3 bg-primary rounded-xl w-full text-primary hover:text-accent duration-500 border border-[#00df9a]'>Login</button> 
</Link>
</div>

</ul>}
            

           

           </div>
    </div>
  )
}

export default Navbar
