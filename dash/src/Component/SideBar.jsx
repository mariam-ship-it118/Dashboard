import React, { Component } from 'react';
import './SideBar.css';
import home from '../Assets/home.svg';
import profile from '../Assets/profile.svg';
import projects from '../Assets/projects.svg';
import messages from '../Assets/messages.svg';
import logout from '../Assets/logout.svg';
const SideBar = () => {
    return ( 
        <>
        <section className='sidebarbg'>

        <ul>

            <li className='iconsbar'><img src={home} alt="" />
            <h3>Home</h3></li>
            <li className='iconsbar'><img src={profile} alt="" />
            <h3>Profile</h3></li>
            <li className='iconsbar'><img src={projects} alt="" />
            <h3>Projects</h3></li>
            <li className='iconsbar'><img src={messages} alt="" />
            <h3>Messages</h3></li> 
            <li className='iconsbar'><img src={logout} alt="" />
            <h3>Logout</h3></li> 

        </ul>



        </section>
        
        
        
        
        
        
        
        </>
     );
}
 
export default SideBar;