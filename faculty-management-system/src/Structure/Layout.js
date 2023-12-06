import React from 'react';
import '../styles/Layout.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import ContentBlock from './ContentBlock';

export default function Layout() {
    return (
        <div className='Layout'>
            <Header />
            <Sidebar />
            <ContentBlock />
        </div>
    )
}