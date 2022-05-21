import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex flex-row bg-white justify-center'>
      <Image className='rounded' src={'/images/logo.png'} alt='logo' width={100} height={100} />
    </div>
  );
};

export default Navbar;