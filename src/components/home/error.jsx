import React from 'react';
import '../../assets/style/index.css';
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <div className='container3'>
        <div>
          <h2>404</h2>
          <b>UH OH! YOU're lost.</b>
        </div>
        
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Doloribus porro fugit ea 
        </p>
        <NavLink to='/'>
        <button>Go Back to Home </button>
        </NavLink>
      </div>
    </> 
  )
}

export default Error;
