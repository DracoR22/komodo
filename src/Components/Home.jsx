import React from 'react'
import CoinSearch from './CoinSearch'
import Trending from './Trending'
import Footer from './Footer'

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins}/>
      <Trending/>
      <Footer/>
    </div>
  )
}

export default Home
