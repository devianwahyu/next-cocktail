import React from 'react';

const Banner = ({ title }) => {
  return (
    <div className='flex flex-row justify-center items-center p-12 bg-rose-900'>
      <h1 className='font-extrabold text-5xl text-white'>{title}</h1>
    </div>
  );
};

export default Banner;