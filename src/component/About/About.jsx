import React from 'react';
import '../About/About.css'
import island from '../../Assets/island.png'
import culture from '../../Assets/Culture.png'
import people from '../../Assets/peo.jpg'
import vide from '../../Assets/night.mp4'
const About = () => {
    return (
        <div>
           <section className='about sec'>
            <div className='seccontains'>
                <h2 className='names'>
                    Why Sailing?
                </h2>

                <div className='maincontains contains grid'>

                    <div className='singleitem'>
                        <img src={island} alt='web image' className='imge'/>

                        <h3>100+ Islands </h3>

                        <p>Research shows that a chance to break away from the normal rythms of 
                            daily life reduces stress and improves health and well-being</p>
                    </div>


                    <div className='singleitem'>
                        <img src={culture} alt='web image' className='imge'/>

                        <h3>1000+ Cultures </h3>

                        <p>Research shows that a chance to break away from the normal rythms of 
                            daily life reduces stress and improves health and well-being</p>
                    </div>


                    <div className='singleitem'>
                        <img src={people} alt='web image' className='imge'/>

                        <h3>2000+ Peoples </h3>

                        <p>Research shows that a chance to break away from the normal rythms of 
                            daily life reduces stress and improves health and well-being</p>
                    </div>

                </div>

<div className="videobox contains">
<div className="cardcontains grid">


    <div className="cardname">
        <h2>Wonderful journey and house experience in Grand Tesoro!</h2>
        <p> The City of Entertainment, it is a floating resort and casino ruled by the powerful and enigmatic Gild Tesoro.
        </p>
    </div>

    <div className="videodubby">
        <video src={vide} autoPlay loop muted></video>
    </div>
</div>
</div>
            
            
            </div>
           </section>
        </div>
    );
}

export default About;
