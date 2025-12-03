import React, { Component } from 'react';
import './TextBoxLogin.css';

const TextBoxLogin = (props) => {
    return ( <>
    
    <input type={props.types} className='emailpass' placeholder={props.cause} />
    
    
    
    </> );
}
 
export default TextBoxLogin;