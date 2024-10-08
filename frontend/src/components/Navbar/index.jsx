import React from 'react'
import classes from './style.module.css'
import logo from '../../assets/hcmut.svg'
import calender from '../../assets/calender.svg'
import messagequestion from '../../assets/messagequestion.svg'
import notifications from '../../assets/notifications.svg'
import test from '../../assets/test.svg'
import arrowdown from '../../assets/arrowdown.svg'
import filter from '../../assets/filter.svg'
export const Navbar = () => {
  return (
    <div className='relative'>
      <div className="h-[90px] flex flex-row justify-between after:content-[''] after:bottom-0 after:left-0 after:w-screen after:h-[1px] after:bg-[#DBDBDB] after:absolute">
        <div className='flex flex-row w-[220px] justify-items-center items-center h-[100%] center justify-center relative after:content-[""] after:bottom-0 after:right-0 after:absolute after:w-[1px] after:bg-[#DBDBDB] after:h-[100%]'>
          <img src={logo} className='p-[5px] w-[50px] h-[50px] py-[10px]'/>
          <h1 className='font-semibold text-xl text-[#0D062D]'>HCMUT-SSPS</h1>
        </div>
        <div className='min-w-[300px] flex flex-row'>
          <ul className='flex flex-row justify-items-center justify-between items-center h-[100%] cursor-pointer min-w-[120px]'>
            <li><img src={calender} className='p-[5px] leading-[60px]'/></li>
            <li><img src={messagequestion} className='p-[5px] leading-[60px]'/></li>
            <li><img src={notifications} className='p-[5px] leading-[60px]'/></li>
          </ul>
          <div className='flex flex-row justify-items-center items-center h-[100%] cursor-pointer mr-5'>
            <div className='min-w-[150px] items-end flex flex-col px-[10px]'>
              <p className='font-bold text-[16px] leading-[16px]'>Nguyen Van A</p>
              <p className='font-normal text-[14px] leading-[16px] text-[#787486] mt-[5px]'>Student</p>
            </div>
            <div className='flex flex-row justify-items-center items-center h-[100%] w-[60px] justify-between'>
              <img src={test} className='rounded-[50%] w-[38px] h-[38px]'/>
              <img src ={arrowdown} className='w-[20px] h-[20px] p-[5px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
