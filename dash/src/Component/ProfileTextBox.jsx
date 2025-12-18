
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';


   
const Messages = () => {
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
      <table class="projects-table">
    
    <thead>
  
    <tr>
      <th>Sender</th>
      <th>Content</th>
      <th>Emails</th>
     
    </tr>
  
    </thead>
  
    <tbody>
    
    { info.map((info)=>{
       return <tr>
    <td>{info.UserName}</td>
    <td>{info.Email}</td>
    <td>{info.Password}</td>
    <td>{info.PhoneNumber}</td>
   
  </tr>
  } ) }

  </tbody>
 
</table>
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default Messages;