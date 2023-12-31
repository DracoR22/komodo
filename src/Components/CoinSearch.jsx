import React, { useState } from 'react'
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {

  const [searchText, setSearchText] = useState ('')

  return (
    <div className='rounded-div my-4'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2 ml-2'>Cryptocurrency Prices by Market Cap</h1>
        <form>
            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='btc, eth, usdt, etc'
            className='w-full bg-secondary border-input px-4 py-2 mt-2 rounded-md' />
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
            <tr className='border-b border-t h-[50px] border-secondary'>
                <th></th>
                <th className='px-4'>#</th>
                <th className='text-left'>Coin</th>
                <th></th>
                <th>Price</th>
                <th>24h</th>
                <th className='hidden md:table-cell'>24h Volume</th>
                <th className='hidden sm:table-cell'>Mkt Cap</th>
                <th>Last 7 Days</th>
            </tr>
        </thead>
        <tbody>

{coins.filter((value)=>{
  if(searchText === '') {
    return value
  } else if (
    value.symbol.toLowerCase().includes(searchText.toLowerCase())
  ) {
    return value
  }
})
.map((coin) =>(
   <CoinItem key={coin.id} coin={coin}/>
))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch
