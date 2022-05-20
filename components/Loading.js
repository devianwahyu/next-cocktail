import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center' style={{ height: '100vh' }}>
      <Triangle ariaLabel="loading-indicator" />
      <p className='font-bold text-lg'>Loading</p>
    </div>
  );
};

export default Loading;