import React from 'react';
import logo from '../img/PSG_LOGO.jpg';
import user from '../img/user.png';
import '../styles/Header.css';

export default function Header() {
    return (
        <header>
            <div className='header--logo'>
                <img src={ logo } alt='PSG-LOGO' />
            </div> 
            <div className='header--college-name'>
                <h5 className='PSG-name'>PSG College of Technology</h5>
                <h2 className='PSG-Faculty'>Faculty Management System</h2>
            </div>
            <div className='header--profile'>
                <img src={ user } alt='User' />
            </div>
        </header>
    )
}