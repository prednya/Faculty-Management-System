import React from 'react';
import '../styles/assign-task.css';

export default function assigntask() {
    return (
        <div className='assigntask'>
            <div className='assigntask---t'>
                <h1>Task</h1>
                <button className='Button--archive assign'>Archives</button>
            </div>    
            <div className='assigntask-box'>
                        <div className='assigntask-Top'>
                            <div className='at--title'>
                                <h4>Title : </h4>
                                <div className='box bb1'></div>
                            </div>
                            <div className='at--fix--to--from'>
                                <div className='at--fix--to'>
                                    <h4>To : </h4>
                                    <div className='box bb2'></div>
                                </div>
                                <div className='at--fix--from'>
                                    <h4>From : </h4>
                                    <div className='box bb3'></div>
                                </div>
                            </div>
                            <div className='at--desc'>
                                <h4>Description : </h4>
                                <div className='box bb4'></div>
                            </div>
                        </div>
                        <div className='assigntask-Bottom'>

                            <div className='ela---values'>
                                Priority : 
                                <div className='box Status-box'>
                                        
                                </div>
                            </div>
                            <div className='ela---values'>
                                Require File : 
                                <div className='box File-box'>
                                        
                                </div>
                            </div>
                            <div className='ela---values'>
                                Require Link   : 
                                <div className='box Link-box'>

                                </div>
                            </div>
                        </div>
                        <div className='AT--Footer'>
                            <button className='at--Button--footer'>Assign</button>
                        </div>
            </div>
        </div>
    )
}