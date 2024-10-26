import React from 'react'
import classes from './style.module.css'

export const StatisticsSPSO = () => {
  const nameUser = "Tran Loc ec dok";
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.info_h}> Hi, {nameUser}</div>
        <p className={classes.info_p}>Hope you have a bad day</p>
      </div>
      <div className={classes.body}>
        <div className={classes.header_}>
          <div className={classes.statistics}>Thống kê</div>
          <div className={classes.sandf}>
            <select className={classes.filter}>
              <option value="All">Filter</option>
            </select>
            <input className={classes.search} placeholder='Search for Library...'></input>
          </div>
        </div>
        <div className={classes.body_view}>
          <div className={classes.statis_nav}>
            <div className={classes.nav_countAccess}>Lượt truy cập</div>
            <div className={classes.nav_student}>Học sinh</div>
            <button className={classes.btn_download}> Download</button>
          </div>
          <div className={classes.viewReport}></div>
        </div>
        <div className={classes.close}></div>
      </div>
    </div>
  )
}
