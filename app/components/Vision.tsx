'use client'

import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { RiTeamFill } from "react-icons/ri";
import { GiDigitalTrace } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import { TfiJoomla } from "react-icons/tfi";
import Image from 'next/image';
import Anim_opacity from './Animation/Anim_opacity';
import Anim_Y from './Animation/Anim_Y';
import Anim_X from './Animation/Anim_X';

const Vision = () => {
    return (<Anim_opacity duration={2} >
        <div className=" md:flex items-center bg-cart sm:my-12 sm:mx-12  py-10 rounded-3xl">
           

          <div className="md:w-1/2 h-full p-4 relative ">
            {/* <img src="/team.jpg" alt="About Us" className="w-full h-full object-cover border-4 rounded-3xl" /> */}
            <Image src="/her.webp" alt="About Us" width={1200} height={800} className="w-full  object-cover  rounded-3xl" />
          </div>
          

          <div className="md:w-1/2 flex-1 p-4 text-white px-8 text-left ">
          <Anim_X duration={2} positionValue={"-70%"} >

            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-custom  to-orange-custom text-transparent bg-clip-text ">Our Vision </h1>
            <h1 className="text-4xl font-extrabold   text-white">Shaping Tomorrow`s Digital Frontier</h1>
            </Anim_X>
            <Anim_X duration={2} positionValue={"70%"} >

            <p className='py-4 text-base'>At  <span className='text-orange-custom font-bold'>Web3fy</span>,we`re driven by a vision to lead innovation in the digital realm. Our mission is to pioneer transformative solutions in software development, blockchain, web services, and graphic design.</p>
            </Anim_X>
            <Anim_X duration={2} positionValue={"100%"} >

            <hr className='' />
            <div className='border border-gray-600 py-2'>

            <div className='px-6  pb-4   hover:border-orange-custom'>

              <div className='flex'>

            <h1 className='font-bold text-lg pb-1 bg-gradient-to-r from-orange-custom  to-orange-custom text-transparent bg-clip-text  mr-2'>Innovation Beyond Limits</h1>
            <FaEthereum className="custom-icon-color" style={{ width: '25px', height: '25px' }} />
            </div>
            <p className="text-base text-justify  ">
            We break barriers, constantly exploring new frontiers in software development. Our focus on emerging technologies like blockchain sets the stage for revolutionary solutions that anticipate future challenges.
            </p>
            </div>

            <div className='px-6  pb-4   hover:border-orange-custom'>
              <div className='flex'>
            <h1 className='font-bold text-lg pb-1 bg-gradient-to-r from-orange-custom  to-orange-custom text-transparent bg-clip-text  mr-2'>Empowering Collaboration</h1>
            <RiTeamFill className="custom-icon-color" style={{ width: '25px', height: '25px' }} />
            </div>
            <p className="text-base text-justify   ">
            Through strong partnerships, we empower businesses and individuals. By understanding your unique needs, we tailor solutions that elevate your digital presence, ensuring mutual success.
            </p>
            </div>
           
            <div className='px-6 pb-4    hover:border-orange-custom'>
            <div className='flex'>
            <h1 className='font-bold text-lg pb-1 bg-gradient-to-r from-orange-custom  to-orange-custom text-transparent bg-clip-text  mr-2'>Shaping Digital Landscapes</h1>
            <GiDigitalTrace  className="custom-icon-color" style={{ width: '25px', height: '25px' }}  />
            </div>
            <p className="text-base text-justify   ">
            We are architects of change, shaping tomorrow`s digital landscape. From enhanced web experiences to redefined trust through blockchain, our goal is to set new benchmarks in transformative digital solutions.

            </p>
            </div>
            <div className='px-6  pb-4   hover:border-orange-custom'>
            <div className='flex'>
            <h1 className='font-bold text-lg pb-1 bg-gradient-to-r from-orange-custom  to-orange-custom text-transparent bg-clip-text  mr-2'>Unparalleled Expertise, Unmatched Quality</h1>
            <FiBox className="custom-icon-color" style={{ width: '25px', height: '25px' }}  />
            </div>
            <p className="text-base  text-justify  ">
            With a team of seasoned professionals, we bring unmatched expertise to every project. Whether it`s blockchain, web design, cloud services, or graphic design, our commitment to quality is unwavering.
            </p>
            </div>
            <div className='px-6   pb-4   hover:border-orange-custom'>
            <div className='flex'>
            <h1 className='font-bold text-lg pb-1 bg-gradient-to-r from-orange-custom  to-orange-custom text-transparent bg-clip-text  mr-2'>Sustainability Commitment</h1>
            <TfiJoomla className="custom-icon-color" style={{ width: '25px', height: '25px' }}  />
            </div>
            <p className="text-base text-justify   ">
            Sustainability is at our core. We integrate eco-friendly technologies and practices, contributing to a digital future that respects and preserves the planet.

            </p>
            </div>
            
            
            </div>

            <hr />
            </Anim_X>

          </div>
          
        </div>
        </Anim_opacity>
      )
}

export default Vision