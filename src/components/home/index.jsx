import React from 'react';
import Herosection from '../Herosection';
import Services from '../Services';
import Trusted from '../Trusted';

const Home = () => {

  const data ={
    name : "Aditya store"
  }
 
  return (
    <>
      <Herosection mydata = {data} />
      <Services />
      <Trusted />
    </>
  )
}

export default Home;



