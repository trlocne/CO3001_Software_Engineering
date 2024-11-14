import React from 'react';
import classes from './style.module.css';

export const ConfigPrint = () => {
  return (
    <div className={classes.configPrint}>


      {/* Header section */}
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Hi, Nguyen Van A</h1>
        <p className={classes.headerSubtitle}>Hope you have a good day</p>
        {/* Filter button */}
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




      {/* Main content section (grid of printer cards) */}
      <main className={classes.printerDashboard}>
        <div className={classes.printerGrid}>
          {/* Printer card 1 */}
          <div className={classes.printerCard}>
            <div className={classes.printerCardHeader}>
              <svg className={classes.cardDots} fill="#000000" width="25px" height="25px" viewBox="0 0 32.00 32.00" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000" stroke-width="0.00032">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768">
                  <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path>
                  <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                  <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path>
                  <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                  <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g>
              </svg>
              <h2 className={classes.printerCardTitle}>H1-101</h2>
              <span className={classes.printerStatusIndicator}></span>
            </div>

            <div className={classes.printerCardDetails}>
              <svg className={classes.printerIcon} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                <path d="M14 25C14 23.1144 14 22.1716 14.5858 21.5858C15.1716 21 16.1144 21 18 21H66C67.8856 21 68.8284 21 69.4142 21.5858C70 22.1716 70 23.1144 70 25V47C70 47.9428 70 48.4142 69.7071 48.7071C69.4142 49 68.9428 49 68 49H59.8C59.6586 49 59.5879 49 59.5439 48.9561C59.5 48.9121 59.5 48.8414 59.5 48.7V40.5C59.5 39.5572 59.5 39.0858 59.2071 38.7929C58.9142 38.5 58.4428 38.5 57.5 38.5H26.5C25.5572 38.5 25.0858 38.5 24.7929 38.7929C24.5 39.0858 24.5 39.5572 24.5 40.5V48.7C24.5 48.8414 24.5 48.9121 24.4561 48.9561C24.4121 49 24.3414 49 24.2 49H15C14.5286 49 14.2929 49 14.1464 48.8536C14 48.7071 14 48.4714 14 48V25Z" fill="#222222" />
                <path d="M24.5 72.7615L24.5 40.5C24.5 39.5572 24.5 39.0858 24.7929 38.7929C25.0858 38.5 25.5572 38.5 26.5 38.5L57.5 38.5C58.4428 38.5 58.9142 38.5 59.2071 38.7929C59.5 39.0858 59.5 39.5572 59.5 40.5L59.5 72.7615C59.5 73.0961 59.5 73.2634 59.3902 73.3378C59.2803 73.4121 59.125 73.35 58.8143 73.2257L50.9357 70.0743C50.844 70.0376 50.7981 70.0193 50.75 70.0193C50.7019 70.0193 50.656 70.0376 50.5643 70.0743L42.1857 73.4257C42.094 73.4624 42.0481 73.4807 42 73.4807C41.9519 73.4807 41.906 73.4624 41.8143 73.4257L33.4357 70.0743C33.344 70.0376 33.2981 70.0193 33.25 70.0193C33.2019 70.0193 33.156 70.0376 33.0643 70.0743L25.1857 73.2257C24.875 73.35 24.7197 73.4121 24.6098 73.3378C24.5 73.2634 24.5 73.0961 24.5 72.7615Z" fill="#7E869E" fill-opacity="0.25" />
                <path d="M33.25 50.75L47.25 50.75" stroke="#222222" stroke-linecap="round" />
                <path d="M33.25 61.25L50.75 61.25" stroke="#222222" stroke-linecap="round" />
                <path d="M24.5 12.5C24.5 11.5572 24.5 11.0858 24.7929 10.7929C25.0858 10.5 25.5572 10.5 26.5 10.5H57.5C58.4428 10.5 58.9142 10.5 59.2071 10.7929C59.5 11.0858 59.5 11.5572 59.5 12.5V17.2C59.5 17.3414 59.5 17.4121 59.4561 17.4561C59.4121 17.5 59.3414 17.5 59.2 17.5H24.8C24.6586 17.5 24.5879 17.5 24.5439 17.4561C24.5 17.4121 24.5 17.3414 24.5 17.2V12.5Z" fill="#222222" />
              </svg>

              <div className={classes.printerProcessing}>Số trang giấy đang được xử lý:</div>
              <div className={classes.printerProcessingNumber}>100</div>

              <div className={classes.printerProgress}>
                <div className={classes.printerPages}>
                  <p className={classes.NumberOfPages}>Số giấy</p>
                  <div className={classes.PagesBar}>
                    <div className={classes.PagesBarProgress}></div>
                  </div>
                </div>
                <div className={classes.printerInk}>
                  <p className={classes.AmountOfInk} >Số mực</p>
                  <div className={classes.InkBar}>
                    <div className={classes.InkBarProgress}></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Printer card 2 */}
          <div className={classes.printerCard}>
            <div className={classes.printerCardHeader}>
              <svg className={classes.cardDots} fill="#000000" width="25px" height="25px" viewBox="0 0 32.00 32.00" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000" stroke-width="0.00032">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768">
                  <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path>
                  <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                  <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path>
                  <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                  <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g>
              </svg>
              <h2 className={classes.printerCardTitle}>H1-101</h2>
              <span className={classes.printerStatusIndicator}></span>
            </div>

            <div className={classes.printerCardDetails}>
              <svg className={classes.printerIcon} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                <path d="M14 25C14 23.1144 14 22.1716 14.5858 21.5858C15.1716 21 16.1144 21 18 21H66C67.8856 21 68.8284 21 69.4142 21.5858C70 22.1716 70 23.1144 70 25V47C70 47.9428 70 48.4142 69.7071 48.7071C69.4142 49 68.9428 49 68 49H59.8C59.6586 49 59.5879 49 59.5439 48.9561C59.5 48.9121 59.5 48.8414 59.5 48.7V40.5C59.5 39.5572 59.5 39.0858 59.2071 38.7929C58.9142 38.5 58.4428 38.5 57.5 38.5H26.5C25.5572 38.5 25.0858 38.5 24.7929 38.7929C24.5 39.0858 24.5 39.5572 24.5 40.5V48.7C24.5 48.8414 24.5 48.9121 24.4561 48.9561C24.4121 49 24.3414 49 24.2 49H15C14.5286 49 14.2929 49 14.1464 48.8536C14 48.7071 14 48.4714 14 48V25Z" fill="#222222" />
                <path d="M24.5 72.7615L24.5 40.5C24.5 39.5572 24.5 39.0858 24.7929 38.7929C25.0858 38.5 25.5572 38.5 26.5 38.5L57.5 38.5C58.4428 38.5 58.9142 38.5 59.2071 38.7929C59.5 39.0858 59.5 39.5572 59.5 40.5L59.5 72.7615C59.5 73.0961 59.5 73.2634 59.3902 73.3378C59.2803 73.4121 59.125 73.35 58.8143 73.2257L50.9357 70.0743C50.844 70.0376 50.7981 70.0193 50.75 70.0193C50.7019 70.0193 50.656 70.0376 50.5643 70.0743L42.1857 73.4257C42.094 73.4624 42.0481 73.4807 42 73.4807C41.9519 73.4807 41.906 73.4624 41.8143 73.4257L33.4357 70.0743C33.344 70.0376 33.2981 70.0193 33.25 70.0193C33.2019 70.0193 33.156 70.0376 33.0643 70.0743L25.1857 73.2257C24.875 73.35 24.7197 73.4121 24.6098 73.3378C24.5 73.2634 24.5 73.0961 24.5 72.7615Z" fill="#7E869E" fill-opacity="0.25" />
                <path d="M33.25 50.75L47.25 50.75" stroke="#222222" stroke-linecap="round" />
                <path d="M33.25 61.25L50.75 61.25" stroke="#222222" stroke-linecap="round" />
                <path d="M24.5 12.5C24.5 11.5572 24.5 11.0858 24.7929 10.7929C25.0858 10.5 25.5572 10.5 26.5 10.5H57.5C58.4428 10.5 58.9142 10.5 59.2071 10.7929C59.5 11.0858 59.5 11.5572 59.5 12.5V17.2C59.5 17.3414 59.5 17.4121 59.4561 17.4561C59.4121 17.5 59.3414 17.5 59.2 17.5H24.8C24.6586 17.5 24.5879 17.5 24.5439 17.4561C24.5 17.4121 24.5 17.3414 24.5 17.2V12.5Z" fill="#222222" />
              </svg>

              <div className={classes.printerProcessing}>Số trang giấy đang được xử lý:</div>
              <div className={classes.printerProcessingNumber}>100</div>

              <div className={classes.printerProgress}>
                <div className={classes.printerPages}>
                  <p className={classes.NumberOfPages}>Số giấy</p>
                  <div className={classes.PagesBar}>
                    <div className={classes.PagesBarProgress}></div>
                  </div>
                </div>
                <div className={classes.printerInk}>
                  <p className={classes.AmountOfInk} >Số mực</p>
                  <div className={classes.InkBar}>
                    <div className={classes.InkBarProgress}></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Printer card 3 */}
          <div className={classes.printerCard}>
            <div className={classes.printerCardHeader}>
              <svg className={classes.cardDots} fill="#000000" width="25px" height="25px" viewBox="0 0 32.00 32.00" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000" stroke-width="0.00032">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768">
                  <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path>
                  <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                  <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path>
                  <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                  <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g>
              </svg>
              <h2 className={classes.printerCardTitle}>H1-101</h2>
              <span className={classes.printerStatusIndicator}></span>
            </div>

            <div className={classes.printerCardDetails}>
              <svg className={classes.printerIcon} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                <path d="M14 25C14 23.1144 14 22.1716 14.5858 21.5858C15.1716 21 16.1144 21 18 21H66C67.8856 21 68.8284 21 69.4142 21.5858C70 22.1716 70 23.1144 70 25V47C70 47.9428 70 48.4142 69.7071 48.7071C69.4142 49 68.9428 49 68 49H59.8C59.6586 49 59.5879 49 59.5439 48.9561C59.5 48.9121 59.5 48.8414 59.5 48.7V40.5C59.5 39.5572 59.5 39.0858 59.2071 38.7929C58.9142 38.5 58.4428 38.5 57.5 38.5H26.5C25.5572 38.5 25.0858 38.5 24.7929 38.7929C24.5 39.0858 24.5 39.5572 24.5 40.5V48.7C24.5 48.8414 24.5 48.9121 24.4561 48.9561C24.4121 49 24.3414 49 24.2 49H15C14.5286 49 14.2929 49 14.1464 48.8536C14 48.7071 14 48.4714 14 48V25Z" fill="#222222" />
                <path d="M24.5 72.7615L24.5 40.5C24.5 39.5572 24.5 39.0858 24.7929 38.7929C25.0858 38.5 25.5572 38.5 26.5 38.5L57.5 38.5C58.4428 38.5 58.9142 38.5 59.2071 38.7929C59.5 39.0858 59.5 39.5572 59.5 40.5L59.5 72.7615C59.5 73.0961 59.5 73.2634 59.3902 73.3378C59.2803 73.4121 59.125 73.35 58.8143 73.2257L50.9357 70.0743C50.844 70.0376 50.7981 70.0193 50.75 70.0193C50.7019 70.0193 50.656 70.0376 50.5643 70.0743L42.1857 73.4257C42.094 73.4624 42.0481 73.4807 42 73.4807C41.9519 73.4807 41.906 73.4624 41.8143 73.4257L33.4357 70.0743C33.344 70.0376 33.2981 70.0193 33.25 70.0193C33.2019 70.0193 33.156 70.0376 33.0643 70.0743L25.1857 73.2257C24.875 73.35 24.7197 73.4121 24.6098 73.3378C24.5 73.2634 24.5 73.0961 24.5 72.7615Z" fill="#7E869E" fill-opacity="0.25" />
                <path d="M33.25 50.75L47.25 50.75" stroke="#222222" stroke-linecap="round" />
                <path d="M33.25 61.25L50.75 61.25" stroke="#222222" stroke-linecap="round" />
                <path d="M24.5 12.5C24.5 11.5572 24.5 11.0858 24.7929 10.7929C25.0858 10.5 25.5572 10.5 26.5 10.5H57.5C58.4428 10.5 58.9142 10.5 59.2071 10.7929C59.5 11.0858 59.5 11.5572 59.5 12.5V17.2C59.5 17.3414 59.5 17.4121 59.4561 17.4561C59.4121 17.5 59.3414 17.5 59.2 17.5H24.8C24.6586 17.5 24.5879 17.5 24.5439 17.4561C24.5 17.4121 24.5 17.3414 24.5 17.2V12.5Z" fill="#222222" />
              </svg>

              <div className={classes.printerProcessing}>Số trang giấy đang được xử lý:</div>
              <div className={classes.printerProcessingNumber}>100</div>

              <div className={classes.printerProgress}>
                <div className={classes.printerPages}>
                  <p className={classes.NumberOfPages}>Số giấy</p>
                  <div className={classes.PagesBar}>
                    <div className={classes.PagesBarProgress}></div>
                  </div>
                </div>
                <div className={classes.printerInk}>
                  <p className={classes.AmountOfInk} >Số mực</p>
                  <div className={classes.InkBar}>
                    <div className={classes.InkBarProgress}></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Printer card with input fields */}
          <div className={`${classes.printerCard} ${classes.editableCard}`}>
            <div className={classes.editableCardDetails}>
              <form className={classes.printerForm}>
                <label htmlFor="name">Tên:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="H1-101"
                  className={classes.printerInput}
                />

                <label htmlFor="status">Trạng thái:</label>
                <select id="status" placeholder="Activate" className={classes.printerInput}>
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Không hoạt động</option>
                </select>

                <label htmlFor="pages">Số trang in:</label>
                <input
                  type="number"
                  id = "pages"
                  placeholder="100"
                  className={classes.printerInput}
                />

                <button type="submit" className={classes.printerSubmit}>Save</button>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
