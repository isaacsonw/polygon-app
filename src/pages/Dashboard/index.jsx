import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [, setUser] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("User-Data")) || {};

    setUser(userData);
  }, []);

  // const POLYS2 = user?.user.polygons || [1, 2, 3];
  const POLYS = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className='p-8'>
        <h1>All your work</h1>
        <div className='flex pt-4 flex-wrap pb-12'>
          {POLYS && POLYS.length > 0 ? (
            POLYS.map((poly) => (
              <div key={poly} className='flex justify-center mr-6 mb-6'>
                <div className='rounded-lg shadow-lg bg-white max-w-sm'>
                  <a href='#!'>
                    <img
                      className='rounded-t-lg'
                      src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
                      alt=''
                    />
                  </a>
                  <div className='p-6'>
                    <h5 className='text-gray-900 text-xl font-medium mb-2'>
                      Card title
                    </h5>
                    <p className='text-gray-700 text-base mb-4'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      type='button'
                      className=' inline-block px-6 py-2.5 bg-brandBlue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                      Button
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>You do not have any work yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
