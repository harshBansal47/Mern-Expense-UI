import React from 'react'
import './Banner.css'

import banner_img from '../../../Assets/banner_img.png'
const Banner = () => {
  return (
    <div className='banner'>
    <div className='banner_img'>
    <img src = {banner_img} alt = "banner_image" />
    </div>
   
    <div className='banner-left'>
    <div className='banner_details'>
    <h3><span>HassleFree and Informative</span> Expense analyser </h3>
    <h3>Best App || Creative UI</h3>
    </div>
    <div className='banner_button'><button className="button-31">Continue</button></div>
    </div>
    </div>
  )
}

export default Banner