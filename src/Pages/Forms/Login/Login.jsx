import React, { useContext, useState } from "react";
import "./Login.css";
import loginImg from "../../../Assets/login_img.jpg";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import { LoadingEnd, RouteLoading } from "../../../Context/Action";
import Spalsh from "../../Splash/Splash";
import { LOGIN,LOGOUT } from "../../../Context/Action";
const Login = () => {
  const Navigate = useNavigate()
  const {toggle,passwordVisible,errors_l,validation_l,setErrors_l,state,dispatch,setLogin_state} = useContext(AppContext)
  const [fromData,setFormData] = useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData({
      ...fromData,[name]:value
    });
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const error = validation_l(fromData);
    if(Object.keys(error).length===0){
        dispatch(RouteLoading());
        try {
          setLogin_state(LOGOUT())
          const response = await fetch('/api/auth/login',{
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json' },
             body: JSON.stringify(fromData),
          });
          //taking error from backend
          if(!response.ok){
            throw new Error(response.status)
          }
          const JsonData =await response.json()
          if (JsonData.token) {
          localStorage.setItem('token',JsonData.token)
          setErrors_l({})
          setFormData({email:"",
          password:""})
          Navigate('/dashboard')
          setLogin_state(LOGIN())
        }
        } catch (error) {
          console.log(error)
        }
      dispatch(LoadingEnd()); 
    } 
  }

  return (
<>
{state.isLoading&&<Spalsh URL={state.ImgUrl}/>} 
<div className="container">
      <div className="img_container">
        <img src={loginImg} alt="" />
      </div>
      <div className="glass-container">
        <div className="back">
          <NavLink to="/">
            <BsArrowLeft
              style={{
                fontSize: "50px",
                fontWeight: "bolder",
                margin: "0 25px",
              }}
            />
          </NavLink>
        </div>

        <div className="glass-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
          
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={fromData.email}
                onChange={handleChange}
              />
              {errors_l.email&&<div className="error">*{errors_l.email}</div>}
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div className="password_input_box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={fromData.password}
                  onChange={handleChange}
                />
                <div
                  className="look_password"
                  onClick={() =>{toggle()}}
                >
                  {passwordVisible ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </div>
              </div>
              {errors_l.password&&<div className="error">*{errors_l.password}</div>}
            </div>
            <p>Not Registered yet? <NavLink to='/register'><span className="redirect">Register</span></NavLink></p>
            <a href="/">
              <button type="submit" className="bn632-hover bn18">
                Login
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
</>
  );
};
export default Login;