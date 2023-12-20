import React from 'react';
import '../Home/Home.css'
const Home = () => {
    return (
       
           <section className='homy'>
            <div className='seccontain containy'>
                <div className='homyname'>

                    <h1 className='title'>
                        Start Your Journy To Laugh Tale
                    </h1>

                    <p className="sub">
                        Travel your favourite place with advanturous of the environment!
                    </p>

                    <button className='btn'><a href=''>Explore Now</a></button>
                </div>

               
                <div className="dubby homes">
                    <div className="location">
                        <label htmlFor='location'>Location</label>
                        <input type='text' placeholder='Dream Destination'/>
                    </div>
                    <div className="distance">
                        <label htmlFor='dist'>Location</label>
                        <input type='text' placeholder='11/Meters'/>
                    </div>
                    <div className="price">
                        <label htmlFor='pri'>Location</label>
                        <input type='text' placeholder='50,000-5,00,000 '/>
                    </div>
                    <button className="btn">
                         Search
                         </button>
                    </div>       
                
            </div>

           </section>
        
    );
}

export default Home;
