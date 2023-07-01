import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Trending = () => {
    const url = 'https://api.coingecko.com/api/v3/search/trending'
    const [trend, setTrend] = useState([])

    useEffect(() => {
        axios.get(url).then((response) =>{setTrend(response.data.coins)}
    )}, [url])
    //console.log(trend)


  return (
    <div id='trending' className='rounded-div my-12 py-8 text-primary'>
      <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {trend.map((coin, index) =>(
            <div className='rounded-div2 flex justify-between p-4 hover:scale-105 duration-300 ease-in-out cursor-pointer' key={index}>
                 <div className='flex w-full items-center justify-between'>
                    <div className='flex'>
                        <img className='rounded-full' src={coin.item.small} alt={coin.item.id} />
                        <div className='pl-3'>
                            <p className='font-bold'>{coin.item.name}</p>
                            <p>{coin.item.symbol}</p>
                        </div>
                    </div>
                 </div>
                 <div className='flex items-center justify-center pr-4'>
                    <img className='w-4 mr-2' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="BTC" />
                   <p> {coin.item.price_btc.toFixed(9)} </p>
                 </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Trending
