
// import React, { useEffect, useState } from 'react';
// import {supabase} from '../Supabase';


   
// const ProfileInfo = () => {
// const [loading, setLoading] = useState(true);
// const[prof, setProf] = useState("");
//  useEffect(() => {
    
//      async function getAllProjectsAPI() {
//          const res = await supabase.from("Profile").select("*");
//          setProf(res.data);   
//          setLoading(false);  
//         console.log(res);
        
//     }  
//     getAllProjectsAPI(); 
//  },[]);   
       
 
//  if (loading) return <p>Loading...</p>;   
//     return ( <>   
//       <table class="projects-table">
    
//     <thead>
  
//     <tr>
//       <th>Name</th>
//       <th>Content</th>
//       <th>Emails</th>
     
//     </tr>
  
//     </thead>
  
//     <tbody>
    
//     { prof.map((info)=>{
//        return <tr>
//  <input type="text"  {prof.Email}/>
//    <input type="text"  {prof.Email}/>
//    <input type="password"  {prof.Password}/>
//  <input type="text"  {prof.PhoneNumber} />
   
//   </tr>
//   } ) }

//   </tbody>
 
// </table>
    
   
   
    
    
    
    
    
    
    
    
    
//     </> );
// }


 
// export default ProfileInfo;




import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';
import './ProfileAccount.css';
const AccountFrorm = () => {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pnb, setPnb] = useState("");

    async function MakePass() {
        const res= await supabase.from("Profile").insert({"UserName":title, "Email":email, "Password": pass,"PhoneNumber": pnb });
    }
    return ( <>
    
        <form action="" onSubmit={MakePass} className='formAccount'>
        <section className='tectBposition'>    

        <label htmlFor="" >Name</label>
        <input type="text" onChange={(v)=> {setTitle(v.target.value)}} className='textboxes tt' />
        </section>
        <section className='spacing' >  

        <label htmlFor="" className='spacing  ' >Email</label>
        <input type="text" onChange={(v)=> {setEmail(v.target.value)}} className='textboxes tt' />
        </section>
        <section className=' spacing'>
        <label htmlFor="" >Password</label>
        <input name="" id="" onChange={(v)=> {setPass(v.target.value)}} className='textboxes tt' />

        </section>
        <section className=' spacing'>

          <label htmlFor="" >Phone Number</label>
          <input name="" id="" onChange={(v)=> {setPnb(v.target.value)}} className='textboxes tt' />
        </section>
        <button className='btnacc' >Send</button>
    </form> 
    
    
    {/* <button onClick={()=>{console.log(title)}}>test</button> */}
    </> );
    
}
 
export default AccountFrorm;