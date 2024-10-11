import React, {useContext, useEffect} from 'react'
import classes from './style.module.css'
import category from '../../assets/category.svg'
import mesage from '../../assets/mesage.svg'
import task from '../../assets/task.svg'
import setting from '../../assets/setting.svg'
import lampon from '../../assets/lampon.svg'
import config from '../../assets/config.svg'
import statisfication from '../../assets/statisfication.svg'
import mangeprint from '../../assets/mangeprint.svg'
import { GlobalContext } from '../../Context'

// const handleClicked = (e) => {
//   console.log(e.target.getAttribute('cur-value'))
// }

export const Slidebar = () => {
  const { selecInput, setSelecInput} = useContext(GlobalContext)
  useEffect(() => {
    console.log(selecInput)
  } , [selecInput])

  return (
    <div className={classes.sliderbar}>
      <ul className='p-[10px] h-1/2 overflow-y-auto overflow-hidden'>
        <li className={selecInput == "HomePageUser" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="HomePageUser" onClick={(e) => {setSelecInput(e.currentTarget.getAttribute('cur-value'))}}><a className='flex flex-row'><img src={category} className='pr-[10px]'/>Trang chính Student</a></li>
        <li className={selecInput == "PrintService" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="PrintService" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={mesage} className='pr-[10px]'/>Dịch vụ</a></li>
        <li className={selecInput == "Library" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="Library" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={task} className='pr-[10px]'/>Thư viện</a></li>
        <li className={selecInput == "BuyPrintingPages" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="BuyPrintingPages" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={setting} className='pr-[10px]'/>Mua trang in</a></li>
        <li className={selecInput == "ConfigPrint" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="ConfigPrint" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={config} className='pr-[10px]'/>Cấu hình</a></li>
        <li className={selecInput == "StatisticsSPSO" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="StatisticsSPSO" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={statisfication} className='pr-[10px]'/>Thống kê</a></li>
        <li className={selecInput == "ManagePrint" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="ManagePrint" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={mangeprint} className='pr-[10px]'/>Máy in</a></li>
        <li className={selecInput == "HomePageAdmin" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="HomePageAdmin" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={category} className='pr-[10px]'/>Danh sách tài khoản</a></li>
        <li className={selecInput == "HomePageSPSO" ? `${classes.itemSliderbar} ${classes.activate}` : classes.itemSliderbar} cur-value="HomePageSPSO" onClick={(e) => setSelecInput(e.currentTarget.getAttribute('cur-value'))}><a className='flex flex-row'><img src={category} className='pr-[10px]'/>Trang chính SPSO</a></li>
      </ul>
      <div className='absolute bottom-[200px]'>
        <div className='w-[210px] m-auto'>
          <div className="flex flex-col items-center relative">
            <div className='w-[70px] h-[70px] m-auto bg-[#F5F5F5] rounded-tl-[50%] rounded-tr-[50%] rounded-br-none rounded-bl-none border-none flex flex-col items-center z-20 relative'>
              <img src={lampon} className='w-[30px] h-[30px] z-50 absolute top-[15px] left-[20px]'/>
            </div>
            <div className="bg-[#F5F5F5] z-10 rounded-[20px] flex flex-col items-center p-[10px] absolute top-[35px] right-[10px]">
              <h1 className="text-center py-[10px] text-[14px] font-medium pt-[35px]">Hướng dẫn sử dụng</h1>
              <p className="text-center text-[12px] text-[#787486] w-[166px] font-normal">Nếu bạn chưa hiểu bất kể những thứ gì trên màn hình hãy đọc hướng dẫn sử dụng này.</p>
              <button className="text-center py-[5px] px-[30px] mt-[20px] rounded-[10px] bg-[#ffff] m-auto mb-[10px] font-medium">Click me</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
