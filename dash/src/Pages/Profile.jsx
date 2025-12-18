
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';
import profilepic from '../Assets/profilepic.svg';  
import SideBar from '../Component/SideBar';  
import './ProjectTable.css';   
import ProfileInfo from '../Component/ProfileSection';
   
const ProfileP = () => {    
    return ( <>    
    
<SideBar/>


<section className='gotoleft'>
    <img src={profilepic} alt="graphic designer" />
    
    
    <ProfileInfo/>

</section>
    
    
    </> );
}
 
export default ProfileP ;