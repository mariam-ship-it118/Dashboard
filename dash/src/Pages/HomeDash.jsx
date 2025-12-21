import React, { Component } from 'react';
import SideBar from '../Component/SideBar';
import HeadSection from '../Component/HeadSection';
import './Home.css';
import adding from '../Assets/adding.svg';
import MonthIncome from '../Component/MonthIncome';
import ViewsCards from '../Component/ViewsCards';
const HomeDash = () => {
    return ( 
        <>
        
        
        <SideBar />
        <HeadSection greetings='Welcome' moi='Mariam!' />

<section className='two-cards'>


<section className='card-one'>
    <h3 className='cards-titles'>Add Project</h3>
    <button className='card-btn'>New</button>
</section>

  <section className='card-two'>
    <h3 className='cards-titles'>CV</h3>
    <section className='btn-div'>
        <button className='card-btn'>Upload</button>
       <button className='card-btn'>Download</button>
    </section>
  </section>


</section>

 
 <section className='income'>
   <h3 className='cards-titles'>Monthly income</h3>

 <MonthIncome />

  
   



 </section>

<section className='artistics'>
<ViewsCards />
<section className='skillz'>
  <div className='diza'>
    <h3 className='cards-titles'> Add Skills</h3>
  <img src={adding} alt="visual designer" />

  </div>
<ul className='fsp'>

<li>Figma</li>
<li>Illustrator</li>
<li>Photoshop</li>
<li>After Effects</li>
<li>Blender</li>
<li>Visual Studio Code</li>
</ul>

</section>
</section>








        </>
     );
}
 
export default HomeDash;