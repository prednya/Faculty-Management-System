import React from 'react';
import '../styles/TasksElaborated.css';

const taskelaborated=[
    {
       title : "Guest Lecture",
       priority: "Medium",
       color: "#efcc00",
       from: "Prednya Ramesh",
       desc: "Prepare Lecture on topic Linear Algebra to be delivered to CSE G1 on 3rd May 2022.",
       status: "Lecture Prepared and sent for verification",
       file: "Material.pdf",
       lin: "meet.google.com"
    }
];


export default function TasksStatus() {
    return (
        <div className='TaskElaborated'>
            <h1>Task Status</h1>
            <div className='TaskElaborated-box'>
                {taskelaborated.map((i)=>{
                    return(
                    <>
                        <div className='TaskElaborated-Top'>
                            <h3>{ i.title }</h3>
                            <p>
                                Priority: <span style={{ color: i.color }}>{i.priority}</span>
                            </p>
                        </div>
                        <div className='TaskElaborated-Bottom'>
                            <p>To : <span className='values'>{ i.from } </span></p>
                            <p>Description : <span className='values'>{ i.desc }</span></p>
                            <div className='ela--values'>
                                Status : 
                                <div className='Status-box'>
                                        <span>{i.status}</span>
                                </div>
                            </div>
                            <div className='ela--values'>
                                File : 
                                <div className='File-box'>
                                        <span>{i.file}</span>
                                </div>
                            </div>
                            <div className='ela--values'>
                                Link   : 
                                <div className='Link-box'>
                                    <span>{i.lin}</span>
                                </div>
                            </div>
                        </div>
                        <div className='TaskElaborated--Footer'>
                            <button className='Button--footer'>Update</button>
                            <button className='Button--footer2'>Complete</button>
                        </div>
                    </>
                    );
                })}
            </div>
        </div>
    )
}