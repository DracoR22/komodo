import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
          <div className='max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 text-primary'>
    <div className='mx-10'>
        <div className='flex'>
        
    <h1 className='w-full text-3xl font-bold text-primary pb-4'>KOMODO</h1>
    </div>
    <p className='py-2'>Komodo is a cryptocurreny tracking website powered by <span className='font-bold'>CoinGecko's </span> 
    API. We track daily, monthly and yearly volume for each cryptocurreny in the market
    </p>
    <div className='flex justify-between md:w-[75%] my-6 cursor-pointer'>
      <FaFacebookSquare size={30} className='hover:text-[#3333a2] duration-500'/>
      <FaInstagram size={30} className='hover:text-[#ff1919] duration-500'/>
      <FaTwitterSquare size={30} className='hover:text-[#00ced1] duration-500'/>
      <FaGithubSquare size={30} className='hover:text-[#595959] duration-500'/>
    </div>
    </div>
    <div className='lg:col-span-2 md:flex justify-between mt-6'>
      <div className='my-10 border-b md:border-none'>
          <h6 className='font-medium text-primary'>Resources</h6>
          <ul className='hidden md:block mt-2'>
              <li className='py-2 text-sm'>Home</li>
              <li className='py-2 text-sm'>Crypto News</li>
              <li className='py-2 text-sm'>Bitcoin Treasury</li>
              <li className='py-2 text-sm'>Heatmap</li>
          </ul>
      </div>
      <div  className='my-10 border-b md:border-none '>
          <h6 className='font-medium text-primary'>Support</h6>
          <ul className='hidden md:block mt-2'>
              <li className='py-2 text-sm'>Request Form</li>
              <li className='py-2 text-sm'>Advertising</li>
              <li className='py-2 text-sm'>FAQ</li>
              <li className='py-2 text-sm'>Help Center</li>
          </ul>
      </div>
      <div  className='my-10 border-b md:border-none'>
          <h6 className='font-medium text-primary'>About</h6>
          <ul className='hidden md:block mt-2'>
              <li className='py-2 text-sm'>About Us</li>
              <li className='py-2 text-sm'>Careers</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Company</li>
              <li className='py-2 text-sm'>Disclaimer</li>
              <li className='py-2 text-sm'>Terms of Service</li>
          </ul>
      </div>
      <div  className='my-10 border-b md:border-none'>
          <h6 className='font-medium text-primary'>Community</h6>
          <ul className='hidden md:block mt-2'>
              <li className='py-2 text-sm'>twitter</li>
              <li className='py-2 text-sm'>Telegram</li>
              <li className='py-2 text-sm'>Instagram</li>
              <li className='py-2 text-sm'>Reddit</li>
              <li className='py-2 text-sm'>Discord</li>
          </ul>
      </div>
      

    </div>
  </div>

  <div className='max-w-[1240px] mx-10 block md:grid lg:grid-cols-3 border-t border-b border-secondary '>
        <div className='lg:col-span-2 my-4'>
       <h1 className='md:text-xl sm:text-3xl text-2xl font-bold py-2'>Want to stay up to date with cryptos?</h1>
       <p>enter your email and get the latest crypto news</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md bg-secondary' type="email" placeholder='Enter Email'/>
            <button className='bg-button w-full md:w-[200px] rounded-md font-medium ml-4 my-2 mx-[20px] py-3 px-6
                text-btnText hover:bg-[#0b8a62] transition duration-500'>Notify Me</button>
            </div>
       
        </div>
      </div>

      <p className='flex justify-center mt-6'>Powered By CoinGecko</p>
    </div>
  )
}

export default Footer
