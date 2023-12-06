import React from 'react';
import '../styles/ContentBlock.css';
import Dashboard from './Dashboard.js';
import Quicknotes from './Quicknotes.js';
import TasksMain from './TasksMain.js';
import TasksElaborated from './TasksElaborated.js';
import TasksStatus from './TasksStatus.js';
import NotificationsElaborated from './Notifications-Elaborated.js';
import Facultyinfo from './Faculty-info.js';
import Assigntask from './assign-task.js';
import Profile from './profile.js';
import { useParams } from 'react-router-dom';

export default function ContentBlock() {
    const { type,ty } = useParams();

    return (
        <div className='contentblock'>
            {type === 'Dashboard' && <Dashboard />}
            {type === 'Quicknotes' && <Quicknotes />}
            {type === 'Notifications' && <NotificationsElaborated /> }
            {type === 'Faculty-info' && <Facultyinfo /> }
            {type === 'Assigntask' && <Assigntask /> }
            {type === 'Profile' && <Profile />}
            {ty === 'TasksElaborated' && <TasksElaborated />}
            {ty === 'TasksStatus' && <TasksStatus />}
            {type === 'Tasks' && ty !== 'TasksElaborated' && ty !== 'TasksStatus' && <TasksMain />} 
            
        </div>
    )
}