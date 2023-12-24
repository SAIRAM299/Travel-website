import React from 'react';
import '../Footer/Footer.css'
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div className='footer'>
           <div className='seccontains contains'>
            <div className='logos'>

                <div className="footlogo">
                    <a href="" className="logo ">
                       <h1 className='flex'> < SiYourtraveldottv className='icon'/>
                        Going Merry</h1>
                    </a>
                </div>

                <div className="social flex">
            <ImFacebook className='icon'/> 
            <BsTwitter className='icon'/> 
            <AiFillInstagram className='icon'/> 
            </div>

            </div>


            <div className="footlink">
    <span className='linktitle'>
        Information
    </span>
    <li>
        <a href=''>Home</a>
    </li>
    <li>
        <a href=''>Explore</a>
    </li>
    <li>
        <a href=''>Travel</a>
    </li>
    <li>
        <a href=''>Blog</a>
    </li>
    </div>      

    <div className="footlink">
    <span className='linktitle'>
        Help Desk
    </span>
    <li>
        <a href=''>Destination</a>
    </li>
    <li>
        <a href=''>Support</a>
    </li>
    <li>
        <a href=''>Travel & Condition</a>
    </li>
    <li>
        <a href=''>Privacy</a>
    </li>
    </div>
    

    <div className="footlink">
    <span className='linktitle'>
        Contact Us
    </span>
    <span className='phone'>+91 87786 61395</span>
    <span className='email'>psairam299@gmail.com</span>
  
    </div>      

        

           </div>
        </div>
    );
}

export default Footer;
