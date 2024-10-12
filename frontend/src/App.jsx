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
import { Profile } from './components/Profile'
import { Notifications } from './components/Notifications'
import {HistoryTransaction} from './components/HistoryTransaction'

function getContent(type) {
  switch (type) {
    case 'Profile':
      return <Profile/>;
    case 'notification':
      return <Notifications/>;
    default:
      return <div className= {`flex flex-row`}>
              <Slidebar/>
              <div className={`contentSpace`}>
                {console.log(type)}
                {type == 'HomePageAdmin' && <HomePageAdmin/>}
                {type == 'BuyPrintingPages' && <BuyPrintingPages/>}
                {type == 'HomePageUser' && <HomePageUser/>}
                {type == 'HomePageSPSO' && <HomePageSPSO/>}
                {type == 'ManagePrint' && <ManagePrint/>}
                {type == 'Library' && <Library/>}
                {type == 'StatisticsSPSO' && <StatisticsSPSO/>}
                {type == 'ConfigPrint' && <ConfigPrint/>}
                {type == 'ConfigSPSO' && <ConfigSPSO/>}
                {type == 'Payment' && <Payment/>}
                {type == 'PrintService' && <PrintService/>}
                {type == 'HistoryTransaction' && <HistoryTransaction/>}
              </div>
            </div>;
  }
}

function App() {
  const { selecInput, setSelecInput} = useContext(GlobalContext)
  return (
    <div className='my-0 p-0'>
      <Navbar/>
      {getContent(selecInput)}
    </div>
  )
}

export default App
