import React from "react";
import logo from '../../../assets/logo.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="navbar border-b-[1px]">
        <div className="navbar-start">
          <div className="dropdown">
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
                <Link to='/courses'>Courses</Link>
               
              </li>
             
              <li>
              <Link to='/faq'>FAQ</Link>
              </li>
              <li>
              <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-14" src={logo} alt="logo" />
          <a className="btn btn-ghost normal-case text-xl">Career Plus</a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              
              <Link to='/courses'>Courses</Link>
            </li>
            
            <li>
            <Link to='/faq'>FAQ</Link>
            </li>
            <li>
            <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="pr-5 ml-2">
          <a className="btn">Login</a>
        </div>
        <div className="pr-5">
          <a className="btn">Dark</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
