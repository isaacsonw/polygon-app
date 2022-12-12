import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../helpers";

export const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("User-Data")) || {};

    setUser(userData);
  }, []);

  let activeStyle = {
    textDecoration: "underline"
  };

  return (
    <div className='flex  justify-center flex-col fixed'>
      <nav className='relative w-full px-[300px] text-white flex flex-wrap items-center justify-between py-4 bg-grey80 text-gray-500 '>
        <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
          <div className=' flex w-full items-center justify-between'>
            <p className='text-xl ' href='/'>
              POL
              <span className='bg-white p-0 m-0 text-grey80 rounded-full font-semibold p-1'>
                Y
              </span>
              GON
            </p>
            <ul className=' flex pl-0 list-style-none relative ml-auto items-center'>
              <li className='nav-item px-2 pr-10'>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className='nav-link active'
                  aria-current='page'
                  to='/dashboard'>
                  My Polys
                </NavLink>
              </li>

              <li className='nav-item pl-4'>
                <NavLink
                  className='nav-link rounded p-2 bg-brandBlue'
                  to='/create-polygon'>
                  Create new Poly
                </NavLink>
              </li>
              <li className='nav-item pl-4'>
                <button
                  onClick={logOut}
                  className='nav-link bg-danger rounded p-2 text-gray-300 '>
                  Logout
                </button>
              </li>
              <li className='nav-item pl-4 text-sm absolute -right-60 flex items-center '>
                <div className='bg-white p-1 h-8 w-8 flex justify-center items-center          text-sm m-0 text-grey80 rounded-full font-semibold'>
                  {`${user?.user?.first_name?.substr(
                    0,
                    1
                  )}${user?.user?.last_name?.substr(0, 1)}`}
                </div>
                <div className='pl-2'>
                  <span>{`${user?.user?.first_name} ${user?.user?.last_name}`}</span>
                  <br />
                  <span className='text-xs text-grey10'>
                    {" "}
                    {user?.user?.email}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=' h-screen w-screen'>{children}</div>
    </div>
  );
};
