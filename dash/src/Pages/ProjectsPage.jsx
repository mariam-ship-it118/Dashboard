import React, { Component } from 'react';
import ProjectsTable from '../Component/TheTable';
import SideBar from '../Component/SideBar';
import './ProjectTable.css';
import { Link } from 'react-router-dom';
    
const ProjectsPage = () => {
    return ( <>
    <SideBar/>
    <div className='tablepose'>
    <ProjectsTable />
                                
              
    </div>   
                 
    <Link to='/projects-table/case-study' >
    <button className='lavie'>add new project</button>
    </Link>    
       

       


       



       
          


          
             
    </> );  
   
}
 
export default ProjectsPage;