import React from 'react';
import '../styles/Tasks.css';
const tasks = [
    {
      title: "Update Profile",
      deadlineTime: "23:30",
      deadlineDate: "12/12/22",
      priority: "High",
      color: "#ff0000"
    },
    {
      title: "Enter Marks",
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
  
  export default function Tasks() {
    return (
      <div className="Tasks">
        <h1>Tasks</h1>
        <div className="Tasks-box">
          {tasks.map((values) => {
            return (
              <div className="Task">
                <div className="Task--left">
                  <h3>{values.title}</h3>
                  <p>Deadline : {values.deadlineDate} {values.deadlineTime}</p>
                </div>
                <div className="Task--right">
                  <p>
                    Priority : <span style={{ color: values.color }}>{values.priority}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }