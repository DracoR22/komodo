import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import Trending from './Trending'
import Footer from './Footer'

const CoinPage = () => {
const [coin, setCoin] = useState({})
const params = useParams()

const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

useEffect(() => {
  axios.get(url).then((response) =>{
    setCoin(response.data)
    console.log(response.data)
  })
}, [url])


  return (
    <div className='rounded-div my-8 py-5'>
        <p className='mt-2'>#{coin.market_cap_rank}</p>
      <div className='py-8 flex'>
        <img className='mr-2 mt-1 w-7 h-7' src={coin.image?.large} alt="" />
        <div>
          <p className='text-3xl font-bold'>{coin?.name}</p>
          <p className='mt-1'>({coin.symbol?.toUpperCase()}/USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between '>
            {coin.market_data?.current_price ? (<p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
          <Sparklines data={coin.market_data?.sparkline_7d.price}>
            <SparklinesLine color='teal'/>
          </Sparklines>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}
            </div>
          </div>
        

          <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-500 text-sm'>24h High</p>
                {coin.market_data?.high_24h ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm'>24h Low</p>
                {coin.market_data?.low_24h ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>) : null}
              </div>
          </div>
        </div> 

         <div>
          <p className='text-xl font-bold'>{coin.symbol?.toUpperCase()} Price Statistics</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hasshing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm }</p> : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
          <div>
            <p className='text-gray-500 text-sm'>Price Change (24h)</p>
            {coin.market_data?.price_change_percentage_24h > 0 ? (<p className='text-accent'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>) 
            : (<p className='text-red-600'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>) }
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Price Change (7d)</p>
            {coin.market_data?.price_change_percentage_7d > 0 ? (<p className='text-accent'>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</p>)
             : (<p className='text-red-600'>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</p>)}
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Price Change (14d)</p>
            {coin.market_data?.price_change_percentage_14d > 0 ? (<p className='text-accent'>{coin.market_data?.price_change_percentage_14d.toFixed(2)}%</p>) 
            : (<p className='text-red-600'>{coin.market_data?.price_change_percentage_14d.toFixed(2)}%</p>)}
          </div>
         </div>
            <div className='flex justify-between py-4'>
              <div>
                <p className='text-gray-600 text:sm'>Price Change (30d)</p>
                {coin.market_data?.price_change_percentage_30d > 0 ? (<p className='text-accent'>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>) 
                : (<p className='text-red-600'>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>)}
              </div>
              <div>
                <p className='text-gray-600 text:sm'>Price Change (60d)</p>
                {coin.market_data?.price_change_percentage_60d > 0 ? (<p className='text-accent'>{coin.market_data?.price_change_percentage_60d.toFixed(2)}%</p>) 
                : (<p className='text-red-600'>{coin.market_data?.price_change_percentage_60d.toFixed(2)}%</p>)}
              </div>
              <div>
                <p className='text-gray-600 text:sm'>Price Change (1y)</p>
                {coin.market_data?.price_change_percentage_1y ? (<p className='text-accent'>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) 
                :  (<p className='text-red-600'>{coin.market_data?.price_change_percentage_1y.toFixed(2)}%</p>)}
              </div>
            </div>
            

            <div>
         
          </div>

      </div>
      </div>
        {/* DESCRIPTION */}
        <div className='py-4'>
          <p className='text-xl font-bold'>What is {coin.name}?</p>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description?.en : ''),}}></p>
        </div>
      <Trending/>
      <Footer/>
    </div>
  )
}

export default CoinPage
