"use client"
import Image from 'next/image';
import ParticleBackground from './ParticleBackground';
import Anim_Y from './Animation/Anim_Y';
import Anim_opacity from './Animation/Anim_opacity';
import Link from 'next/link';
// import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="flex justify-center  hero-section bg-transparent ">
      <div className="absolute  h-full  z-0">
        <ParticleBackground />
      </div>

      <div id='hom' className="z-0   bg-red-2001  mt-52 sm:mt-48 ">
        <div className=" inset-0 flex flex-col items-center justify-center text-center text-blue">
          <Anim_Y duration={1} positionValue={'-100%'}  >
          <h1 className="text-xl  md:text-2xl lg:text-4xl font-bold sm:font-extrabold mb-1">
            Pioneering Web3 Solutions for Tomorrow`s Digital World
          </h1>
          <p className="text-base  md:text-lg lg:text-3xl mb-2 md:mb-8 ">
            Explore the future of technology.
          </p>
          </Anim_Y>
          <Anim_Y duration={2} positionValue={'100%'}  >

          <div className='flex space-x-6'>
            <Link
              href={'/#cont'} // Replace with your desired link
              className=" shadow-xl shadow-orange-custom   bg-gradient-to-r from-black to-black hover:to-white hover:from-white  border border-black  text-orange-custom  py-2 px-6 sm:px-6 sm:py-3 rounded-full text-base font-extrabold transition duration-300 transform hover:scale-110"
            >
              Get Started {'>>'}
            </Link>
            <Link
              href="/service" // Replace with your desired link
              className="shadow-xl shadow-orange-custom hidden sm:block bg-gradient-to-r from-black to-black hover:to-white hover:from-white hover:text-black  border border-black  text-orange-custom py-2 px-6 sm:px-6 sm:py-3 rounded-full text-base font-bold transition duration-300 transform hover:scale-110"
            >
              Explore services
            </Link>
          </div>
          </Anim_Y>

        </div>
        <Anim_opacity duration={3} >
        <div className="  relative z-10  mx-auto  w-fit h-fit     "> 
            <Image
              src="/img2br.png" // The path to your image in the public directory
              alt="My Image Alt Text"
              width={400}
              height={200}
            />
        </div>
        </Anim_opacity>
      </div>
    </div>
  );
};

export default Hero;
