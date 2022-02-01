import './homepage.css'
import React,{useState} from 'react';

function Navbar () {
    const[show , setShow]=useState(false);
    return <div className='navbar' >
        <div id={show ? "hidden" :""}>
         <a href="#" className='pillars'>athletes</a>
         <a href="#" className='pillars'>sport</a>
         <a href="#" className='pillars'>brands</a>
         <a href="#" className='pillars'>nutrition</a>
         <a href="#" className='pillars'>supplements</a>
         <a href="#" className='pillars'>training</a>
         <a href="#" className='pillars'>recovery</a>
         <a href="#" className='pillars'>mentalperformance</a>
         <a href="#" className='pillars'>content</a>
         <button onClick={()=>setShow(!show)}>Links</button>
         </div>
    </div>
}

export default Navbar;