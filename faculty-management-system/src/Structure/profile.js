import React from 'react';
import '../styles/profile.css';
import user from '../img/user.png';

export default function profile() {
    return(
    <div className='profile--box'>
        <div className='profile--left'>
            <h1>KABILAN K K</h1>
            <h3>HOD</h3>
            <div className='profile--data'>
                <div className='profile--row'>
                    <h5 className='Left--para'>Date of joining</h5>
                    <h5 className='Right--para rp1'>22nd March 1989</h5>
                </div>
                <div className='profile--row'>
                    <h5 className='Left--para'>Email</h5>
                    <h5 className='Right--para rp2'>abc@psgtech.ac.in</h5>
                </div>
                <div className='profile--row'>
                    <h5 className='Left--para'>Supervisor</h5>
                    <h5 className='Right--para rp3'>Harsha Vardhan V M</h5>
                </div>
                <div className='profile--row'>
                    <h5 className='Left--para'>Some URL</h5>
                    <h5 className='Right--para rp4'>scholar.psg.com/prednya</h5>
                </div>
                <div className='profile--row'>
                    <h5 className='Left--para'>Qualifications</h5>
                    <div className='Right--para rp5'>
                        <h5>BE Computer Science</h5>
                        <h5>ME Computer Science</h5>
                        <h5>Ph.D Computer Science Engineering</h5>
                    </div>
                </div>
                <div className='profile--row'>
                    <div className='pro-left'>
                        <h5 className='Left--para'>Research</h5>
                        <div className='Right--para rp6'>
                            <h5>Cyber Security</h5>
                            <h5>Cryptography</h5>
                            <h5>Data Structures</h5>
                        </div>
                    </div>  
                    <div className='pro-right'>
                        <h5 className='Left--para'>Expertise</h5>
                        <div className='Right--para rp7'>
                            <h5>Software Tech</h5>
                            <h5>Data Structures</h5>
                            <h5>DBMS</h5>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <div className='profile--right'>
            <img src={user} width={130}/>
            <button className='Edit--button'>Edit Profile</button>
        </div>
        
    </div>
    );
}