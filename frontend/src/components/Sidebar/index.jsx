import React from 'react'
import classes from './style.module.css'
import category from '../../assets/category.svg'
import mesage from '../../assets/mesage.svg'
import task from '../../assets/task.svg'
import setting from '../../assets/setting.svg'
import lampon from '../../assets/lampon.svg'
export const Slidebar = () => {
  return (
    <div className={classes.sliderbar}>
      <ul className="p-[10px]">
        <li className={` ${classes.itemSliderbar} ${classes.activate}`}><a className='flex flex-row'><img src={category} className='pr-[10px]'/> Trang chính</a></li>
        <li className={classes.itemSliderbar}><a className='flex flex-row'><img src={mesage} className='pr-[10px]'/>Dịch vụ</a></li>
        <li className={classes.itemSliderbar}><a className='flex flex-row'><img src={task} className='pr-[10px]'/>Thư viện</a></li>
        <li className={classes.itemSliderbar}><a className='flex flex-row'><img src={setting} className='pr-[10px]'/>Mua trang in</a></li>
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
