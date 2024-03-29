import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const [theme,setTheme]=useState(false)
  const {user,logOut}=useContext(AuthContext)
  const handleLOgOUt=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error)
    })
  }
  const themeChange=()=>{
    setTheme(!theme)
  }
  return (
    <div className="bg-[#6B0BF0] text-white">
      <div className="navbar border-b-[1px]">
        <div className="navbar-start">
          <div className="dropdown  text-black">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>

              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <div className="pr-5 ml-2">
              {
              user?.uid?<>
              <button onClick={handleLOgOUt} className="btn btn-primary">Log Out</button>
              
              </>:<Link to='/login' className="btn btn-primary">Login</Link>
            }
              </div>
             
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-14" src={logo} alt="logo" />
            <Link to='/' className="btn btn-ghost normal-case text-xl">Career Plus</Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
              </li>
          </ul>
          <div className="pr-5 ml-2">
            {
              user?.uid?<>
              <button onClick={handleLOgOUt} className="btn btn-primary">Log Out</button>
              
              </>:<Link to='/login' className="btn btn-primary">Login</Link>
            }
          </div>
          <div className="pr-5">
             {
              user?.uid&&<img title={user?.displayName} style={{height:'30px'}} className="rounded-full" src={user?.photoURL} alt="" />
             }
          </div>
          <div className="pr-5">
           {
            theme? <button onClick={themeChange} className="btn bg-[black]">Dark</button>: <button onClick={themeChange} className="btn bg-[white] text-black">Light</button>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
