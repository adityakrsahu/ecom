import React from 'react';
import { NavLink } from 'react-router-dom';

const Herosection = ({ myData }) => {
  const { name } = myData || {};

  return (
    <>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data'> Welcome to </p>
            {/* Display the 'name' property */}
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              culpa repellat consequatur doloremque impedit quod, soluta
              laborum illo vero a corrupti libero praesentium ipsam laboriosam
              optio facilis rerum explicabo et?
            </p>
            <NavLink to="/your-route"> {/* Specify your actual route */}
              <button>Show now</button>
            </NavLink>
          </div>
          <div className='hero-section-imagge'>
            <figure>
              <img
                className='img-style'
                src="https://github.com/thapatechnical/thapareactecom/blob/ecom_productReducer_v14/public/images/hero.jpg?raw=true"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
