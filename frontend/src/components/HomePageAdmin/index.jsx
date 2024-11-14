import React, { useEffect, useRef, useState } from 'react';
import classes from './style.module.css';
import deletePromote from '../../assets/deletePromote.svg'
// import filterimage from '../../assets/filterimage.svg'
// import './styleModule.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
/*Duy done */
const listUsers = [
  {
    id: 1,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 2,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 3,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 4,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 5,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 6,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 7,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "User",
    detail: "CE"
  },
  {
    id: 8,
    fullname: "Nguyễn Khắc Duy kun",
    mssv: "2210517",
    username: "duykun",
    password: "123abcs",
    usertype: "SPSO",
    detail: "CE"
  },
  
];



export const HomePageAdmin = () => {
  const nameUser = "Nguyen Van A";
  const [typeUser, setTypeUser] = useState("");                 //Duy done
  const [selectUserType, setSelectUserType] = useState("All");  //Duy done  
  const [listUser, setListUser] = useState(listUsers);          //Duy done
  // const [reload, setReload] = useState(false);
  const inputRefs = useRef([]);
  // const refDD = useRef(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/listUser")
  //     .then(res => res.json())
  //     .then(data => {
  //       setListUser(data);
  //       console.log(data);
  //     }
  //     )
  //   fetch("http://localhost:3000/configFile")
  //     .then(res => res.json())
  //     .then(data => {
  //       setupLoad(data[0].sizefile);
  //       // console.log(data);
  //     })
  // }, [reload])

  const submitAccount = (e) => {
    e.preventDefault();
    const newAccount = {
      fullname: e.target[0].value,
      mssv: e.target[1].value,
      username: e.target[2].value,
      password: e.target[3].value,
      usertype: e.target[4].selectedOptions[0].value,
      detail: e.target[5].value
    }
    // fetch("http://localhost:3000/listUser", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(newAccount)

    // })
    //   .then(res => res.json())
    //   .then(() => {
    //     setReload(!reload);
    //     Swal.fire({
    //       // position: "top-end",
    //       icon: "success",
    //       title: "Tạo khuyến mãi thành công",
    //       showConfirmButton: false,
    //       timer: 3000
    //     });
    //   })
    setListUser([...listUser, newAccount]);
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Tạo tài khoản thành công",
      showConfirmButton: false,
      timer: 3000
    });
    inputRefs.current.forEach(ref => ref.value = '');
    // console.log(listUser);
  };
  const handleDeleteAccount = (id) => {
    Swal.fire({
      title: "Bạn chắc chắn muốn xóa tài khoản này?",
      text: "Bạn sẽ không thể hoàn tác bước này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vẫn xóa!",
      cancelButtonText: "Hủy"
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:3000/listUser/${id}`, {
        //   method: "DELETE"
        // })
        //   .then(res => res.json())
        //   .then(() => {
        //     setReload(!reload);
        //   })
        // Hàm xóa khuyến mãi
        // 
        setListUser(listUser.filter(item => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Bạn đã xóa thành công.",
          showConfirmButton: false,
          icon: "success",
          timer: 3000
        });
      }
    });

  }
  
  /*Duy done */
  const handleFilter = (e) => {
    setSelectUserType(e.target.selectedOptions[0].value);
  };

  const handleTypeUser = (e) => {
    setTypeUser(e.target.selectedOptions[0].value);
  };

  const handleUpLoad = (e) => {
    // console.log(e.target.selectedOptions[0].value);
    setupLoad(e.target.selectedOptions[0].value);
  };



  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.info_h}> Hi, {nameUser}</div>
        <p className={classes.info_p}>Hope you have a good day</p>
      </div>
      <div className={classes.search}>
        <div className={classes.search__filter}>

          <select value={selectUserType} onChange={handleFilter} className={classes.filter_HK}>
            <option value="All">All</option>
            <option value="SPSO">SPSO</option>
            <option value="User">User</option>
          </select>
        </div>
        <input className={classes.search__search} placeholder='Search for Library...' />
      </div>
      <div className={classes.table}>
        <table>
          <thead>
            <th>Họ và Tên</th>
            <th>MSSV</th>
            <th>Tên tài khoản</th>
            <th>Mật khẩu</th>
            <th>Loại tài khoản</th>
            <th>Chi tiết</th>
            <th className={classes.hidden_th}></th>
          </thead>
          <tbody style={{ height: "240px", overflowY: "auto" }}>
            {listUsers.map((item) => {
              if (selectUserType === "All" || item.usertype === selectUserType) {
                return (
                  <tr key={item.id}>
                    <td>{item.fullname}</td>
                    <td>{item.mssv}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.usertype}</td>
                    <td>{item.detail}</td>
                    <td><img className={classes.hidden_td} src={deletePromote} onClick={() => handleDeleteAccount(item.id)} /></td>
                  </tr>)
              }
            }
            )}
          </tbody>
        </table>
      </div>
      <form onSubmit={submitAccount} className={classes.formPormote}>
        <div className={`${classes.fP__block}`}>
          <div className={classes.block_1}>
            <div className={classes.block_item}>
              <label htmlFor="username">Tên tài khoản</label>
              <input ref={(el) => inputRefs.current[0] = el} className={`${classes.item_box} ${classes.input_date} bg-[#fff]`} type="text" required />
            </div>
            <div className={classes.block_item}>
              <label htmlFor="fullname">Họ và tên</label>
              <input ref={(el) => inputRefs.current[1] = el} className={`${classes.item_box} ${classes.input_date}`} type="text" required />
            </div>
          </div>
          <div className={classes.block_2}>
            <div className={classes.block_item}>
              <label className={classes.label_date} htmlFor="password">Mật khẩu</label>
              <input ref={(el) => inputRefs.current[2] = el} className={`${classes.item_box} ${classes.input_date}`} type="text" required />
            </div>
            <div className={classes.block_item}>
              <label className={classes.label_date} htmlFor="mssv">Mã số sinh viên</label>
              <input ref={(el) => inputRefs.current[3] = el} className={`${classes.item_box}`} type="text" required />
            </div>
            <div className={classes.block_item}>
              <label htmlFor="usertype">Loại tài khoản</label>
              <select ref={(el) => inputRefs.current[4] = el} className={`${classes.item_box}`} value={typeUser} onChange={handleTypeUser}>
                <option value="User">User</option>
                <option value="SPSO">SPSO</option>
              </select>
            </div>
          </div>
        </div>
        <button className={classes.btn_save}>Create</button>
      </form>
    </div>
  )
}