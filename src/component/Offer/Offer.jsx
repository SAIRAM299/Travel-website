import React, { useState } from 'react';
import '../Offer/Offer.css';
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import img7 from "../../Assets/marine.webp";
import img8 from "../../Assets/impel.jpg";
import img9 from "../../Assets/godvalley.jpg";
const Offer = () => {

    const [off, setoff] = useState([
        {
            id: 1,
            img: img7,
            desti: 'Marine Fort',
            locat: 'Grand Line',
            price: '$8000',
            att:  'image for website'
        },
        {
            id: 2,
            img: img8,
            desti: 'Impel Down',
            locat: 'Calm Belt',
            price: '$9000',
            att:  'image for website'
        },
        {
            id: 3,
            img: img9,
            desti: 'Thriller Back',
            locat: 'East Blue',
            price: '$10000',
            att:  'image for website'
        }
    ])

    return (
        <div>
            <section className='offer contains sec'>
                <div className='seccontains'>


                    <div className="secintro">
                        <h2 className='secperu'>
                            Special Offers
                        </h2>
                        <p>
                        "Set sail for the grand line, where dreams and adventures await beyond every horizon."
                        </p>
                    </div>


                    <div className="maincontains">

                        {
                            off.map((dd,i) => (

                                <div className='offers' key={i}>

                                    <div className='destimg'>
                                        <img src={dd.img} alt={dd.att}/>
                                        <span className='discount'>
                                            30% Off
                                        </span>
                                    </div>

                                    <div className="offerbody">
                                        <div className="price flex">
                                            <h4>
                                                {dd.price}
                                            </h4>
                                            <span className='status'>
                                                for rent
                                            </span>
                                        </div>

                                        <div className="ammy flex">

                                            <div className="singleammy flex">
                                                <MdKingBed className='icon' />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleammy flex">
                                                <MdBathtub className='icon' />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleammy flex">
                                                <FaWifi className='icon' />
                                                <small>WI-FI</small>
                                            </div>
                                            <div className="singleammy flex">
                                                <TbAirConditioning className='icon' />
                                                <small>Airconditon</small>
                                            </div>

                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className='icon' />
                                            <small>{dd.desti} , {dd.locat} </small>
                                        </div>

                                        <button className='btn flex'>
                                            View Details
                                            <BsArrowRightShort />
                                        </button>
                                    </div>

                                </div>


                            ))
                        }


                    </div>
                </div>
            </section>
        </div>
    );
}

export default Offer;
