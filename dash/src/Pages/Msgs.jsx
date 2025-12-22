
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';
import SideBar from '../Component/SideBar';
import './Msgs.css';

   
const MsgsPage = () => {
const [loading, setLoading] = useState(true);
const[msgs, setMsgs] = useState("");
 useEffect(() => {
    
     async function getAllProjectsAPI() {
         const res = await supabase.from("Messages").select("*");
         setMsgs(res.data);   
         setLoading(false);  
        console.log(res);
        
    }  
    getAllProjectsAPI(); 
 },[]);   
       
    

 if (loading) return <p>Loading...</p>;   
    return ( <> 

    <SideBar />  
      <table class="projects-table">
    
    <thead >
  
    <tr className='letsgoleft'>
      <th>Name</th>
      <th className='mes'>Message</th>
      <th className='pad'>Emails</th>
     
    </tr>
  
    </thead>  
   
    <tbody>   
         
    { msgs.map((msgs)=>{  
       return <tr className='letsgoleft'> 
    <td >{msgs.Sender_Name}</td>
    <td>{msgs.Message_Content}</td>
    <td>{msgs.Clients_emails}</td>
      
  </tr>  
  } ) }  
  
       
  </tbody>
 
</table>
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default MsgsPage;