import React, { useState } from 'react';
import '../Popular/Popular.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1 from "../../Assets/godvalley.jpg";
import img2 from "../../Assets/marijones.png";
import img3 from "../../Assets/wano.jpg";
import img4 from "../../Assets/atlantis.jpg";
import img5 from "../../Assets/waterseven.jpg";




const Popular = () => {
    const[cards,setcards]=useState([
        {
            id:1,
            imgsrc:img2,
            destname:'Celestial Summit',
            location:'Mary Geoise',
            grade:'Legendary'
        },
        {
            id:2,
            imgsrc:img3,
            destname:'Jade Fortress',
            location:'Wano',
            grade:'Historical'
        },
        {
            id:3,
            imgsrc:img4,
            destname:'Athenas Citadel',
            location:'Amazon Lily',
            grade:'Mythical'
        },
        {
            id:4,
            imgsrc:img5,
            destname:'Wavefront Palace',
            location:'Water Seven',
            grade:'Enigmatic'
        },
        ])

    return (
        <div>
            <section className='popu section contains'>
                <div className='seccontains'>
                    <div className='secheader flex'>

                        <div className='text'>
                            <h2 className='secperu'>Popular Destination</h2>
                            <p>
                                People's dream have no end , Travel to see the best of the world!
                            </p>
                        </div>
                        <div className='iconsda flex'>
                            <BsArrowLeftShort className='icon lefticon' />
                            <BsArrowRightShort className='icon' />
                        </div>

                    </div>





                    <div className='maindubby'>
                        
            {cards.map((dd,i)=>(
     <div className="singledesti" key={i}>

             <div className="destimg">

            <img src={dd.imgsrc} alt='god valley' />

           <div className='info'>
          <h3> {dd.destname}</h3>
          <p>{dd.grade}</p>
          <BsArrowRightShort className='icon' />
             </div>

           </div>

  <div className="destfoot">
    <div className="num">
        0{dd.id}
    </div>

    <div className="desttext flex">
        <h6>{dd.location}</h6>

        <span className='flex'>
            <span className='pully'>
                <BsDot className='icon' />
            </span>
            Going Merry
        </span>

    </div>
</div>
   </div>
 ))}
                </div>
                </div>
            </section>
        </div>
    );
}

export default Popular;
