import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "../../../Assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={(scrollY > 60)? "nav_shadow" : ""}>
      {toggle && (
        <div className="nav-vertical">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#newsletter">Newsletter</a>
            </li>
            <li>
              <NavLink to="/register">
              <button className="button-75 b1" >
                <span className="text">Register</span>
              </button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/login'>
              <button className="button-75 b2">
                <span className="text">Login</span>
              </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <div className="logo_i">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#feature">Features</a>
          </li>
          <li>
            <a href="#newsletter">Newsletter</a>
          </li>
          <li>
            <NavLink to="/register">
              <button className="button-75 b1" >
                <span className="text">Register</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className="button-75 b2">
                <span className="text">Login</span>
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
      <HiMenu
        className="hamberger"
        style={{ height: "40px", width: "40px" }}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
    </nav>
  );
};
export default Nav;