import React from 'react';
import '../Popular/Popular.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const Popular = () => {
    return (
        <div>
          <section className='popu section contains'>
            <div className='seccontains'>
                <div className='sechead flex'>
                    <div className='text'>
                        <h2 className='secperu'>Popular Destination</h2>
                        <p>
                            People's dream have no end , Travel to see the best of the world!
                        </p>
                    </div>
    <div className='iconsda flex'>
        <BsArrowLeftShort className='icon' />
        <BsArrowRightShort className='icon' />
    </div>
                    
                </div>
            </div>
          </section>
        </div>
    );
}

export default Popular;
