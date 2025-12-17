import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './RemLink.css';
const RemLinks = () => {
    return ( <>
 

    <label className='margleft'>
        <input type="checkbox" /> remember me?
    </label> 
    
     
     <p className='margleft test'>forgot password?</p>
    <Link to='/home'>
    <button className='loginbtn'>Login</button>
    
    </Link>
    
    </> );
}
 
export default RemLinks;