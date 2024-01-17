'use client'

import Image from 'next/image';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { FiCircle } from 'react-icons/fi';
import Anim_Y from './Animation/Anim_Y';
import Anim_X from './Animation/Anim_X';
import Anim_opacity from './Animation/Anim_opacity';
const About = () => {
  return (
    <section id='abou' className=" bg-cart sm:my-12 sm:mx-12 p-4 rounded-3xl">
      <div className="min-h-screen flex flex-col md:flex-row items-center ">
     
        <div className="w-full sm:w-1/2 md:w-1/2 p-4 relative">
          <Image src={'/meta.webp'} width={800} height={100} alt={'Lower Right Image'}  className="w-full sm:max-h-screen sm:max-h-auto   object-cover rounded-3xl  shadow-lg pb-10"/>
         
        </div>
        
        <div className="w-full sm:w-1/2  p-4 text-white">
        <Anim_Y duration={1} positionValue={'-70%'}  >

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 bg-orange-custom bg-gradient-to-t from-orange-custom  to-orange-custom text-transparent bg-clip-text ">
            About Web3fy 
          </h1>
          <div className='flex'>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4">
          Best digital solutions agency to <span className=' bg-orange-custom text-transparent bg-clip-text'>growth</span>
          </h1>
          </div>
          

          <div id='ab'>
            
          <div className='flex'>

          <div className="relative">
            
      {/* Red circle */}
      <div className="text-orange-custom  text-4xl md:text-5xl lg:text-4xl absolute z-20">
        <FiCircle />
      </div>

      {/* White circle (overlapping with the red circle) */}
      <div className="text-white text-center text-4xl md:text-5xl lg:text-4xl absolute z-10 top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <BsFillCircleFill />
      </div>

     </div>          
     <div className='px-4'>
            <h1 className='text-2xl font-semibold  bg-orange-custom text-transparent pl-9 bg-clip-text'>Company Mission</h1>
            </div>
            </div>
            <p className='pl-14 pb-4'>We are committed to delivering innovative web development, graphic design, and metaverse environment services that not only meet but exceed our clients expectations. Our mission is to blend technology and creativity to craft digital experiences that leave a lasting impact.</p>
            <hr />
            </div>
            <div id='ab'>
          <div className='flex pt-4'>
            
          <div className="relative">
      {/* Red circle */}
      <div className="text-orange-custom  text-4xl md:text-5xl lg:text-4xl absolute z-20">
        <FiCircle />
      </div>

      {/* White circle (overlapping with the red circle) */}
      <div className="text-white text-center text-4xl md:text-5xl lg:text-4xl absolute z-10 top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <BsFillCircleFill />
      </div>

     </div>
          <div className='px-4'>
            <h1 className='text-2xl font-semibold ml-9  bg-orange-custom text-transparent bg-clip-text'>Company Vision</h1>
            </div>
            </div>
            <p className='pl-14 pb-3'>Our vision is to be a catalyst for digital transformation. We see a future where technology and design harmoniously coexist to create seamless, immersive, and engaging digital environments..</p>
            <hr />
            </div>
            <div id='ab'>
          <div className='flex pt-4'>
          <div className="relative">
      {/* Red circle */}
      <div className="text-orange-custom  text-4xl md:text-5xl lg:text-4xl absolute z-20">
        <FiCircle />
      </div>

      {/* White circle (overlapping with the red circle) */}
      <div className="text-white text-center text-4xl md:text-5xl lg:text-4xl absolute z-10 top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <BsFillCircleFill />
      </div>

     </div>
          <div className='px-4'>
            <h1 className='text-2xl font-semibold  bg-orange-custom pl-9 text-transparent bg-clip-text'>Our Philosophy</h1>
            </div>
            </div>
            <p className='pl-14 pb-4'>At Web3fy, our philosophy revolves around the belief that the future is digital, and innovation is the key to success. We`re dedicated to pushing the boundaries of technology and design, embracing change, and envisioning a world where creativity and technology seamlessly intertwine.</p>
           
            </div>
          {/* <p className="text-base sm:text-lg lg:text-lg text-gray-100 mb-4">
            At Techoes, we nurture a deep passion for the Web3 revolution. With a team of visionary technologists, blockchain enthusiasts, and creative problem solvers, we are ushering in the next era of digital innovation. Our mission is to lead the way in Web3 technology, providing groundbreaking solutions that empower businesses and individuals to thrive in a decentralized, interconnected world. We`re more than just a Web3 agency; we`re a dedicated team of tech enthusiasts, blockchain experts, and decentralized visionaries, all united by a mission: to redefine the digital landscape. From revolutionizing finance to shaping the future of art, gaming, and social interaction, we`re at the forefront of Web3 technology, crafting solutions that empower businesses and individuals to thrive in this new digital transformation.
          </p> */}
          <p className="text-base sm:text-lg lg:text-lg pl-14">
            <strong>10 +</strong> Years of Experience
          </p>
          <p className="text-base sm:text-lg lg:text-lg pl-14">
            <strong>500 +</strong> Satisfied Clients
          </p>
          </Anim_Y>
          <Anim_opacity duration={3}  >
          <div className="pt-8 pl-14">

  {/* <!-- Button --> */}
  <a
          href="/your-button-link" // Replace with your desired link
          className="    bg-gradient-to-r  from-orange-custom to-black hover:to-white hover:from-white  border border-black  text-white hover:text-black  py-2 px-6 sm:px-6 sm:py-3 rounded-full text-base font-bold transition duration-300 transform hover:scale-110"
        >
          Learn More {'>>'}
        </a>
</div>
</Anim_opacity>
        </div>
      </div>
    </section>
  );
};

export default About;
