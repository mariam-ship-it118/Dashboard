import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';


   
const ProjectsTable = () => {
const [loading, setLoading] = useState(true);
const[projects, setProjects] = useState("");
 useEffect(() => {
    
     async function getAllProjectsAPI() {
         const res = await supabase.from("ProjectsDetails").select("*");
         setProjects(res.data);   
         setLoading(false);  
        console.log(res);
        
    }  
    getAllProjectsAPI(); 
 },[]);   
       
    

 if (loading) return <p>Loading...</p>;   
    return ( <>   
    
    
    { projects.map((project)=>{
       return  <table class="projects-table">
  <thead>

  <tr>
    <th>Project</th>
    <th>Category</th>
    <th>Status</th>
    <th>Tool</th>
  </tr>

  </thead>

  <tbody>

  <tr>
    <td>{project.Project_Name}</td>
    <td>{project.Category}</td>
    <td>{project.Status}</td>
    <td>{project.Type}</td>
    <td>{project.tools_used}</td>
  </tr>

  </tbody>
 
</table>
  
    }) }
    
   
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default ProjectsTable;