import React from "react";
import Herosection from '../Herosection';
import { useProductContext } from '../../contacts/productcontact';


const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Aditya Ecommerce",
  };

  return (
    <>
      {myName}
      <Herosection myData={data} />
    </>
  );
};

export default About;