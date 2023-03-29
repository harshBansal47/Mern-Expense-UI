import React from "react";
import ImgInfo from "../../../Assets/Info33.jpg";
import "./Info.css";
import { motion } from "framer-motion";
const Info3 = () => {
  return (
    <div className="infodiv">
    {/* <div className="blob2 blob_target"></div> */}
      <div className="img_info">
        <motion.div
          initial={{ x: -150 }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <img src={ImgInfo} alt="" />
        </motion.div>
      </div>
      <div className="div_info">
        <motion.div
          initial={{ x: 150 }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <h1>Track your Expenses</h1>
          <h3>
            Review your investment portfolio, monitor performance, and see
            market comparisons to have more confidence in your buy/sell
            decisions.*
          </h3>
        </motion.div>
      </div>
    </div>
  );
};
export default Info3;