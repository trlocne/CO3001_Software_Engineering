import React from 'react'
import classes from './style.module.css'

export const StatisticsSPSO = () => {
  const  nameUser="Tran Loc";
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.info_h}> Hi, {nameUser}</div>
        <p className={classes.info_p}>Hope you have a good day</p>
      </div>
      <div className={classes.body}>
        <div className={classes.title}>
          <div className={classes.Statistics}>Thống kê</div>
          <div  className={classes.countAccess}>Lượt truy cập</div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
