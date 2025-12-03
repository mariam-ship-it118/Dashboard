import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginMain from './Pages/Login';

const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginMain/>} />
      
      
      
        </Routes>
        
        
        </BrowserRouter>
     );
}
 
export default RoutingApp;
