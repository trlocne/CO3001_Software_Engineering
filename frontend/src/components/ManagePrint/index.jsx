import React from 'react';
import classes from './style.module.css';

export const ManagePrint = () => {
  return (
    <div className={classes.wholeConfig}>
      {/* Header with close button */}
      <div className={classes.part1}>
        <button className={classes.close}></button>
      </div>

      {/* Main configuration area */}
      <div className={classes.part2}>
        {/* Left side with settings */}
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
                <ul className={classes.select_op}>
                  <li><input type="radio" name="pageOption" /> All</li>
                  <li><input type="radio" name="pageOption" /> Old page only</li>
                  <li><input type="radio" name="pageOption" /> Even page only</li>
                  <li><input type="radio" name="pageOption" /> <input type="text" className={classes.inputField} placeholder ="eg 2-7, 8-10"/></li>
                </ul>
              </div>
              <div className={`${classes.rightside}`}>
                <div className={classes.item_box1}>
                  <label>Page of sheet:</label>
                  <input type="text" className={classes.inputField} />
                </div>
                <div className={classes.item_box1}>
                  <label>Margin:</label>
                  <input type="text" className={classes.inputField} />
                </div>
              </div>
            </div>
          </div>
          

          {/* Share Options */}
          <div className={classes.page_container}>
            <label className={classes.page_label}>Share</label>
            <div className={`${classes.section} ${classes.borderit}`}>
              <div className={classes.item_box1}>
                <label>Tiêu đề: </label>
                <input type="text" className={`${classes.inputField} ${classes.longInput1}`} />
              </div>
              <div className={`${classes.section2} ${classes.format}`}>
                <div className={classes.item_box1}>
                  <label>Khoa: </label>
                  <input type="text" className={`${classes.inputField} ${classes.inputField1}`} />
                </div>
                <div className={classes.item_box1}>
                  <label>Môn học: </label>
                  <input type="text" className={`${classes.inputField} ${classes.inputField1}`} />
                </div>
              </div>
              <div className={`${classes.section2} ${classes.format}`}>
                <div className={classes.item_box1}>
                  <label>Danh mục: </label>
                  <input type="text" className={`${classes.inputField} ${classes.inputField1}`} />
                </div>
                <div className={classes.item_box1}>
                  <label>Năm học: </label>
                  <input type="text" className={`${classes.inputField} ${classes.inputField1}`} />
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right side preview */}
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
      <div className={classes.part3}>
        <button className={classes.shareButton}>Share</button>
        <button className={classes.payButton}>Thanh Toán</button>
      </div>
    </div>
  );
};
