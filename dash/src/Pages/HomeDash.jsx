import React, { Component } from 'react';
import SideBar from '../Component/SideBar';
import HeadSection from '../Component/HeadSection';

const HomeDash = () => {
    return ( 
        <>
        
        
        <SideBar />
        <HeadSection greetings='Welcome' moi='Mariam!' />
        </>
     );
}
 
export default HomeDash;