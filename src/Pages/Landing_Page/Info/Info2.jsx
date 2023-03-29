import React from "react";
import ImgInfo from "../../../Assets/Info2.png";
import "./Info.css";
import { motion } from "framer-motion";
const Info2 = () => {
  return (
    <div className="infodiv">
      <div className="div_info" style = {{margin:"0px 30px"}}>
        <motion.div
          initial={{ x: -150 }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <h1>Easily view and manage your Transactions</h1>
          <h3>
            Stay on top of your spending by tracking what’s left after the bills
            are paid. Make more informed money decisions by creating custom
            budgets you’ll stick to.
          </h3>
        </motion.div>
      </div>
      <div className="img_info">
        <motion.div
          initial={{ x: 150 }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <img src={ImgInfo} alt="" />
        </motion.div>
      </div>
    </div>
  );
};
export default Info2;