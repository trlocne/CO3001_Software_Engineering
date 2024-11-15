import React from 'react';
import classes from './style.module.css';
export const ManagePrint = () => {
  // const inputRefs = useRef([]);

  const submitConfig = (e) => {
    e.preventDefault();
    const newPrint = {
      place: e.target[0].value,
      printinfo: e.target[1].value,
      noprint: e.target[2].value,
      layout: e.target[3].value,
      color: e.target[4].selectedOptions[0].value,
      papersize: e.target[5].value,
      scale: e.target[6].value,
      nosided: e.target[7].selectedOptions[0].value,
      qr: e.target[8].checked ? e.target[8].value : null,
      page: (() => {
        const selectedOption = e.target.querySelector('input[name="pageOption"]:checked');
        if (selectedOption.nextElementSibling && selectedOption.nextElementSibling.type === 'text') {
          return selectedOption.nextElementSibling.value;
        }
        return selectedOption.value;
      })()
    }
    setListUser([...listUser, newAccount]);
    Swal.fire({
      icon: "success",
      title: "Chọn in thành công",
      showConfirmButton: false,
      timer: 3000
    });
    inputRefs.current.forEach(ref => ref.value = '');
  };
  return (
    <div className={classes.wholeConfig}>
      <div className={classes.part1}>
        <button className={classes.close}></button>
      </div>
      <div className={classes.con_pre_section}>
        <div className={classes.part2}>
          <div className={classes.formContainer}>
            {/* Left side with settings */}
            <form onSubmit={submitConfig} className={classes.formconfig}>
              <div className={classes.leftside1}>
                {/* Location and Printer Info */}
                <div className={classes.section2}>
                  <div className={classes.item_box}>
                    <label>Địa điểm</label>
                    <input type="text" className={classes.inputField} required/>
                  </div>
                  <div className={classes.item_box}>
                    <label>Thông số máy in</label>
                    <input type="text" className={`${classes.inputField} ${classes.longInput}`} required/>
                  </div>
                </div>

                {/* Print Settings */}
                <div className={classes.section3}>
                  <div className={classes.item_box}>
                    <label>Số bản in:</label>
                    <input type="text" className={classes.inputField} required/>
                  </div>
                  <div className={classes.item_box}>
                    <label>Layout:</label>
                    <select className={classes.inputField} required>
                      <option><p>Landscape</p></option>
                      <option>Portrait</option>
                    </select>
                  </div>
                  <div className={classes.item_box} >
                    <label>Colors:</label>
                    <select className={classes.inputField} required>
                      <option>Black and white</option>
                      <option>Color</option>
                    </select>
                  </div>
                </div>

                {/* Paper and Scale */}
                <div className={classes.section3}>
                  <div className={classes.item_box}>
                    <label>Paper Size</label>
                    <select className={classes.inputField} required>
                      <option>Letter</option>
                      <option>A4</option>
                      <option>A3</option>
                    </select>
                  </div>
                  <div className={classes.item_box}>
                    <label>Scale (%)</label>
                    <input type="text" className={classes.inputField} required/>
                  </div>
                  <div className={classes.item_box}>
                    <label>Số mặt in:</label>
                    <select className={classes.inputField} required>
                      <option>Single sided</option>
                      <option>Double sided</option>
                    </select>
                  </div>
                </div>
              
                {/* QR Code */}
                <div className={classes.section1}>
                  <input type="checkbox" />
                  <label> Tạo mã QR nhận</label>
                </div>

                {/* Page Options */}
                <div className={classes.page_container}>
                  <label className={classes.page_label}>Page</label>
                  <div className={`${classes.section2} ${classes.borderit}`}>
                    <div className={`${classes.leftside} `}>
                      <ul className={classes.select_op} >
                        <li><input type="radio" name="pageOption" /> All</li>
                        <li><input type="radio" name="pageOption" /> Old page only</li>
                        <li><input type="radio" name="pageOption" /> Even page only</li>
                        <li><input type="radio" name="pageOption" /> <input type="text" className={classes.inputField} placeholder ="eg 2-7, 8-10"/></li>
                      </ul>
                    </div>
                    <div className={`${classes.rightside}`}>
                      <div className={classes.item_box1}>
                        <label>Page of sheet:</label>
                        <input type="text" className={classes.inputField} required/>
                      </div>
                      <div className={classes.item_box1}>
                        <label>Margin:</label>
                        <input type="text" className={classes.inputField} required/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={classes.payButton}>Thanh Toán</button>
            </form>
          
            {/* Share Options */}
            <div className={`${classes.page_container} ${classes.leftside2}`}>
              <form onSubmit={submitConfig} className={classes.formShare}>
                <label className={classes.page_label}>Share</label>
                <div className={`${classes.section} ${classes.borderit}`}>
                  <div className={classes.item_box1}>
                    <label>Tiêu đề: </label>
                    <input type="text" className={`${classes.inputField} ${classes.longInput1}`} required/>
                  </div>
                  <div className={`${classes.section2} ${classes.format}`}>
                    <div className={classes.item_box1}>
                      <label>Khoa: </label>
                      <input type="text" className={`${classes.inputField} ${classes.inputField1}`} required/>
                    </div>
                    <div className={classes.item_box1}>
                      <label>Môn học: </label>
                      <input type="text" className={`${classes.inputField} ${classes.inputField1}`} required/>
                    </div>
                  </div>
                  <div className={`${classes.section2} ${classes.format}`}>
                    <div className={classes.item_box1}>
                      <label>Danh mục: </label>
                      <input type="text" className={`${classes.inputField} ${classes.inputField1}`} required/>
                    </div>
                    <div className={classes.item_box1}>
                      <label>Năm học: </label>
                      <input type="text" className={`${classes.inputField} ${classes.inputField1}`} required/>
                    </div>
                  </div>
                </div>
                <button className={classes.shareButton}>Share</button>
              </form>
            </div>
          </div>
        </div>

        <div className={`${classes.rightside} ${classes.rightsize}`}>
          <div className={classes.page_remain}>
            <p className={classes.page_rm}> Số trang hiện có: <b className={classes.numberpage}>10</b></p>
          </div>
          <iframe
            src="about:blank"
            title="file preview"
            className={classes.preview}
          ></iframe>
        </div>
      </div>
      {/* Footer with buttons */}
    </div>
  );
};
