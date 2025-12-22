import React from 'react';
import Msgs from './Msgs';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Msgs.css';

const SubMsgs = () => {
    const {id} = useParams()
    return ( <>

<section className='msgsss'>

    <h1>Messages</h1>
    <thead>

    <tr >
       
    <th>Title:</th>
    <th>email:</th>
    <th>message:</th>
    </tr>   
    </thead>   
        
    <tbody>

{ Msgs.map((m)=>{
 let path="/msgdetails/"+m.id;
 return <tr> <Link to={path}>   
      
<td >{m.title}</td>
<td>{m.email}</td>
</Link> 

    </tr> 
    }
)}



    </tbody>
    

</section>
    </> );
}
 
export default SubMsgs;