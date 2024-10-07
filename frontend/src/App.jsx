import { useState } from 'react'
import { Auth } from './components/Auth'
import { BuyPrintingPages } from './components/BuyPrintingPages'
import { GlobalContext } from './components/Context'
import { Payment } from './components/Payment'
import { ConfigPrint } from './components/ConfigPrint'
import { ConfigSPSO } from './components/ConfigSPSO'
import { HomePage } from './components/HomePage'
import { HomePageAdmin } from './components/HomePageAdmin'
import { HomePageUser } from './components/HomePageUser'
import { HomePageSPSO } from './components/HomePageSPSO'
import { Library } from './components/Library'
import { ManagePrint } from './components/ManagePrint'
import { Navbar } from './components/Navbar'
import { PrintService } from './components/PrintService'
import { Slidebar } from './components/Sidebar'
import { StatisticsSPSO } from './components/StatisticsSPSO'
import { useMyContext } from './components/store/ContextApi'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className='my-0 p-0'>
      <Navbar/>
      <Slidebar/>
    </div>
  )
}

export default App
