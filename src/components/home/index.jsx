import React from 'react';
import Herosection from '../Herosection';
import Services from '../Services';
import Trusted from '../Trusted';
import FeatureProduct from '../../components/FeatureProduct';

const Home = () => {

  const data ={
    name : "Aditya store"
  }
 
  return (
    <>
      <Herosection mydata = {data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </>
  )
}

export default Home;



