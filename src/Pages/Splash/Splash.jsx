import React from "react";
import "./Splash.css";
import Lottie from 'lottie-react'


const Spalsh = ({URL}) => {
  
  return (
    <div className="splash">
      <Lottie animationData={URL} loop={true} />
    </div>
  );
};
export default Spalsh;