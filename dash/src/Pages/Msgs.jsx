
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';


   
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
      <table class="projects-table">
    
    <thead>
  
    <tr>
      <th>Name</th>
      <th>Content</th>
      <th>Emails</th>
     
    </tr>
  
    </thead>
  
    <tbody>
    
    { msgs.map((info)=>{
       return <tr>
    <td>{msgs.Sender_Name}</td>
    <td>{msgs.Message_Content}</td>
    <td>{msgs.Clients_emails}</td>
   
  </tr>
  } ) }

  </tbody>
 
</table>
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default MsgsPage;