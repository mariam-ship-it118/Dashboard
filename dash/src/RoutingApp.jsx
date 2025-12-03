import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginMain from './Pages/Login';
import HomeDash from './Pages/HomeDash';

const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginMain/>} />
      
      <Route path='/home' element={<HomeDash />} />
      
        </Routes>
        
        
        </BrowserRouter>
     );  

} 
   

export default RoutingApp;
