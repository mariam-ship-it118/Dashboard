import React, { Component } from 'react';
import './SideBar.css';
import home from '../Assets/home.svg';
import profile from '../Assets/profile.svg';
import projects from '../Assets/projects.svg';
import messages from '../Assets/messages.svg';

const SideBar = () => {
    return ( 
        <>
        <section className='sidebarbg'>

        <ul>

            <li className='iconsbar'><img src={home} alt="" /></li>
            <li className='iconsbar'><img src={profile} alt="" /></li>
            <li className='iconsbar'><img src={projects} alt="" /></li>
            <li className='iconsbar'><img src={messages} alt="" /></li>
        </ul>



        </section>
        
        
        
        
        
        
        
        </>
     );
}
 
export default SideBar;