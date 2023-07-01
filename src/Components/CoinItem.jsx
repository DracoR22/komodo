import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/Authcontext'
import { db } from '../Firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const CoinItem = ({ coin }) => {

  //CloudStore
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)
  const { user } = UserAuth()

  const coinPath = doc(db, 'users', `${user?.email}`)

  const saveCoin = async () =>{
   if(user?.email){
  
   setSaved(true)
   await updateDoc(coinPath, {
     myPort: arrayUnion({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      rank: coin.market_cap_rank,
      symbol: coin.symbol,
     })
   })
   } else{
    navigate('/LogIn')
   }
  }


  return (
    
       <tr className='border-b border-secondary h-[80px] overflow-hidden'>
        <td onClick={saveCoin}>{saved ? <AiFillStar className='text-[18px] cursor-pointer'/> : <AiOutlineStar className='text-[18px] cursor-pointer'/>}  </td>
        <td>{coin.market_cap_rank}</td>
        <td>
             <Link to={`/coin/${coin.id}`}>
             <div className='flex items-center'>
             <img className='w-6 mr-2 rounded-full' src={coin.image} alt={coin.id} />
             <p className='hidden sm:table-cell'>{coin.name}</p>
              </div>
              </Link>
         </td>
        <td>{coin.symbol.toUpperCase()}</td>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>
          {coin.price_change_percentage_24h > 0 ? (<p className='text-accent'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)
           : (<p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}
          
          </td>
        <td className='w-[180px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
        <td className='w-[180px] hidden sm:table-cell'>${coin.market_cap.toLocaleString()}</td>
        <td>
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color='teal'/>
          </Sparklines>
        </td>
    </tr>
    
  )
}

export default CoinItem
