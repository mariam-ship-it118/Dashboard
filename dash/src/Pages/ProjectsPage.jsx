import React, { Component } from 'react';
import ProjectsTable from '../Component/TheTable';
import SideBar from '../Component/SideBar';
import './ProjectTable.css';
const ProjectsPage = () => {
    return ( <>
    <SideBar/>
    <div className='tablepose'>
    <ProjectsTable />

    </div>
    
    
    
    </> );
}
 
export default ProjectsPage;