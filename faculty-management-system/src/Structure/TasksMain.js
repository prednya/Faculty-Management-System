import React from 'react';
import '../styles/TasksMain.css';
import arrow from '../img/down.png';

import { Outlet, Link } from "react-router-dom";

const tasks = [
    {
      title: "Update Profile",
      deadlineTime: "23:30",
      deadlineDate: "12/12/22",
      priority: "High",
      color: "#ff0000"
    },
    {
      title: "Guest Lecture",
      deadlineTime: "07:30",
      deadlineDate: "01/07/22",
      priority: "Medium",
      color: "#efcc00"
    },
    {
      title: "Complete quarterly report",
      deadlineTime: "09:00",
      deadlineDate: "10/09/22",
      priority: "Low",
      color: "#008000"
    },
  ];
  
  export default function TasksMain() {
    return (
      <div className="TasksMain">
        <div className='TasksMain--top'>
            <h1>Tasks</h1>
            <button className='Button--archive'>Archives</button>
        </div>
        <div className="TasksMain-box">
          {tasks.map((values) => {
            return (
              <div className="TaskMain">
                <div className="TaskMain--left">
                  <h3>{values.title}</h3>
                  <p>Deadline : {values.deadlineDate} {values.deadlineTime}</p>
                </div>
                <div className="TaskMain--right">
                  <p>
                    Priority : <span style={{ color: values.color }}>{values.priority}</span>
                  </p>
                  <div className='TaskMain--right--lower'>
                    <Link to="Tasks/TasksStatus"><div className='Button--archive'>
                        Status
                    </div></Link>
                    <p className='Arrow'>
                          <p className='Li'>Details</p>
                          <Link to="Tasks/TasksElaborated"><img src={ arrow } width={15}/></Link>
                    </p>
                  </div>  
                  {/* <Outlet /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }