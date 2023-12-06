import React from 'react';
import '../styles/Sidebar.css';
import { Outlet, Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='list'>
                <Link to="Dashboard"><p className='listItems'>DASHBOARD</p></Link>
                <Link to="Tasks"><p className='listItems'>TASKS</p></Link>
                <Link to="Notifications"><p className='listItems'>NOTIFICATION</p></Link>
                <Link to="Faculty-info"><p className='listItems'>FACULTY INFORMATION</p></Link>
                <Link to="Quicknotes"><p className='listItems'>QUICK NOTES</p></Link>
                <Link to="Profile"><p className='listItems'>PROFILE</p></Link>
                <Link to="Assigntask"><p className='listItems'>ASSIGN TASK</p></Link>
            </ul>
            <Outlet />
        </div>
    )
}