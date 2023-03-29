import React from "react";
import "./card.css";
import c1 from "../../../Assets/c1.svg";
import c2 from "../../../Assets/c2.svg";
import c3 from "../../../Assets/c3.svg";
import { motion } from "framer-motion";
const Cards = () => {
  return (
    <div className="cards">
    <motion.div 
          initial={{ y: -200 }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 1,
            delay:0.2
          }}
          viewport={{ once: true }}>
<h1>You are our top priority</h1>
    </motion.div>
      
      <div className="cards_box">
      <motion.div 
          initial={{ y: 200 }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay:0.1
          }}
          viewport={{ once: true }}>
        <div className="card">
          <img src={c1} alt = ""/>
          <h3 className="card_heading">Trusted for your privacy</h3>
          <h3 className="card_text">Our members have trusted us to plan and grow their ﬁnances.</h3>
        </div>
        </motion.div>
        <motion.div 
          initial={{ y: 200 }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay:0.4
          }}
          viewport={{ once: true }}>
        <div className="card m">
          <img src={c2} alt = ""/>
          <h3 className="card_heading">Preserve your wealth</h3>
          <h3 className="card_text">Get a full Guidance for any spending in all days*</h3>
        </div></motion.div>
        <motion.div 
          initial={{ y: 200 }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay:0.7
          }}
          viewport={{ once: true }}>
        <div className="card">
          <img src={c3} alt = ""/>
          <h3 className="card_heading">Safe and secure</h3>
          <h3 className="card_text">protects your data with robust 256-bit encryption.</h3>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;