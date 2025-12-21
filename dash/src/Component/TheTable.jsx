
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';


   
const Messages = () => {
const [loading, setLoading] = useState(true);
const[info, setInfo] = useState("");
 useEffect(() => {
    
     async function getAllProjectsAPI() {
         const res = await supabase.from("ProjectsDetails").select("*");
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
      <th>Project Name</th>
      <th>Category</th>
      <th>Status</th>
      <th>Tools used</th>
      <th>Type</th>
     
    </tr>
  
    </thead>
  
    <tbody>
    
    { info.map((info)=>{
       return <tr>
        
    <td>{info.Project_Name}</td>
    <td>{info.Category}</td>
    <td>{info.Status}</td>
    <td>{info.Tools_used}</td>
    <td>{info.Type}</td>
   
  </tr>
  } ) }

  </tbody>
 
</table>
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default Messages;