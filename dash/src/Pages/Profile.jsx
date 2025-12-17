import React, { Component } from 'react';
import profilepic from '../Assets/profilepic.svg';  
import ProfileTextBox from '../Component/ProfileTextBox';  
import SideBar from '../Component/SideBar';  
import './ProjectTable.css';   
   
const ProfileP = () => {    
    return ( <>    
    
<SideBar/>


<section className='gotoleft'>
    <img src={profilepic} alt="graphic designer" />
    
    
    <ProfileTextBox/>

</section>
    
    
    </> );
}
 
export default ProfileP ;