import React, { useContext, useState } from "react";
import registerimg from "../../../Assets/register.jpg";
import { BsArrowLeft } from "react-icons/bs";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { NavLink, useNavigate } from "react-router-dom";
import '../Login/Login.css'
import { AppContext } from "../../../Context/AppContext";
import Spalsh from "../../Splash/Splash";
import { RouteLoading ,LoadingEnd} from "../../../Context/Action";
import { LOGIN,LOGOUT } from "../../../Context/Action";


const Registration = () => {
  const {toggle,passwordVisible,errors_r,setError_r,validation_r,dispatch,state,setLogin_state} = useContext(AppContext)
  const Navigate = useNavigate()


  //handelling value change in inputs
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  });
  const handleChange =(e)=>{
    const {name,value} = e.target;
    setFormData({
      ...formData,[name]:value
    })
  }

  // processes to execute after form submission
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const error = validation_r(formData);
    if(Object.keys(error).length===0){
      try {
        dispatch(RouteLoading())
        setLogin_state(LOGOUT())
        const response =await fetch('/api/auth/register',{
          method:'POST',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(formData),
        });
        const JsonData = await response.json()
        if (JsonData.token) {
          localStorage.setItem('JWT',JsonData.token)
          setError_r({})
          setFormData({name:"",
          email:"",
          password:""})
          Navigate('/dashboard')
          dispatch(LoadingEnd())
          setLogin_state(LOGIN)
        }
      } catch (error) {
        setError_r(error)
      }
    }
  }
  
  return (
   <>
     {state.isLoading&&<Spalsh URL={state.ImgUrl}/>}
    <div className="container">
      <div className="img_container"><img src={registerimg} alt="" /></div>
      <div className="glass-container">
        <div className="back">
          <NavLink to='/'><BsArrowLeft style={{fontSize:'50px',fontWeight:"bolder",margin:"0 25px"}}/></NavLink>
        </div>
          <div className="glass-card">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name"  name="name"  placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
              {errors_r.name&&<div className="error">{errors_r.name}</div>}
              </div>
              <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email"  id="email"  name="email"  placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors_r.email&&<div className="error">{errors_r.email}</div>}
              </div>
              <div className="input">
              <label htmlFor="password">Password</label>
              <div className="password_input_box">
              <input  type={passwordVisible?'text':'password'}  id="password"   name="password"  placeholder="Enter your password"value={formData.password} onChange={handleChange}/>
              <div  className="look_password"  onClick={()=>{toggle()}} >
                  {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
              </div>
              {errors_r.password&&<div className="error">{errors_r.password}</div>}
              </div>
              <p>Already Registered? <NavLink to='/login'><span className="redirect">Login</span></NavLink></p>
              <a href="/"><button type='submit' className="bn632-hover bn18">Register</button></a>
            </form>
        </div>
      </div>
    </div>
   </>
  );
};
export default Registration;