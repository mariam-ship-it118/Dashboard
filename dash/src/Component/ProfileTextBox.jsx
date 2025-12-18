
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';


   
const ProfileInfo = () => {
const [loading, setLoading] = useState(true);
const[info, setInfo] = useState("");
 useEffect(() => {
    
     async function getAllProjectsAPI() {
         const res = await supabase.from("Messages").select("*");
         setInfo(res.data);   
         setLoading(false);  
        console.log(res);
        
    }  
    getAllProjectsAPI(); 
 },[]);   
       
    

 if (loading) return <p>Loading...</p>;   
    return ( <>   
    
    
    { info.map((info)=>{
       return  <table class="projects-table">
  <thead>

  <tr>
    <th>Sender</th>
    <th>Content</th>
    <th>Emails</th>
    <th>Tool</th>
  </tr>

  </thead>

  <tbody>

  <tr>
    <td>{info.Sender_Name}</td>
    <td>{info.Message_Content}</td>
    <td>{info.Clients_emails}</td>
   
  </tr>

  </tbody>
 
</table>
  
    }) }
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default ProfileInfo;