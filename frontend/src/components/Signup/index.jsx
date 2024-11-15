import React , {useEffect, useState} from 'react';
import classes from './style.module.css';
import logo from '../../assets/logo.png'


export const Signup = () => {
  const [user, setUser] = useState(true);
  return (
    <div>
    <div className={classes.header_border}>
      </div>
      <div>
    <div className='flex flex-row justify-between h-[70px] items-center px-[5%] '>
      <div className='flex flex-row justify-start items-center'>
        <img src={logo} className='p-[5px] w-[50px] h-[50px] py-[10px]'/>
        <div className=' font-semibold'>
          HCMUT-SPSS
        </div>
        
      </div>
      <div>
        <ul className="flex flex-row min-w-[230px] justify-between font-semibold cursor-pointer">
          <li className='hover:text-[#0f6cbf] font-semibold'>Home</li>
          <li className='hover:text-[#0f6cbf] font-semibold'>Hướng dẫn sử dụng</li>
        </ul>
      </div>
      <div>
        <button className='w-[100px] bg-[#0f6cbf] hover:opacity-90 rounded-[60px] text-[#fff] font-semibold py-[3px]'>Login</button>
      </div>
    </div>
    </div>

    <div className='flex flex-col w-[360px] mt-[90px] mx-auto mb-[190px]'>
      <div className='flex flex-row mb-[20px] w-[356px] bg-[#f2f2f2] rounded-[25px] p-[5px]'>
        <div>
          <button className={`w-[173px] h-[40px]  ${user ? `bg-[#0f6cbf] text-[#fff]` : ``} rounded-[25px] font-semibold py-[3px]`} onClick={() => setUser(true)}>HCMUT Account</button>
        </div>
        <div>
          <button className={`w-[173px] h-[40px] ${!user ? `bg-[#0f6cbf] text-[#fff]` : ``} rounded-[25px] font-semibold py-[3px]`} onClick={() => setUser(false)}>SPSO Account</button>
        </div>
      </div>
      <form className='flex flex-col mt-[35px]'>
          <label for='name'className='h-[35px] font-semibold'>User's name</label>
          <input type='text' id='name' className='h-[35px] w-full rounded-[5px] bg-[#f1f1f1cd] mb-[10px] outline-none px-[15px] py-[20px]'/>

          <label for='password' className='h-[35px] font-semibold items-center'>Password</label>
          <input type='password' id='password' className='h-[35px] w-full rounded-[5px] bg-[#f1f1f1cd] mb-[10px] outline-none  px-[15px] py-[20px]'/>
      </form>
      <div className='w-full text-[#0f6cbf] text-right mb-[15px]'>
        <a href='#'className='font-semibold hover:opacity-90'>Quên mật khẩu ?</a>
      </div>

      <div>
        <button className='w-full h-[54px] bg-[#0f6cbf] hover:opacity-90 rounded-[60px] text-[#fff] font-semibold py-[3px]'>Login</button>
      </div>
    </div>

    <div className= 'bg-[#062251] w-100vm max-h-[270px] text-white text-sm py-[3em] px-[5em] mt-[120px] font-bold'>
      <div className='flex flex-row justify-between h-[220px] text-white'>
        <div className='lg:flex flex-col w-[20%] hidden'>
          <img src={logo} className=' h-[90px] w-[130px]'/>  
          <div className='p-[5px] leading-[23px] text-white'>
          Trang web HCMUT-SSPS thuộc khuôn khổ môn học Công nghệ phầm mềm
           của các bạn học sinh trường đại học Bách Khoa, Đại học Quốc gia TPHCM
          </div>         
        </div>
        <div className='lg:flex-col lg:flex hidden '>
          <div className='text-xl font-bold pb-[1em] text-white'>
            Services
          </div>
          <ul>
            <li className='pb-[0.75em] text-white'>
              Customers
            </li>
            <li className='pb-[0.75em] text-white'>
              Collaboratiors
            </li>
          </ul>
        </div>

        <div className='lg:flex-col lg:flex hidden'>
          <div className='text-xl pb-[1em] font-bold text-white'>
            School
          </div>
          <ul>
            <li className='pb-[0.75em] text-white'>
              About Us
            </li>
            <li className='pb-[0.75em] text-white'>
              Our Team
            </li>
          </ul>
        </div>

        <div className='lg:flex-col lg:flex hidden'>
          <div className='text-xl pb-[1em] font-bold text-white'>
            Suppport
          </div>
          <ul>
            <li className='pb-[0.75em] text-white'>
              FAQs
            </li>
            <li className='pb-[0.75em] text-white'>
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className='flex-col lg:w-[25%]'>
          <div className='text-xl pb-[1em] font-bold text-white'>
            Contact Us
          </div>
          <ul>
            <li className='pb-[0.75em] text-white'>
              Email: example@hcmut.edu.vn
            </li>
            <li className='pb-[0.75em] text-white'>
              Call: +84 1234 5678
            </li>
            <li className='pb-[0.75em] text-white'>
            Address: Trường đại học Bách khoa, 
            Đại học quốc gia TPHCM, Đông hoà, Dĩ an, Bình Dương.
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
    
  );
};
