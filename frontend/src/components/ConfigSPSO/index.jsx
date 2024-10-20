import React, { useRef, useState } from 'react';
import classes from './style.module.css';
import deletePromote from '../../assets/deletePromote.svg'
import calendar from '../../assets/calendar.svg'
import filterimage from '../../assets/filterimage.svg'
import arrow from '../../assets/arrow.svg'
import arrowdown from '../../assets/arrowdown.svg'
// import './styleModule.css';
const listPromotes = [
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  },
  {
    term: "HK231",
    startDate: "22/01/2023",
    endDate: "28/01/2023",
    quantity: 100,
    status: "Kết thúc",
    type: "All"
  }
];
const typefile = [
  "PDF", "WORD", "JFIF", "TIFF", "EPS"
];
const dbTypeFile = [
  "PDF", "WORD", "JFIF"
];
export const ConfigSPSO = () => {
  const nameUser = "Nguyen Van A";
  const [typePromote, setTypePromote] = useState("");
  const [selectHK, setSelectHK] = useState("All");
  const [upLoad, setupLoad] = useState(100);
  const [typeFile, setTypeFile] = useState(dbTypeFile);
  const [checkDD,setCheckDD] =useState(false);
  const [arroww,setArroww] =useState({arrow});
  const [listPromote,setListPromote]= useState(listPromotes);
  const inputRefs = useRef([]);

  const submitPromote = (e) => {
    e.preventDefault();
    const newPromote ={
      term: e.target[0].value,
      startDate: e.target[2].value,
      endDate: e.target[3].value,
      quantity: e.target[1].value,
      status: "Hoạt động",
      type: e.target[4].selectedOptions[0].value
    }
    setListPromote([...listPromote,newPromote]);
    inputRefs.current.forEach(ref => ref.value = '');
    // console.log(listPromote);
  };
  const submitConfig = (e) => {
    e.preventDefault();

  };
  const handleFilter = (e) => {
    setSelectHK(e.target.selectedOptions[0].value);
  };
  const handleTypePromote = (e) => {
    setTypePromote(e.target.selectedOptions[0].value);
  };
  const handleUpLoad = (e) => {
    // console.log(e.target.selectedOptions[0].value);
    setupLoad(e.target.selectedOptions[0].value);
  };
  // const handleTypeFile = (e) => {
  //   setTypeFile(Array.from(e.target.selectedOptions, option => option.value));
  // };
  // const createPromote =(e)=>{

  // }
  const addTF = (e)=>{
    // console.log(e);
    setTypeFile([...typeFile,e.item]);
  }
  const delTF = (e)=>{
    // console.log(e);
    setTypeFile(typeFile.filter(tf=>tf !== e.item));
  }
  const handledd=()=>{
    setArroww(arroww===arrow?arrowdown:arrow);
    setCheckDD(!checkDD);
  }
  // console.log(typeFile);
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.info_h}> Hi, {nameUser}</div>
        <p className={classes.info_p}>Hope you have a good day</p>
      </div>
      <div className={classes.search}>
        <div className={classes.search__filter}>
          
          <select value={selectHK} onChange={handleFilter} className={classes.filter_HK}>
            <option value="All"><img src={filterimage} />All</option>
            <option value="HK231">HK231</option>
            <option value="HK232">HK232</option>
            <option value="HK233">HK233</option>
          </select>
          <select value={selectHK} onChange={handleFilter} className={classes.filter_HK}>
            <option value="All">All</option>
            <option value="HK231">HK231</option>
            <option value="HK232">HK232</option>
            <option value="HK233">HK233</option>
          </select>
        </div>
        <input className={classes.search__search} placeholder='Search for Library...' />
      </div>
      <div className={classes.table}>
        <table>
          <thead>
            <th>Học kì</th>
            <th>Ngày cấp phát</th>
            <th>Ngày kết thúc</th>
            <th>Số trang A4 được cấp</th>
            <th>Trạng thái</th>
            <th>Mã</th>
            <th className={classes.hidden_th}></th>
          </thead>
          <tbody style={{ height: "240px", overflowY: "auto" }}>
            {listPromote.map((item, index) => {
              if (selectHK === "All" || item.term === selectHK) {
                return (
                  <tr key={index}>
                    <td>{item.term}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.quantity}</td>
                    <td>{item.status}</td>
                    <td>{item.type}</td>
                    <td><img className={classes.hidden_td} src={deletePromote} /></td>
                  </tr>)
              }
            }
            )}
          </tbody>
        </table>
      </div>
      <form onSubmit={submitPromote} className={classes.formPormote}>
        <div className={`${classes.fP__block} ${classes.fp__block1}`}>
          <div className={classes.block_1}>
            <div className={classes.block_item}>
              <label htmlFor="term">Học kì</label>
              <input ref={(el) => inputRefs.current[0] = el} className={classes.item_box} type="text" />
            </div>
            <div className={classes.block_item}>
              <label htmlFor="quantity">Số trang cấp</label>
              <input ref={(el) => inputRefs.current[1] = el}  className={classes.item_box} type="text" />
            </div>
          </div>
          <div className={classes.block_item}>
            <label className={classes.label_date} htmlFor="startDate"><img src={calendar} />Thời gian cấp</label>
            <input ref={(el) => inputRefs.current[2] = el}  className={`${classes.item_box} ${classes.input_date}`} type="date" />
          </div>
        </div>
        <div className={`${classes.fP__block} ${classes.fp__block2}`}>
          <div className={classes.block_item}>
            <label className={classes.label_date} htmlFor="endDate"><img src={calendar} />Thời gian kết thúc</label>
            <input ref={(el) => inputRefs.current[3] = el}  className={`${classes.item_box} ${classes.input_date}`} type="date" />
          </div>
          <div className={classes.block_2}>
            <div className={classes.block_item}>
              <label htmlFor="type">Mã cấp</label>
              <select ref={(el) => inputRefs.current[4] = el}  className={classes.item_box} value={typePromote} onChange={handleTypePromote}>
                <option value="All">All</option>
                <option value="Limted">Limited</option>
              </select>
            </div>
            <button className={classes.btn_save}>Save</button>
          </div>
        </div>
      </form>
      <form onSubmit={submitConfig} className={classes.formConfig}>
        <div className={classes.block_item}>
          <label htmlFor="">Kích thước file upload</label>
          <select className={classes.item_box} value={upLoad} onChange={handleUpLoad}>
            <option value={30}>30MB</option>
            <option value={50}>50MB</option>
            <option value={100}>100MB</option>
          </select>
        </div>
        <div className={classes.block_item}>
          <label htmlFor="">Loại file được upload</label>
          <div className={classes.configFile}>
            <div className={classes.cf_dislay}>
              <div className={classes.cf_content}>
                {typeFile.map((item, index) => (
                  <div key={index} onClick={()=>delTF({item})} className={classes.cf_item}>
                    <div className={classes.item_content}>{item}</div>
                  </div>
                ))}
              </div>
              <div className={`${classes.cf_arrow} ${checkDD? classes.cf_arrow_act : classes.cf_arrow_disact}`}><img onClick={handledd} src={arroww} /></div>
            </div>
              <div className={`${classes.cf_dd} ${checkDD? classes.appear : classes.disappear}`}>
              <div className={classes.cf_contenthd}>
                {(typefile.filter(item => !new Set(typeFile).has(item))).map((item, index) => (
                <div key={index} onClick={()=>addTF({item})}  className={classes.cf_itemhd}>
                  <div className={classes.itemhd_content}>{item}</div>
                </div>
              ))}
              </div>
            </div>
            
          </div>
        </div>
        <button className={classes.btn_save}>Save</button>
      </form>
    </div>
  )
}
