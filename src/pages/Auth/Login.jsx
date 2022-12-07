import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../helpers";
import PAGES_URL from "../pageRoutes";

const initialData = {
  email: "",
  password: ""
};

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialData);
  const [errorMessage, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userData) {
      const data = loginUser(userData, navigate);

      if (data?.error) {
        setError(data?.error);
      }
    }
  };

  return (
    <div className='flex items-center flex-col justify-center h-screen w-full bg-grey80'>
      {errorMessage && (
        <div className='bg-statusBg-500 border border-danger w-[500px] px-8 py-4 transition-all rounded'>
          <p className='text-status-404'>{errorMessage}</p>
        </div>
      )}
      <div className='w-[500px] bg-white rounded shadow-lg p-8 m-4  md:mx-auto'>
        <span className='block w-full text-xl uppercase font-bold mb-4'>
          Login
        </span>
        <form className='mb-4'>
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
            />
          </div>
          <div className='mb-6 md:w-full mt-8'>
            <label htmlFor='password' className='block text-xs mb-1'>
              Password
            </label>
            <input
              className='w-full border rounded p-2 outline-none focus:shadow-outline'
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleLogin}
            className='hover:bg-grey20 transition-all text-white bg-grey80 uppercase text-sm font-semibold px-4 py-2 rounded'>
            Login
          </button>
        </form>
        <span
          onClick={() => navigate(PAGES_URL.REGISTER)}
          className='text-blue-700 text-center text-sm hover:text-grey20 transition-all cursor-pointer'>
          Register here
        </span>
      </div>
    </div>
  );
};

export default Login;
