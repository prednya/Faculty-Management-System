import React from 'react';
import '../styles/Notifications.css';
const notifs = [
    {
      title: "Overdue",
      message: "Task LMN exceeded deadline",
      date: "12/12/22",
      time: "23:30",
    },
    {
      title: "Completed",
      message: "Task ABC Completed",
      date: "01/07/22",
      time: "07:30",
    },
  ];
  
  export default function Notifications() {
    return (
      <div className="Notifications">
        <h1>Notifications</h1>
        <div className="Notifications-box">
          {notifs.map((val) => {
            return (
              <div className="Notification">
                <div className="Notification--left">
                  <h3>{val.title}</h3>
                  <p>{val.message}</p>
                </div>
                <div className="Notification--right">
                  <p>{val.date} {val.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }