import React from 'react';
import "../assets/style/index.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
        <div className='container1'>
            <div className='grid-three-column grid1'>
                <div className='services-1'>
                    <div>
                    <TbTruckDelivery className="icon" />
                    <h3>Super fast and free Delivery</h3>
                    </div>
                </div>
                <div className='services-1 services-2'>
                    <div className='services-colum-2'>
                        <MdSecurity  className="icon" />
                        <h3>Non-contact Shipping</h3>

                    </div>
                    <div className='services-colum-2'>
                        <GiReceiveMoney className="icon" />
                        <h3>Money-back Guaranteed</h3>

                    </div>
                </div>
                <div className='services-1'>
                    <div>
                        <RiSecurePaymentLine className="icon" />
                        <h3>Super Secure payment System</h3>
                    </div>
                </div>

            </div>
        </div>
      
    </>
  )
}

export default Services;
