'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BiMenu } from "react-icons/bi";

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = ` px-6 bg-black  p-4   text-white shadow md:flex md:items-center md:justify-between fixed top-0 left-0 w-full z-30 ${isScrolled ? 'opacity-100 bg-black' : ''}`;

  return (
    <div>
      <nav className={navbarClasses}>
        <div className="flex justify-between  items-center ">
          <div className="text-2xl font-[Poppins] cursor-pointer ">
            {/* <img className="h-10 inline" src="./logo212.jpeg" /> */}
            <Image className="h-10 w-auto sm:w-24 md:w-auto lg:w-44 xl:w-44 object-cover" alt='logow' width={600} height={800} src="/2.png"  />
            
          </div>

          <span className="text-3xl text-white cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
            <BiMenu />
          </span>
        </div>

        <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static  font-medium absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${menuOpen ? 'opacity-100 top-[70px] bg-black' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500 z-20`}>
          <li className="mx-4 my-6 md:my-0">
          <Link href={'/'} className='text-xl hover:text-orange-custom duration-500'>
              HOME
              </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href={'/service'} className='text-xl hover:text-orange-custom duration-500'>
            SERVICE
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
          <Link href={'/#abou'} className='text-xl hover:text-orange-custom duration-500'>
              ABOUT
              </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
          <Link href={'/#tea'} className='text-xl hover:text-orange-custom duration-500'>
              TEAM
          </Link>

          </li>
          
          {/* <button className="bg-orange-custom  text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-white hover:text-black rounded">
            Contact Us 
          </button> */}
          <div className="">

          <Link
          href={'/#cont'} // Replace with your desired link
          className='bg-gradient-to-r from-orange-custom to-ora hover:to-white hover:from-white  border border-black  text-gray-100 hover:text-black  py-2 px-6 sm:px-6 sm:py-3 rounded-full text-base font-bold transition duration-300 transform hover:scale-110'
        >
          Contact Us 
        </Link>
</div>
          <h2 className=""></h2>
        </ul>
      </nav>
    </div>
  );
};

export default Nav2;
