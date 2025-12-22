import React, { Component } from 'react';
import './SideBar.css';
import home from '../Assets/home.svg';  
import profile from '../Assets/profile.svg';  
import projects from '../Assets/projects.svg';   
import messages from '../Assets/messages.svg';  
import logout from '../Assets/logout.svg';  
import { Link } from 'react-router-dom';   
   
const SideBar = () => {   
    return (    
        <>   
        <section className='sidebarbg'>

        <ul>
             
    
<Link to='/home' >
            <li className='iconsbar'><img src={home} alt="" />
            <h3>Home</h3></li>   
</Link>    
           

<Link to='/profile' >  
            <li className='iconsbar'><img src={profile} alt="" />
            <h3>Profile</h3></li>  
</Link>

<Link to='/projects-table' >
            <li className='iconsbar'><img src={projects} alt="" />
            <h3>Projects</h3></li>  
         
</Link>
<Link to='/messages'>
            <li className='iconsbar'><img src={messages} alt="" />
            <h3>Messages</h3></li> 
</Link>
           
<Link to='/' >   
            <li className='iconsbar'><img src={logout} alt="" />
            <h3>Logout</h3></li> 
</Link>   
          
        </ul>
         
    

        </section>
        
        
        
        
        
        
        
        </>
     );
}
 
export default SideBar;