
import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';
import { Link } from 'react-router-dom';


   
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
      
 async function deleteRow(id) {
    const res = await supabase.from("ProjectsDetails").delete().eq("id", id)
 }
     

 if (loading) return <p>Loading...</p>;   
    return ( <>   
      <table class="projects-table">
      
    <thead> 
        
    <tr>    
      <td>Id</td>              
      <th>Project Name</th>    
      <th>Category</th>      
      <th>Status</th>       
      <th>Tools used</th>   
      <th>Type</th>         
                 
    </tr>
          
    </thead>
                   
    <tbody>
               
    { info.map((m)=>{
      
             
      let pathLink = "/" +m.id;
       return <tr>  
               <Link to={pathLink}>{m.id}</Link>
    <td>{m.Project_Name}</td>   
    <td>{m.Category}</td>  
    <td>{m.Status}</td>     
    <td>{m.Tools_used}</td>  
    <td>{m.Type}</td>   
    <button onClick={()=>deleteRow(m.id)} >delete</button>
<Link to="">
    <button>edit</button>   
</Link>         
  </tr>        
  } ) }                 
                       
                    
  </tbody>
           
</table>
    
   
    
    
    
    
    
    
    
    
    
    </> );
}


 
export default Messages;