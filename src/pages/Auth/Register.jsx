import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PAGES_URL from "../pageRoutes";
import { registerUser } from "../../helpers";

const initialData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: ""
};

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialData);
  const [errorMessage, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (userData) {
      const error = registerUser(userData, navigate);

      if (error) {
        setError(error);
      }
    }
  };

  // loginUser();

  return (
    <div className='flex items-center h-screen flex-col justify-center  bg-grey40'>
      {errorMessage && (
        <div className='bg-statusBg-500 border border-danger w-[500px] px-8 py-4 transition-all rounded'>
          <p className='text-status-404'>{errorMessage}</p>
        </div>
      )}
      <div className='w-[500px] bg-white rounded shadow-lg p-8 m-4  md:mx-auto'>
        <span className='block w-full text-xl uppercase font-bold mb-12'>
          Register
        </span>
        <form className='mb-4 '>
          <div className='mb-4 md:w-full '>
            <label htmlFor='first_name' className='block text-xs mb-1'>
              First Name
            </label>
            <input
              className='w-full border rounded p-2 outline-none focus:shadow-outline'
              type='text'
              name='first_name'
              id='first_name'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4 md:w-full'>
            <label htmlFor='last_name' className='block text-xs mb-1'>
              Last Name
            </label>
            <input
              className='w-full border rounded p-2 outline-none focus:shadow-outline'
              type='text'
              name='last_name'
              id='last_name'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4 md:w-full'>
            <label htmlFor='email' className='block text-xs mb-1'>
              Username or Email
            </label>
            <input
              className='w-full border rounded p-2 outline-none focus:shadow-outline'
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4 md:w-full'>
            <label htmlFor='phone' className='block text-xs mb-1'>
              Phone
            </label>
            <input
              className='w-full border rounded p-2 outline-none focus:shadow-outline'
              type='tel'
              name='phone'
              id='phone'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-6 md:w-full '>
            <label htmlFor='password' className='block text-xs mb-1'>
              Password
            </label>
            <input
              className='w-full border rounded p-2 outline-none focus:shadow-outline'
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              required
            />
          </div>
          <button
            onClick={handleRegister}
            className='mt-8 hover:bg-grey20 transition-all text-white bg-grey80 uppercase text-sm font-semibold px-4 py-2 rounded'>
            Register
          </button>
        </form>
        <span
          onClick={() => navigate(PAGES_URL.LOGIN)}
          className='text-blue-700 text-center text-sm hover:text-grey20 transition-all cursor-pointer'>
          Sign in
        </span>
      </div>
    </div>
  );
};

export default Register;
