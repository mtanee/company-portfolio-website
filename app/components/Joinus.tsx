import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <div id='cont' className="hero-section flex flex-col md:flex-row items-center justify-center py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      
      <div className="w-full md:w-1/2 h-1/3 mt-6 md:mt-0">
        <Image src="/join.jpg" alt="About Us" width={500} height={100} className="object-cover border-4 rounded-3xl" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left p-4">
        <h1 className="shadow-lg shadow-orange-custom  text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black text-orange-custom hover:to-white hover:from-white rounded-xl sm:pl-2 mt-6 mb-2 py-2 pt-4">
          Join Us
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold my-5 sm:pl-1">
          Join Web3fy and Shape the Future 
        </h2>
        <p className="text-base md:text-lg lg:text-base mb-6 font-medium sm:pl-1">
          Ready to revolutionize the web with blockchain technology? Join our dynamic team at Web3fy and contribute to pioneering projects that define the future of decentralized web development.
        </p>
        <div className='shadow-2xl rounded-md p-4 md:p-8 space-x-4 sm:space-x-4 flex-col space-y-4 mt-14 '>
          <Link href={'/#work'} >
          <button
            type="submit"
            className=" shadow-xl shadow-orange-custom bg-gradient-to-r from-black to-black hover:to-white hover:from-white border border-black text-orange-custom py-2 px-6 sm:px-4 sm:py-3 rounded-xl text-base font-bold transition duration-300 transform hover:scale-110"
          >
            Explore Projects
          </button>
          </Link>
          <Link href={'/#tea'} >

          <button
            type="submit"
            className=" shadow-xl shadow-orange-custom bg-gradient-to-r from-black to-black hover:to-white hover:from-white border border-black text-orange-custom py-2 px-6 sm:px-7 sm:py-3 rounded-xl text-base font-bold transition duration-300 transform hover:scale-110"
          >
            View Team
          </button>
          </Link>

          <Link href={'/#cont'} >

          <button
            type="submit"
            className="shadow-xl shadow-orange-custom  bg-gradient-to-r from-black to-black hover:to-white hover:from-white border border-black text-orange-custom py-2 px-6 sm:px-12 sm:py-3 rounded-xl text-base font-bold transition duration-300 transform hover:scale-110"
          >
            Join Us
          </button>
          </Link>

        </div>
      </div>
      
    </div>
  );
};

export default JoinUs;
