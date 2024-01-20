import React from 'react';
import { NavLink } from 'react-router-dom';



const Herosection = ({mydata} ) => {
    const {name} = mydata;
  return (
    <>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                <p className='intro-data'> welcom to </p>
                {/* <h1>Aditya store</h1> */}
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa
                    repellat consequatur doloremque impedit quod, soluta laborum 
                    illo vero a corrupti libero praesentium ipsam laboriosam optio
                    facilis rerum explicabo et?
                </p>
                <NavLink>
                    <button>Show now</button>
                </NavLink>
                    

                </div>
                <div className='hero-section-imagge'>
                <figure>
                    <img className='img-style' src="https://content.jdmagicbox.com/quickquotes/images_main/hp-250-g7-intel-celeron-dual-core-15-6-laptop-4gb-ram-1tb-hdd-dos-intel-uhd-graphics-dvd-7gz79pa-1-90kg-black-175513513-xcwuy.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit" alt="..." />
                </figure>

                </div>

            </div>
        </div> 
    </>
  )
}

export default Herosection;
