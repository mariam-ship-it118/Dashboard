import React, { Component } from 'react';
import SideBar from './SideBar';
   import './ProjectsForm.css';
import Greetings from './Greetings';
import { useState } from 'react';
 import {supabase} from '../Supabase';
    
const ProjectsForm = () => {
     const [name, setName] = useState("");
        const [color, setColor] = useState("");
        const [Challenges, setChallenges] = useState("");
        const [problem, setProblem] = useState("");
         const [imgcard, setImgCard] = useState("");
        const [mockups, setMockups] = useState("");
        const [wireframes, setWireframes] = useState("");
        const [designframes, setDesignFrames] = useState("");

         async function SaveData() {
                const res= await supabase.from("CaseStudy").insert({"Project_Name":name, "Color":color, "challenges": Challenges,"problem": problem, "imgCard": imgcard, "wireframes": wireframes, "design": designframes, "mockups": mockups });
            }

    return ( <>
    
    <SideBar />
    <Greetings greet='Here is your case study' />
    <form action="" className='gotoleft' onSubmit={SaveData}>
    
<div className='flexato ' >
    <label htmlFor="">Project Name</label>
     <input type="text" className='ninety' onChange={(v)=> {setName(v.target.value)}} />
</div>
  
     
<div className='flexato ' >
    <label htmlFor="">Color Palette</label>
     <input type="text" className='ninety' onChange={(v)=> {setColor(v.target.value)}} />
</div>
        
     
     
<div className='flexato ' >
    <label htmlFor="">Challenges</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setChallenges(v.target.value)}} />
</div> 
      
     
<div className='flexato ' >
    <label htmlFor="">Problem Statement</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setProblem(v.target.value)}} />
</div>



     
<div className='flexato ' >
    <label htmlFor="">Card Image</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setImgCard(v.target.value)}} />
</div>   
        
    

     
<div className='flexato ' >
    <label htmlFor="">Mockup</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setMockups(v.target.value)}} />
</div>

     
<div className='flexato ' >
    <label htmlFor="">Wireframe</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setWireframes(v.target.value)}} />
</div>



     
<div className='flexato ' >
    <label htmlFor="">Design Frames</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setDesignFrames(v.target.value)}} />
</div>

<button className='addbtn'>Save</button>


    </form>
    
    
    
    </> );
}
 
export default ProjectsForm;




// import React, { useEffect, useState } from 'react';
// import {supabase} from '../Supabase';


   
// 
       
    
    
    
    
    
    
   

// import React, { useEffect, useState } from 'react';
// import {supabase} from '../Supabase';
// import './ProfileAccount.css';
// const AccountFrorm = () => {
//     const [title, setTitle] = useState("");
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");
//     const [pnb, setPnb] = useState("");

//     async function MakePass() {
//         const res= await supabase.from("Profile").insert({"UserName":title, "Email":email, "Password": pass,"PhoneNumber": pnb });
//     }
//     return ( <>
    
//     <form action="" onSubmit={MakePass} className='formAccount'>
//         <label htmlFor="">Name</label>
//         <input type="text" onChange={(v)=> {setTitle(v.target.value)}} />
//         <label htmlFor="" >Email</label>
//         <input type="text" onChange={(v)=> {setEmail(v.target.value)}} />
//         <label htmlFor="" >Password</label>
//         <input name="" id="" onChange={(v)=> {setPass(v.target.value)}}/>
//           <label htmlFor="" >Phone Number</label>
//           <input name="" id="" onChange={(v)=> {setPnb(v.target.value)}}/>
//         <button className='btnacc' >Send</button>
//     </form>
    
//     {/* <button onClick={()=>{console.log(title)}}>test</button> */}
//     </> );
// }
 
// export default AccountFrorm;