import React from 'react';
import '../styles/Notifications-Elaborated.css';
import arrow from '../img/down.png';

import { Outlet, Link } from "react-router-dom";

const notifications = [
    {
      title: "Remainder",
      deadlineDate: "Date : 01/06/22 Time : 23:30",
      desc: "Task App is assigned in 1 Day"
    },
    {
      title: "New Task",
      deadlineDate: "Date : 01/07/22 Time : 07:30",
      desc: "New Task assigned by Dr.Mohan"
    },
    {
      title: "Overdue",
      deadlineDate: "Date : 29/05/22 Time : 09:00",
      desc: "Task exceeded deadline"
    },
    {
        title: "Completed",
        deadlineDate: "Date : 25/05/22 Time : 07:00",
        desc: "Task Report done"
      },
  ];
  
  export default function NotificationsElaborated() {
    return (
      <div className="NotifssMain">
        <div className='NotifssMain--top'>
            <h1>Notifications</h1>
            <div className='buttons_2'>
            <button className='Button--archive b1'>Archives</button>
            <button className='Button--archive'>Clear</button>
            </div>
        </div>
        <div className="NotifssMain-box">
          {notifications.map((values) => {
            return (
              <div className="NotifMain">
                <div className="NotifMain--left">
                  <h3>{values.title}</h3>
                  <p>{values.desc}</p>
                </div>
                <div className="NotifMain--right">
                  <p className='time'>
                     {values.deadlineDate}
                  </p>
                  <div className='NotifMain--right--lower'>
                    <p className='NotifArrow'>
                          {/* <p className='Li'>Details</p> */}
                          <Link to="Tasks/TasksElaborated"><img src={ arrow } width={15}/></Link>
                    </p>
                  </div>  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }