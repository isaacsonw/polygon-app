import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePolygon } from "../../helpers";
import PAGES_URL from "../pageRoutes";

const Dashboard = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("User-Data")) || {};

    setUser(userData);
  }, []);

  const POLYS = user?.user?.polygons || [];

  const editPoly = (poly) => {
    localStorage.setItem("polygonData", JSON.stringify(poly));
    navigate(PAGES_URL.UPDATE);
  };

  return (
    <div className=' h-full'>
      <div className='p-8'>
        <h1>All your work</h1>
        <div className='flex pt-4 flex-wrap pb-12'>
          {POLYS && POLYS.length > 0 ? (
            POLYS.map((poly, index) => (
              <div
                key={poly?._id + index}
                className='flex justify-center mr-6 mb-6 '>
                <div className='rounded-lg border border-brandBlue20 shadow-lg bg-white w-[300px] '>
                  <div className='p-6'>
                    <h5 className='text-gray-900 text-xl font-medium mb-2'>
                      {poly?.name || "-"}
                    </h5>
                    <p className='text-gray-700 text-base mt-4'>
                      Sides:{" "}
                      <span className='font-bold'>{poly?.sides || 0}</span>
                    </p>
                    <p className='text-gray-700 text-base mb-4'>
                      Size: <span className='font-bold'>{poly?.size || 0}</span>
                    </p>
                    <div className='flex'>
                      <button
                        onClick={() => editPoly(poly)}
                        type='button'
                        className=' inline-block px-6 py-2.5 bg-brandBlue border border-brandBlue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                        Edit
                      </button>
                      <button
                        onClick={() => deletePolygon(poly._id)}
                        type='button'
                        className=' ml-auto inline-block px-6 py-2.5  text-danger font-medium text-xs leading-tight uppercase rounded border border-danger transition duration-150 ease-in-out'>
                        Delete
                      </button>
                    </div>
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
