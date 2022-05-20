import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-between py-8 bg-rose-900 text-white px-24'>
      <div>
        <p>© 2022 SetiyawanDev.</p>
        <p>Proudly built in the ID</p>
      </div>
      <div>
        <Image src={'/images/logo2.png'} alt={'logo2'} width={250} height={40} />
      </div>
      <div className='flex flex-row'>
        <p className='ml-3'>Missing</p>
        <p className='ml-3'>About</p>
        <p className='ml-3'>Faq</p>
        <p className='ml-3'>Contact</p>
      </div>
    </div>
  );
};

export default Footer;