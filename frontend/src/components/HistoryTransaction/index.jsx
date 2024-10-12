import React, {useState, useContext} from 'react'
import classes from './style.module.css'
import { GlobalContext } from '../../Context'
import {BillToPDF} from '../BillToPDF'

export const HistoryTransaction = () => {
    const { bill, setBill } = useContext(GlobalContext);
    const [activate, setActivate] = useState(false);
    const [selectbill, setSelectBill] = useState(bill[0]?.title);
    const [billData, setBillData] = useState({
      code:'#1234',
      customerName: 'Trần Duy Phương Lỏd',
      time: '11:00 22/07/2024',
      mssv: '2211937',
      slg: 500,
      price: "200.000",
      priceDis: "10.0000",
      total: "190.000"
    });
    return (
      <div className={`flex flex-row justify-around mt-[20px]`}>
        <ul className={`h-full m-[20px] w-[250px] cursor-pointer` }>
          {bill.map((billItem, index) => (
            <li key={index} className={selectbill != billItem.title ? `flex flex-row my-[5px]` : ` my-[5px] flex flex-row rounded-lg bg-[#5030e514]`} onClick={() => setSelectBill(billItem.title)}>
              <div className={`py-[10px] px-[10px]`}>
                <h2 className='font-bold cursor-pointer'>{billItem.title}</h2>
                <p className='text-[12px] text-gray-500'>{billItem.time}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={`h-full m-[20px] w-[820px]`}>
            <div className='flex flex-row'>
                <BillToPDF billData={billData}/>
            </div>
        </div>
      </div>
    );
}
