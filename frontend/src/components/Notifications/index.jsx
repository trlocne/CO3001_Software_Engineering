import React, {useContext, useState} from 'react';
import classes from './style.module.css';
import { Slidebar } from '../Sidebar';
import { GlobalContext } from '../../Context';

export const Notifications = () => {
  const { noti, setNoti } = useContext(GlobalContext);

  return (
    <div className={classes.notifications}>
      <Slidebar/>
      <ul className={`h-full m-[20px] ${classes.listNoti}`}>
        {noti.map((notification, index) => (
          <li key={index} className={classes.notificationItem}>
            <img src={notification.avatar} alt="Avatar" className={classes.avatar} />
            <div className={classes.notificationContent}>
              <h2>{notification.title}</h2>
              <p>{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};