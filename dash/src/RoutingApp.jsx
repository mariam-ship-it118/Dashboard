import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginMain from './Pages/Login';
import HomeDash from './Pages/HomeDash';
import TestApi from './Pages/TestApi';
import ProjectsPage from './Pages/ProjectsPage';
import ProfileP from './Pages/Profile';


const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginMain/>} />
      
      <Route path='/home' element={<HomeDash />} />
    
      <Route path='/test' element={<TestApi/>} />
      <Route path='/projects-table' element={<ProjectsPage />} />

<Route path='/profile' element={<ProfileP/>}/>



        </Routes>
        
        
        </BrowserRouter>
     );  

} 
   

export default RoutingApp;
