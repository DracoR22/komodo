import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext'
import Navbar from './Navbar'
import Home from './Components/Home'
import axios from 'axios'
import CoinPage from './Components/CoinPage'
import Trending from './Components/Trending'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import { AuthContextProvider } from './Context/Authcontext'
import MyPortfolio from './Components/MyPortfolio'
import ProtectedRoute from './Components/ProtectedRoute'
import Footer from './Components/Footer'

const App = () => {


  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en'
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
      axios.get(url).then((response) =>{
          setCoins(response.data)
          //console.log(response.data)
      })
  }, [url])


  return (
    <AuthContextProvider>
    <ThemeProvider>
      <Navbar/>
    <Routes>
      <Route path='/' element ={<Home coins={coins}/>}/>
      <Route path='/Trending' element ={<Trending/>}/>
      <Route path='/SignUp' element ={<SignUp/>}/>
      <Route path='/LogIn' element ={<LogIn/>}/>
      <Route path='/myPort' element= { <ProtectedRoute> <MyPortfolio/> </ProtectedRoute> }/>
      <Route path='/Footer' element ={<Footer/>}/>
      <Route path ='/coin/:coinId' element={<CoinPage/>}>
      <Route path=':coinId'/>
     </Route>

      </Routes>  
    </ThemeProvider>
    </AuthContextProvider>
  )
}

export default App
