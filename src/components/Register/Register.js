import React, { useContext } from "react";
import './Register.css'
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const {createUser,updateUserProfile}=useContext(AuthContext)
  const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const email=form.email.value;
    const password=form.password.value;
    createUser(email,password)
   .then(result=>{
    const user=result.user;
    console.log(user)
    form.reset()
    updateUserProfile({displayName:name,photoURL:photoURL})
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })
   })
   .catch(e=>console.error(e))
  }
  return (
    <div className="register">
      <section className="p-6 dark:text-gray-100">
        <form
        onSubmit={handleSubmit}
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid border border-[white]"
        >
          <h2 className="w-full text-3xl font-bold leading-tight text-white">
            Register
          </h2>
          <div className="border rounded-md bg-white">
            <label for="name" className=" mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              name='name'
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 "
            />
          </div>
          <div className="border rounded-md  bg-white">
            <label for="photoURL" className="block mb-1 ml-1">
              PhotoURL
            </label>
            <input
              id="photoURL"
              name='photoURL'
              type="text"
              placeholder="PhotoURL"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
       
      </section>
    </div>
  );
};

export default Register;
