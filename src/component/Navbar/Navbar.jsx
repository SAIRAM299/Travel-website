import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";




const Navbar = () => {
    const[act,setact]=useState('navbar')
 const kaatu=()=>{
setact('navbar activenavbar')
    }
const moodu=()=>{
    setact('navbar')
}

const[col,setcol]=useState('heady')
const headbg=()=>{
    if(window.scrollY >=10){
        setcol('heady actiheady')
    }
    else{
        setcol('heady')
    }
}
window.addEventListener('scroll',headbg)

    return (
        <div>
            <section className='secnav'>
                <div className={col}>
                    <div className="logo">
                        <a href="#" className="logoimg">
                            <h1 className='flex'><SiYourtraveldottv className='icon' />Going Merry</h1>
                        </a>
                    </div>

<div className={act}>

    <ul className='navlist flex'>
        <li className='navitem'><a href='' className='navlink'>Home</a></li>
        <li className='navitem'><a href='' className='navlink'>Product</a></li>
        <li className='navitem'><a href='' className='navlink'>Resources</a></li>
        <li className='navitem'><a href='' className='navlink'>Contact</a></li>
        <li className='navitem'><a href='' className='navlink'>Blog</a></li>


<div className="headbut flex">
    <button className='btn login'><a href="#" >Login</a></button>
    <button className='btn'><a href="#">Sign Up</a></button>
</div>
    </ul>
<div onClick={moodu} className="endynav">
<AiFillCloseCircle className='icon'/>
</div>
</div>

<div onClick={kaatu} className='togynav'>
<TbGridDots className='icon' />

</div>

                </div>
            </section>
        </div>
    );
}

export default Navbar;
