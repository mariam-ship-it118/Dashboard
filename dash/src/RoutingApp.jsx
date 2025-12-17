import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginMain from './Pages/Login';
import HomeDash from './Pages/HomeDash';
import TestApi from './Pages/TestApi';
import ProjectsPage from './Pages/ProjectsPage';


const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginMain/>} />
      
      <Route path='/home' element={<HomeDash />} />
    
      <Route path='/test' element={<TestApi/>} />
      <Route path='/projects-table' element={<ProjectsPage />} />
        </Routes>
        
        
        </BrowserRouter>
     );  

} 
   

export default RoutingApp;
