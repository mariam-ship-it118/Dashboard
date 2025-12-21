import React, { Component } from 'react';
import './Greetings.css';

const Greetings = (props) => {
    return ( <>
    
    <h1 className='gree'>{props.greet}</h1>
    
    
    
    </> );
}
 
export default Greetings;