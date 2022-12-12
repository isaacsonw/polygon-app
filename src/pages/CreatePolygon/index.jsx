import React, { useCallback, useEffect, useRef, useState } from "react";

const initialValue = {
  name: "Untitled",
  sides: 3,
  p_x: 225,
  p_y: 135,
  size: 50,
  lineWidth: 1,
  line_color: "#00000"
};

const CreatePolygon = () => {
  const canvasRef = useRef(null);
  const POLY_DATA = JSON.parse(localStorage.getItem("polygonData"));

  const [polygonData, setPolygonData] = useState(POLY_DATA || initialValue);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setPolygonData({ ...polygonData, [name]: value });
      localStorage.setItem(
        "polygonData",
        JSON.stringify({ ...polygonData, [name]: value })
      );
    },
    [polygonData]
  );

  const drawPolygon = useCallback(() => {
    const { sides, p_x, p_y, size, lineWidth, line_color } = polygonData;
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(+p_x + size * Math.cos(0), +p_y + size * Math.sin(0));

      for (var i = 1; i <= sides; i += 1) {
        ctx.lineTo(
          +p_x + size * Math.cos((i * 2 * Math.PI) / sides),
          +p_y + size * Math.sin((i * 2 * Math.PI) / sides)
        );
      }

      ctx.strokeStyle = line_color;
      ctx.lineWidth = +lineWidth;
      ctx.stroke();
    }
  }, [polygonData]);

  useEffect(() => {
    drawPolygon();
  }, [drawPolygon]);

  return (
    <div>
      <div className='w-full flex'>
        <div className='bg-batchBlue20 w-1/3 h-screen p-8'>
          <form className='mb-4'>
            <div className='mb-4 md:w-full'>
              <label htmlFor='email' className='block font-semibold mb-1'>
                Polygon name
              </label>
              <input
                className='w-full border bg-white rounded p-2 outline-none focus:shadow-outline'
                type='text'
                name='name'
                id='name'
                onChange={handleChange}
                value={polygonData["name"]}
              />
            </div>
            <div className='mb-4 md:w-full'>
              <label htmlFor='email' className='block font-semibold mb-1'>
                Number of sides
              </label>
              <input
                className='w-full border bg-white rounded p-2 outline-none focus:shadow-outline'
                type='number'
                name='sides'
                id='sides'
                onChange={handleChange}
                value={polygonData["sides"]}
              />
            </div>
            <div className='mb-3 md:w-full mt-8'>
              <label htmlFor='password' className='block font-semibold mb-1'>
                Position X
              </label>
              <input
                className='w-full border bg-white rounded p-2 outline-none focus:shadow-outline'
                type='number'
                name='p_x'
                id='p_x'
                onChange={handleChange}
                value={polygonData["p_x"]}
              />
            </div>
            <div className='mb-3 md:w-full mt-8'>
              <label htmlFor='password' className='block font-semibold mb-1'>
                Position Y
              </label>
              <input
                className='w-full bg-white border rounded p-2 outline-none focus:shadow-outline'
                type='number'
                name='p_y'
                id='p_y'
                onChange={handleChange}
                value={polygonData["p_y"]}
              />
            </div>
            <div className='mb-3 md:w-full mt-8'>
              <label htmlFor='password' className='block font-semibold mb-1'>
                Line width
              </label>
              <input
                className='w-full bg-white border rounded p-2 outline-none focus:shadow-outline'
                type='number'
                name='lineWidth'
                id='lineWidth'
                min={1}
                onChange={handleChange}
                value={polygonData["lineWidth"]}
              />
            </div>

            <div className='mb-3 md:w-full mt-8'>
              <label htmlFor='password' className='block font-semibold mb-1'>
                Size
              </label>
              <input
                className='w-full bg-white border rounded p-2 outline-none focus:shadow-outline'
                type='number'
                name='size'
                id='size'
                onChange={handleChange}
                value={polygonData["size"]}
              />
            </div>

            <div className='mb-3 md:w-full mt-8'>
              <label htmlFor='password' className='block font-semibold mb-1'>
                Line color
              </label>
              <input
                className='w-[50px] bg-white border rounded p-2 outline-none focus:shadow-outline'
                type='color'
                name='line_color'
                id='line_color'
                onChange={handleChange}
                value={polygonData["line_color"]}
              />
            </div>
          </form>

          <span
            onClick={() => {
              setPolygonData(initialValue);
              localStorage.setItem("polygonData", JSON.stringify(initialValue));
            }}
            className='text-blue-700 text-center text-sm hover:text-grey20 transition-all cursor-pointer'>
            Reset
          </span>
        </div>
        <div className=' w-full flex-col h-screen p-8 flex  justify-center'>
          <p className='text-left'>{polygonData["name"] || "Untitled"} </p>
          <canvas ref={canvasRef} id='canvas' width='800' height='600'>
            Sorry content cannot load.
          </canvas>
        </div>
      </div>
    </div>
  );
};

export default CreatePolygon;
