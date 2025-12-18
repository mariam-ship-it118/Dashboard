
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';


   
const ProfileInfo = () => {
const [loading, setLoading] = useState(true);
const[prof, setProf] = useState("");
 useEffect(() => {
    
     async function getAllProjectsAPI() {
         const res = await supabase.from("Profile").select("*");
         setProf(res.data);   
         setLoading(false);  
        console.log(res);
        
    }  
    getAllProjectsAPI(); 
 },[]);   
       
    

 if (loading) return <p>Loading...</p>;   
    return ( <>   
      <table class="projects-table">
    
    <thead>
  
    <tr>
      <th>Name</th>
      <th>Content</th>
      <th>Emails</th>
     
    </tr>
  
    </thead>
  
    <tbody>
    
    { prof.map((info)=>{
       return <tr>
    <td>{info.Sender_Name}</td>
    <td>{info.Message_Content}</td>
    <td>{info.Clients_emails}</td>
   
  </tr>
  } ) }

  </tbody>
 
</table>
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default ProfileInfo;