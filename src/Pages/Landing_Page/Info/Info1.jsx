import React from "react";
import ImgInfo from "../../../Assets/s_img.jpg";
import "./Info.css";
import { delay, motion } from "framer-motion";
const Info1 = () => {
  return (
    <div className="infodiv" id="feature">
    {/* <div className="blob blob_target"></div> */}
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
          <h1>Manage your spending and save</h1>
          <h3>
            Stay on top of your spending by tracking what’s left after the bills
            are paid. Make more informed money decisions by creating custom
            budgets you’ll stick to.
          </h3>
        </motion.div>
      </div>
    </div>
  );
};
export default Info1;