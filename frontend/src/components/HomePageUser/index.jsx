<<<<<<< HEAD
import React, { useState } from 'react'
import classes from './style.module.css'
import Folder_dublicate_duotone from '../../assets/Folder_dublicate_duotone.svg'
import onProgressDot from '../../assets/onProgressDot.svg'
import doneDot from '../../assets/doneDot.svg'
import calendar_Phong from '../../assets/calendar_Phong.svg'
import location from '../../assets/location.svg'

const document =[
  {
    id: 1,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 2,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 3,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 4,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 5,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 6,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 7,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 8,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 9,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 10,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 11,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  },
  {
    id: 12,
    title: "Tài liệu 1",
    status: "On Progress",
    location: "Tầng 1- GDH6",
    time: "18:25 - 01/01/2024"
  }
  
]; 

=======
import React from 'react'
import classes from './style.module.css'
>>>>>>> a3f2b9d3a828790161e70d5f33aae127ebf00e9a
export const HomePageUser = () => {
  const nameUser = "Nguyen Van A";
  const numberHPage =200;
  const numberPPage =1000;

  const [selectHK, setSelectHK] = useState("All");
  const handleFilter = (e) => {
    setSelectHK(e.target.selectedOptions[0].value);
  };
  return (
<<<<<<< HEAD
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.info_name}>
          <div className={classes.info_h}> Hi, {nameUser}</div>
          <p className={classes.info_p}>Hope you have a good day</p>
        </div>
        <div className={classes.info_page}>
          <div className={classes.info_hPage}>
            <div className={classes.hPage_img}><img src={Folder_dublicate_duotone}/></div>
            <div className={classes.hPage_content}>
              <div className={classes.content_title}>Số trang giấy</div>
              <div className={classes.content_number}>{numberHPage}</div>
            </div>
          </div>
          <div className={classes.info_pPage}>
            <div className={classes.pPage_title}>Số trang đã in trong tháng</div>
            <div className={classes.pPage_number}>{numberPPage}</div>
          </div>
        </div>
      </div>
      <div className={classes.filter}>
          <select value={selectHK} onChange={handleFilter} className={classes.filter_HK}>
            <option value="All">All</option>
            <option value="HK231">HK231</option>
            <option value="HK232">HK232</option>
            <option value="HK233">HK233</option>
          </select>
          <select value={selectHK} onChange={handleFilter} className={classes.filter_calendar}>
            <option value="All">All</option>
            <option value="HK231">HK231</option>
            <option value="HK232">HK232</option>
            <option value="HK233">HK233</option>
          </select>
      </div>
      <div>
        <div className={classes.body}>
          {document.map(item=>(
            <div key={item.id} className={classes.document}>
              <div className={classes.line1}>
                <div className={classes.doc_title}>{item.title}</div>
                {item.stats!=="Done"?(
                  <img className={classes.doc_dot} src={onProgressDot}/>
                ):(
                  <img className={classes.doc_dot} src={doneDot}/>
                )}
                <div className={classes.doc_status}>{item.status}</div>
              </div>
              <div  className={classes.line2}>
                <img className={classes.doc_locIMG} src={location} />
                <div className={classes.doc_loc}>{item.location}</div>
                <img className={classes.doc_calenIMG} src={calendar_Phong} />
                <div className={classes.doc_time}>{item.time}</div>
              </div>
              <div className={classes.ellipsis }>. . .</div>
            </div>
          ))}
      </div>
      </div>
      
    </div>

=======
    <div>HomePageUser</div>
>>>>>>> a3f2b9d3a828790161e70d5f33aae127ebf00e9a
  )
}
