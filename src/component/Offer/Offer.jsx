import React from 'react';
import '../Offer/Offer.css';
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import img6 from "../../Assets/godvalley.jpg";
const Offer = () => {
    return (
        <div>
            <section className='offer contains sec'>
                <div className='seccontains'>


                    <div className="secintro">
                        <h2 className='secperu'>
                            Special Offers
                        </h2>
                        <p>
                            fxhdhgdcghdchgchngcnhcnhgfgjdcgjcjgncfjgnd cjgdjggxg ncgxgh
                        </p>
                    </div>


                    <div className="maincontent grid">

                        <div className='offers'>

                            <div className='destimg'>
                            <img src={img6} />
                            <span className='discount'>
                                30% Off
                            </span>
                            </div>

                        <div className="offerbody">
                            <div className="price flex">
                                <h4>
                                    $1000
                                </h4>
                            <span className='status'>
                                for rent
                                </span>    
                            </div>
                       
                       <div className="ammy flex">

                        <div className="singleammy flex">
                        <MdKingBed className='icon'/>
                        <small>2 Beds</small>
                        </div>
                        <div className="singleammy flex">
                        <MdBathtub className='icon'/>
                        <small>1 Bath</small>
                        </div>
                        <div className="singleammy flex">
                        <FaWifi  className='icon'/>
                        <small>WI-FI</small>
                        </div>
                        <div className="singleammy flex">
                        <TbAirConditioning className='icon'/>
                        <small>Airconditon</small>
                        </div>

                       </div>

<div className="location flex">
<MdLocationOn className='icon'/>
<small>Marine Fort , Grand Line </small>
</div>

<button className='btn flex'>
    View Details
    <BsArrowRightShort/>
</button>
                        </div>
                   
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Offer;
