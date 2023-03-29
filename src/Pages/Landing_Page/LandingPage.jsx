import React from 'react'
import Banner from './Banner/Banner'
import Main from './Main/Main'
import Info1 from './Info/Info1'
import Info2 from './Info/Info2'
import Info3 from './Info/Info3'
import Divider from './Divider/Divider'
import Cards from './Cards/Cards'
import { motion,useScroll } from 'framer-motion'
import './landing.css'
const LandingPage = () => {
  const {scrollYProgress} = useScroll();
  return (
    <div> 
    <motion.div className='progress' style={{scaleX:scrollYProgress}}>
    </motion.div>
    <Main/>
    <Banner/>
    <Info1/>
   <Divider/>
   <Info2/>
   <Divider/>
   <Info3/>
   <Cards/>
    </div>
  )
}

export default LandingPage