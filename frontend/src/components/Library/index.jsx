import React from 'react'
import classes from './style.module.css'
import cal from '../../assets/calendar.svg'
export const Library = () => {
  return (
  <div className='ml-[40px] w-[1000] h-full'> 
    {/* Header section */}
    <header className={classes.header}>
    <div className={classes.filterAndSearch}>
          <div className={classes.filterSection}>
            <svg className={classes.filterIcon1} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.60006 1H12.4001C13.1334 1 13.7334 1.6 13.7334 2.33333V3.8C13.7334 4.33333 13.4001 5 13.0667 5.33333L10.2001 7.86667C9.80006 8.2 9.53339 8.86667 9.53339 9.4V12.2667C9.53339 12.6667 9.26672 13.2 8.93339 13.4L8.00006 14C7.13339 14.5333 5.93339 13.9333 5.93339 12.8667V9.33333C5.93339 8.86667 5.66672 8.26667 5.40006 7.93333L2.86672 5.26667C2.53339 4.93333 2.26672 4.33333 2.26672 3.93333V2.4C2.26672 1.6 2.86672 1 3.60006 1Z" stroke="#787486" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <button className={classes.filterButton}>Filter</button>
            <svg className={classes.filterIcon2} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.00001 11.1999C7.53335 11.1999 7.06668 11.0199 6.71335 10.6666L2.36668 6.31993C2.17335 6.12659 2.17335 5.8066 2.36668 5.61326C2.56001 5.41993 2.88001 5.41993 3.07335 5.61326L7.42001 9.95993C7.74001 10.2799 8.26001 10.2799 8.58001 9.95993L12.9267 5.61326C13.12 5.41993 13.44 5.41993 13.6333 5.61326C13.8267 5.8066 13.8267 6.12659 13.6333 6.31993L9.28668 10.6666C8.93335 11.0199 8.46668 11.1999 8.00001 11.1999Z" fill="#787486" />
            </svg>
          </div>
          {/* Search tool */}
          <div className={classes.headerSearch}>
            <svg className={classes.searchIcon} xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M11.3416 19.2499C16.1511 19.2499 20.05 15.3511 20.05 10.5416C20.05 5.73211 16.1511 1.83325 11.3416 1.83325C6.53215 1.83325 2.6333 5.73211 2.6333 10.5416C2.6333 15.3511 6.53215 19.2499 11.3416 19.2499Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.9666 20.1666L19.1333 18.3333" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input
              type="text"
              className={classes.headerSearchInput}
              placeholder="Search for Library..."
            />
          </div>
        </div>
        </header>


        <div class="mr-[20px] grid grid-rows-4 grid-flow-col gap-9 h-[550px] bg-[#F5F5F5] p-[35px] rounded-[25px]">

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>


        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>
        
        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-[#FFFFFF] rounded-[16px] px-[15px] py-[7px] shadow-xl'>
          <div className='flex flex-row justify-start items-center h-[40px] w-full mb-[3px]'>
            <div className='w-[40%] font-Inter font-semibold text-sm'>
                Tài liệu 1
            </div>
            <div className='flex flex-row items-center'>
                <img src={cal} className='h-[17px] w-[17px]'></img>
                <div className='text-[#787486] font-Inter mx-[10px] text-sm'>
                18: 25 - 01/01/2024
                </div>
                <div>
                  <button className='text-[#0D062D] text-2xl font-bold mb-[27px]'>...</button>
                </div>
            </div>
          </div>

          <div className='flex flex-row '>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#83C29D33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#68B266] mr-[12px]'>
                Math
            </div>
            <div className='h-[23px] w-[46px] rounded-[4px] bg-[#74ADDF33] bg-opacity-30 text-xs text-center pt-[2.5px] text-[#4957D5]'>
                HK241
            </div>
          </div>
        </div>

        
        </div>
    </div>
  )
}
