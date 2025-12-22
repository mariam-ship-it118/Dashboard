import React, { Component } from 'react';
import Greetings from '../Component/Greetings';
import { useState } from 'react';
 import {supabase} from '../Supabase';
import SideBar from '../Component/SideBar';
    import '../Component/ProjectsFrom';
const AboutForm = () => {
     const [name, setName] = useState("");
        const [color, setColor] = useState("");
        const [Challenges, setChallenges] = useState("");
        const [problem, setProblem] = useState("");
         const [imgcard, setImgCard] = useState("");
        const [mockups, setMockups] = useState("");
        const [wireframes, setWireframes] = useState("");
        const [designframes, setDesignFrames] = useState("");

         async function SaveData() {
                const res= await supabase.from("about").insert({"about_pic":name, "me":color, "visual_design": Challenges,"hiring_visual_design": problem });
            }

    return ( <>
    
    <SideBar/>
    <Greetings greet='Here is your About' />
    <form action="" className='gotoleft' onSubmit={SaveData}>
  
<div className='flexato ' >
    <label htmlFor="">  Picture</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setName(v.target.value)}} />
</div>
  
     
<div className='flexato ' >
    <label htmlFor="">Me</label>
     <input type="text" className='ninety' onChange={(v)=> {setColor(v.target.value)}} />
</div>

   
     
<div className='flexato ' >
    <label htmlFor="">Visual Desinger</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setChallenges(v.target.value)}} />
</div>

     
<div className='flexato ' >
    <label htmlFor="">Hiring a visual designer</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setProblem(v.target.value)}} />
</div>




<button className='addbtn'>Save</button>


    </form>
    
    
    
    </> );
}
 
export default AboutForm;


