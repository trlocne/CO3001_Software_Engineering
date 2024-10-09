import { useContext, useState } from 'react'
import { Auth } from './components/Auth'
import { BuyPrintingPages } from './components/BuyPrintingPages'
import { GlobalContext } from './Context'
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const { selecInput, setSelecInput} = useContext(GlobalContext)
  return (
    <div className='my-0 p-0'>
      <Navbar/>
      <div className='flex flex-row'>
        <Slidebar/>
        <div className='contentSpace'>
          {console.log(selecInput)}
          {selecInput == 'HomePageAdmin' && <HomePageAdmin/>}
          {selecInput == 'BuyPrintingPages' && <BuyPrintingPages/>}
          {selecInput == 'HomePageUser' && <HomePageUser/>}
          {selecInput == 'HomePageSPSO' && <HomePageSPSO/>}
          {selecInput == 'ManagePrint' && <ManagePrint/>}
          {selecInput == 'Library' && <Library/>}
          {selecInput == 'StatisticsSPSO' && <StatisticsSPSO/>}
          {selecInput == 'ConfigPrint' && <ConfigPrint/>}
          {selecInput == 'ConfigSPSO' && <ConfigSPSO/>}
          {selecInput == 'Payment' && <Payment/>}
          {selecInput == 'PrintService' && <PrintService/>}
        </div>
      </div>
    </div>
  )
}

export default App
