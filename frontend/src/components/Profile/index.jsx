import React from 'react'
import classes from './style.module.css'
import { Navbar } from '../Navbar'

export const Profile = () => {
  return (
    <div>
      <div>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' className='rounded-[50%] w-[200px] h-[200px] mt-[50px]'/>
            <h1 className='font-bold text-[24px] mt-[20px]'>Nguyen Van A</h1>
            <p className='font-normal text-[16px] text-[#787486]'>Student</p>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center mt-[50px]'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-[24px] mt-[20px]'>Information</h1>
                <div className='flex flex-row justify-between items-center w-[400px] mt-[20px]'>
                  <p className='font-normal text-[16px] text-[#787486]'>Full Name</p>
                  <p className='font-normal text-[16px] text-[#787486]'>Nguyen Van A</p>
                </div>
                <div className='flex flex-row justify-between items-center w-[400px] mt-[20px]'>
                  <p className='font-normal text-[16px] text-[#787486]'>MSSV:</p>
                  <p className='font-normal text-[16px] text-[#787486]'>2211937</p>
                </div>
                <div className='flex flex-row justify-between items-center w-[400px] mt-[20px]'>
                  <p className='font-normal text-[16px] text-[#787486]'>Email:</p>
                  <p className='font-normal text-[16px] text-[#787486]'>tr.locne404@gmmail.com</p>
                </div>
                <div className='flex flex-row justify-between items-center w-[400px] mt-[20px]'>
                  <p className='font-normal text-[16px] text-[#787486]'>Phone</p>
                  <p className='font-normal text-[16px] text-[#787486]'>0123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
