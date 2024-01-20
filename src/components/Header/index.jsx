import React from 'react';
import '../../assets/style/index.css';
import { NavLink } from 'react-router-dom';
import Navber from '../Navber';


const Header = () => {
  return (
    <>
    <mainHeader>
        <NavLink to="./">
            <img className='nav1' width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeeyY54f_m2iZ4LzHGj5VzmjlUuh-O7wGvg&usqp=CAU" alt="...." />
        </NavLink>
        <Navber>
            
        </Navber>
    </mainHeader>
      
    </>
  )
};

export default Header;
