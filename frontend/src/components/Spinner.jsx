import React from "react";
import { Oval } from "react-loader-spinner"; 

const Spinner = () => {
  return (
    <Oval
      visible={true}
      height={20}      
      width={20}
      color="#ffffff" 
      strokeWidth={5} 
      ariaLabel="oval-loading"
    />
  );
};

export default Spinner;
