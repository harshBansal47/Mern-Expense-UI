import React, { useState } from "react";
import "./footer.css";
import logo from "../../../Assets/logo.svg";
import { toast } from "react-toastify";
const Footer = () => {
  const [formData,setFormData] = useState({
    email:"",
    error:""
  })
  const handlechange = (e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }
  const handleSubmit =()=>{
    let error = "";
    let email = formData.email;
    if(!email){
      error="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      error = "Enter valid email"
    }
    if(error.length>0){
      setFormData({
        ...formData,"error":error
      })
    }else{
      error =""
      setFormData({
        ...formData,email:""
      })
      toast.success('Successfully Subscribed', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
  return (
    <footer id = "newsletter">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>

      <div className="f_container">
        <p>&copy; Expense Tracker</p>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="newsletter">
        <h2>Subscribe to newsletter</h2>
        <div className="input_box">
          <input type="text" name="email" placeholder="enter your email" value={formData.email} onChange={handlechange}/>
          {formData.error&&<span className="error">{formData.error}</span>}
          <button className="button-85" onClick={handleSubmit}>
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;