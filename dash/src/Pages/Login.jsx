import React, { Component } from 'react';
import LoginTitle from '../Component/LoginTitle';
import mepeek from '../Assets/mepeek.svg';
import TextBoxLogin from '../Component/TextBoxLogin';
import RemLinks from '../Component/RemLink';

const LoginMain = () => {
    return ( 
        <>

        <section className='bglogin'>
        <LoginTitle />
       <img src={mepeek} alt="" className='me' />
        
        <section className='textboxes'>
        <TextBoxLogin cause='email' />
         <TextBoxLogin cause='pass' types='password' />
        </section>
      <RemLinks />
        </section>
        </>
     );
}
 
export default LoginMain;