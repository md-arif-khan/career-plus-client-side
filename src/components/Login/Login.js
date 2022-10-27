import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';
import {FaGoogle,FaGithub} from 'react-icons/fa';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
  const location=useLocation()
  const from=location.state?.from?.pathname||'/'
  const {googleLogin,signIn,githubLogin}=useContext(AuthContext)
  const provider = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const navigate=useNavigate()
  const handleGoogleLogin=()=>{
      googleLogin(provider)
      .then(result=>{
        const user=result.user;
        console.log(user)
        navigate(from,{replace:true})
        
      })
      .catch(error=>{
        console.log(error)
      })
  }
  const handleGithubLogin=()=>{
    githubLogin(providerGithub )
    .then(result=>{
      const user=result.user;
      console.log(user)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleSignIn=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      navigate(from,{replace:true})
      form.reset()
    })
    .catch(error=>console.log(error))
  }
    return (
        <div>
           <div className="register pt-12">
      <section className="p-6 dark:text-gray-100  border-[white]">
        <form
        onSubmit={handleSignIn}
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid border"
        >
          <h2 className="w-full text-3xl font-bold leading-tight text-white">
            LogIn
          </h2>
         
         
          <div className="border rounded-md  bg-white">
            <label for="email" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="email"
              name='email'
              type="text"
              placeholder="Your Email"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
          </div>
          <div className="border rounded-md  bg-white" >
            <label for="password" className="block mb-1 ml-1">
              Password
            </label>
            <input
              id="password"
              name='password'
              type="password"
              placeholder="Your Password"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900  bg-white"
            >
              LogIn
            </button>
            <Link className='flex justify-center' to='/register'>
            <button className="btn btn-active btn-link text-white">Sign Up</button>
            </Link>
          
          </div>
          <div className='flex justify-center'>
      <FaGoogle onClick={handleGoogleLogin} className='text-white text-4xl mr-3' />
      <FaGithub onClick={handleGithubLogin} className='text-white text-4xl ' />
      </div>
        </form>
     
      </section>
      
    </div>
        </div>
    );
};

export default Login;