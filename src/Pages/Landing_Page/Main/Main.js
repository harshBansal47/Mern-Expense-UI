import React from "react";
import img_main from "../../../Assets/img_main.jpg";
import "./main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const main = () => {
  return (
    <div className="main" id="home">
      <div className="main_img">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 1,
            delay:0.5
          }}
          viewport={{ once: true }}
        >
          <img src={img_main} alt="img" />
        </motion.div>
      </div>
      <div className="main_details">
        <motion.div
          initial={{ y: 150 }}
          whileInView={{y: 0 }}
          transition={{duration: 1.3,delay:0.5}}
          viewport={{ once: true }}
        >
          <h1>Tracking Transactions Easy</h1>
          <h3>Take control of your spending, savings, investing & more.</h3>
        
        <Link to="/register">
          <button className="button-33">Get Started</button>
        </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default main;
