import React, { useState } from 'react';
import '../Blog/Blog.css'
import { BsArrowRightShort } from "react-icons/bs";
import imga from '../../Assets/zene.jpg'
import imgb from '../../Assets/dress.jpg'
import imgc from '../../Assets/alabasta.jpg'
import imgd from '../../Assets/rommel.jpg'
const Blog = () => {

const[blogs,setblogs]=useState([
    {
        postpic: imga,
        title: 'Zunesha Island',
        desc: 'Zou, also known as Zunesha Island, is a colossal elephant that serves as a living island in the world. This ancient creature carries the Mink Tribe on its back'
    },
    {
        postpic: imgb,
        title: 'Dressrossa Kingdom',
        desc: 'Governed by the flamboyant Donquixote Doflamingo, Dressrosa is known for its colosseum battles, intricate architecture, and a tumultuous political landscape'
    },
    {
        postpic: imgc,
        title: 'Alabasta Kingdom',
        desc: 'It serves as the capital of the desert kingdom of Alabasta, ruled by Princess Vivis family. The city is known for its grand architecture, bustling marketplace, and as a central location'
    },
    {
        postpic: imgd,
        title: 'Rommel Kingdom',
        desc: ' the Rommel Kingdom is a vibrant and peculiar land known for its lush cabbage fields that stretch as far as the eye can see. Ruled by a wise and eccentric Cavendish'
    }
])





    return (
        <div>
           <section className='blog contains sec'>
            <div className="seccontains">


                <div className="secintro">
                    <h2 className='secperu'>Our Best Blog</h2>
                    <p>Journey to conquire the wealth, fame and power in the world</p>
                </div>

                <div className="maincontains ">
{blogs.map((dd,i)=>(
    
   <div className="singlepost" key={i}>
   <div className="imgbox">
       <img src={dd.postpic} alt='image'/>
   </div>

   <div className='postinf'>
       <h3>
           {dd.title}
       </h3>
       <p>{dd.desc}</p>
       </div>

   <a href="" className="flex">
       Read More
       <BsArrowRightShort className='icon'/>
       </a>
       
</div> 

))}
</div>

            </div>
           </section>
        </div>
    );
}

export default Blog;
