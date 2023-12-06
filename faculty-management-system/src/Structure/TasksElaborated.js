import React from 'react';
import '../styles/TasksElaborated.css';

const taskelaborated=[
    {
       title : "Update Profile",
       priority: "High",
       color: "#ff0000",
       from: "Harsha Vardhan V M",
       desc: "Document the mark aggregate for the previous semester\nand attach digital copy of the same.",
       status: "Consolidation completed",
       file: "Report.pdf"
    }
];


export default function TasksElaborated() {
    return (
        <div className='TaskElaborated'>
            <h1>Task</h1>
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
                            <p>From : <span className='values'>{ i.from } </span></p>
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