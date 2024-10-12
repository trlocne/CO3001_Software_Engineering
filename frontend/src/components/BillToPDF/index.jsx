import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from '../../assets/hcmut.svg';
import generatePDF from 'react-to-pdf';


export const BillToPDF = ({billData}) => {
  const printRef = useRef();
  
  const Bill = ({billData}) => {
    return (
      <div className={`w-[800px] p-[30px]`}>
        <div className='flex flex-row justify-around items-center my-[30px]'>
          <div className='flex flex-row w-[220px] justify-items-center items-center h-[100%] center justify-center'>
            <img src={logo} className='p-[5px] w-[50px] h-[60px] py-[10px]'/>
            <h1 className='font-semibold text-xl text-[#0D062D]'>HCMUT-SSPS</h1>
          </div>
          <h1 className='font-bold text-xl text-[#0D062D] h-fit'>Invoice</h1>
        </div>
        <h1 className='font-bold p-[5px] mt-[40px]'>Bill id: {billData.code}</h1>
        <h2 className='flex flex-row px-[5px]'> <p className='font-bold pr-[5px]'>Customer:</p> {billData.customerName}</h2>
        <h2 className='flex flex-row px-[5px]'> <p className='font-bold pr-[5px]'>MSSV:</p> {billData.mssv}</h2>
        <h2 className='flex flex-row px-[5px]'> <p className='font-bold pr-[5px]'>Time:</p> {billData.time}</h2>
        <div className="w-full p-6 my-[80px] font-sans">
          <div className="flex justify-between mb-2 w-full">
            <span className="text-gray-700">Số lượng giấy mua</span>
            <span className="text-gray-700">{billData.slg} tờ</span>
          </div>
          <div className="flex justify-between mb-2 w-full">
            <span className="text-gray-700">Tổng tiền giấy</span>
            <span className="text-gray-700">{billData.price} vnd</span>
          </div>
          <div className="flex justify-between mb-2 w-full">
            <span className="text-gray-700">Giảm giá:</span>
            <span className="text-gray-700">{billData.priceDis} vnd</span>
          </div>
          <div className="flex justify-between font-bold text-lg w-full">
            <span className="text-gray-900 font-bold">Tổng tiền thanh toán:</span>
            <span className="text-gray-900 font-bold">{billData.total} vnd</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div ref={printRef}>
        <Bill
          billData={billData}
        />
      </div>
      
      <button onClick={() => generatePDF(printRef, {filename: billData.code + '.pdf'})}>Save as PDF</button>
    </div>
  );
};

