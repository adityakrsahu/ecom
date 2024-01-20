import React from 'react';
import '../assets/style/index.css';
import { NavLink } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";
import { FaInstagram , FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <section className="contact-short">
        <div className="grid grid-tow-column">
            <div>
                <h3 id="h33">Ready to started</h3>
                <h3 id="h33">Talk to us today</h3>
            </div>
            <div className='g'>
                <button >
                    <NavLink to="/contact">Get Started</NavLink>
                </button>
            </div>
        </div>
    </section>


    <footer>
        <div className="container2 grid2 grid-four-column">
            <div className="footer-about pad">
                <h3 className='h33'>Aditya Technical</h3>
                <p>lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="footer-subscribe pad1">
                <h3 className='h33'>Subscribe to get imprortant updates</h3>
                <form action="#">
                    <input className='inp' type="email" placeholder='email' />
                    <input className='bb' type="submit" value='subscribe' />
                </form>
            </div>

            <div className="footer-social pad">
                <h3 className='h33'>follow us</h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className='icons' />
                    </div>

                    <div>
                        <FaInstagram className='icons' />
                    </div>

                    <div>
                        <a href="" target='_blank'>
                            
                            <FaYoutube className='icons' />

                        </a>
                    </div>


                </div>

            </div>
            <div className="footer-contact pad3">
                <h3 className='h33'>Call us</h3>
                <a  className='h33' href="tel:8873638109">8873638109</a>

            </div>
        </div>

        <div className="footer-bottom--section">
            <hr/>
            <div className="container grid grid-two-column">
                
                <p>@ {new Date().getFullYear()} AdityaTechnical. All Rights Reserved</p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>

        </div>

    </footer>



    </>
  )
}

export default Footer;