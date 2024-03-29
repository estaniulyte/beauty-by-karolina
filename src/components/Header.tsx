'use client';

import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import NavMobile from './NavMobile';

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import MaxWidthWrapper from './MaxWidthWrapper';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? 'bg-neutral-100 py-[16px]'
          : 'bg-transparent py-[20px] border-b'
      } fixed z-30 transition-all duration-300 left-0 right-0  mb-5`}
    >
      <MaxWidthWrapper>
        <span className='mx-auto left-0 right-0 flex justify-between items-center'>
          <a href='/'>
            {/* <img src={logo} alt='Logo' className='w-[55px]' /> */}
            <h1 className='flex uppercase font-bold'>Beauty by Karolina</h1>
          </a>
          <Nav />

          <div
            onClick={() => setNavMobile(!navMobile)}
            className='lg:hidden absolute right-4'
          >
            {navMobile ? (
              <RiCloseFill className='text-white text-3xl cursor-pointer' />
            ) : (
              <RiMenu4Fill className='text-black text-3xl cursor-pointer' />
            )}
          </div>
          <NavMobile navMobile={navMobile} />
        </span>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
