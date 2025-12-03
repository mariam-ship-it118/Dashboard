import React, { Component } from 'react';
import './HeadSection.css';

const HeadSection = (props) => {
    return ( 
        <>
        <section className='headingS'>

      
        <section className='hiing' >
 <h1  className='yellow'>{props.greetings}</h1>
<h1   className='red'>{props.moi}</h1>
        </section>


        <input type="text" placeholder='Search...'className='searchB' />
          </section>
        
        
        
        </>
     );
}
 
export default HeadSection;