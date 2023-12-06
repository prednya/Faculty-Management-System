import React from 'react';
import '../styles/Faculty-info.css';
import arrow from '../img/down.png';
import user from '../img/user.png';
import search from '../img/search2.png'

import { Link } from "react-router-dom";
  
  export default function Facultyinfo() {
    return (
      <div className="FacultiesMain">
        <div className='FacultiesMain--top'>
            <h1>FACULTY INFORMATION</h1>
            <div className='search---box'>
                <div className='left--search--box'><img src={search} width={30}/></div>
                <div className='right--search--box'></div>
            </div>
        </div>
        <div className="FacultiesMain-box">
            <div className='Facul--row'>
                <div className="FaculMain">
                    <div className="FaculMain--left">
                    <h3>Harsha Vardhan</h3>
                    <p>HOD</p>
                    </div>
                    <div className="FaculMain--right">
                        <img src={ user } />
                    <div className='FaculMain--right--lower'>
                        <p className='FaculArrow'>
                            <Link to=""><img src={ arrow } width={15}/></Link>
                        </p>
                    </div>  
                    </div>
                </div>
                <div className="FaculMain">
                    <div className="FaculMain--left">
                    <h3>Prednya</h3>
                    <p>HOD</p>
                    </div>
                    <div className="FaculMain--right">
                    <img src={ user } />
                    <div className='FaculMain--right--lower'>
                        <p className='FaculArrow'>
                            <Link to=""><img src={ arrow } width={15}/></Link>
                        </p>
                    </div>  
                    </div>
                </div>
            </div> 
            <div className='Facul--row'>
                <div className="FaculMain">
                    <div className="FaculMain--left">
                    <h3>Kabilan K K</h3>
                    <p>HOD</p>
                    </div>
                    <div className="FaculMain--right">
                    <img src={ user } />
                    <div className='FaculMain--right--lower'>
                        <p className='FaculArrow'>
                            <Link to=""><img src={ arrow } width={15}/></Link>
                        </p>
                    </div>  
                    </div>
                </div>
                <div className="FaculMain">
                    <div className="FaculMain--left">
                    <h3>Shivathmika</h3>
                    <p>Program Coordinator</p>
                    </div>
                    <div className="FaculMain--right">
                    <img src={ user } />
                    <div className='FaculMain--right--lower'>
                        <p className='FaculArrow'>
                            <Link to=""><img src={ arrow } width={15}/></Link>
                        </p>
                    </div>  
                    </div>
                </div>
            </div> 
            <div className='Facul--row'>
                <div className="FaculMain">
                    <div className="FaculMain--left">
                    <h3>Shri Vignesh</h3>
                    <p>Program Coordinator</p>
                    </div>
                    <div className="FaculMain--right">
                    <img src={ user } />
                    <div className='FaculMain--right--lower'>
                        <p className='FaculArrow'>
                            <Link to=""><img src={ arrow } width={15}/></Link>
                        </p>
                    </div>  
                    </div>
                </div>
                <div className="FaculMain">
                    <div className="FaculMain--left">
                    <h3>Dhanush G</h3>
                    <p>Tutor</p>
                    </div>
                    <div className="FaculMain--right">
                    <img src={ user } />
                    <div className='FaculMain--right--lower'>
                        <p className='FaculArrow'>
                            <Link to=""><img src={ arrow } width={15}/></Link>
                        </p>
                    </div>  
                    </div>
                </div>
            </div>    
        </div>
      </div>
    );
  }