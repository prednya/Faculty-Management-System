import React from 'react';
import '../styles/Dashboard.css';
import Tasks from './Tasks.js';
import Notifications from './Notifications.js';
import Notes from './Notes.js';


export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <h1>DASHBOARD</h1>
            <div className='Dashboard--inside'>
                <Tasks />
                <div className='Dashboard--right'>
                    <Notifications />
                    <div className='Dashboard--notes'>
                        <Notes /> 
                    </div>                    
                </div>
                
            </div>
            
        </div>
    )
}