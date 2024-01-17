
'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {CgWebsite} from 'react-icons/cg'
import { SiCodesignal, SiEthereum } from 'react-icons/si';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import Anim_X from './Animation/Anim_X';
import Anim_Y from './Animation/Anim_Y';
export default function Coref() {
  return (
    <div  className='sm:py-16'>
      <div className="text-center pt-12 sm:mx-6 md:mx-20 lg:mx-10 py-12 md:py-16 lg:py-20 bg-black rounded-3xl ">
        <div className="text-orange-custom ">
          <h1 className="text-3xl md:text-4xl font-semibold  bg-orange-custom   text-transparent bg-clip-text ">Core Features</h1>
          <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">What We Offer</h2>
          <Link href="/service" className="text-orange-custom  bg-orange-custom   text-transparent bg-clip-text  hover:text-hhov font-medium text-lg">
            See All Services
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16 lg:mt-20">
        <Anim_X duration={2} positionValue={"-70%"} >

        <div className="flex flex-col items-center rounded-lg shadow-2xl p-6 py-7  border border-gray-600 hover:bg-black hover:from-bluecs hover:to-hov2 hover:border-orange-custom bg-gradient-to-br from-lim  text-orange-custom hover:text-black  mx-12 my-4">
          <CgWebsite className="orange-custom" style={{ width: '64px', height: '64px' }}/>
            <p className="mt-5 text-white  text-xl font-semibold ">Website Development</p>
          </div>
          </Anim_X>

          <Anim_X duration={1} positionValue={"-70%"} >

          <div className="flex flex-col items-center rounded-lg shadow-2xl p-6   border border-gray-600 hover:bg-black hover:from-bluecs hover:to-hov2 hover:border-orange-custom bg-gradient-to-br from-lim  text-orange-custom hover:text-black  mx-12 my-4">
          <SiEthereum className="orange-custom" style={{ width: '74px', height: '74px' }}/>
            <p className="mt-5 text-white  text-xl font-semibold ">Blockchain Development</p>
          </div>
          </Anim_X>

          <Anim_X duration={1} positionValue={"70%"} >

          <div className="flex flex-col items-center rounded-lg shadow-2xl p-6 py-9  border border-gray-600 hover:bg-black hover:from-bluecs hover:to-hov2 hover:border-orange-custom bg-gradient-to-br from-lim  text-orange-custom hover:text-black  mx-12 my-4">
          <BsFillCloudArrowDownFill className="orange-custom" style={{ width: '74px', height: '74px' }}/>
            <p className="mt-5 text-white text-xl font-semibold ">Cloud Services</p>
          </div>
          </Anim_X>

          <Anim_X duration={2} positionValue={"70%"} >

          <div className="flex flex-col items-center rounded-lg shadow-2xl p-6   border border-gray-600 hover:bg-black hover:from-bluecs hover:to-hov2  hover:border-orange-custom bg-gradient-to-br from-lim  text-orange-custom hover:text-black  mx-12 my-4">
          <SiCodesignal className=" " style={{ width: '74px', height: '74px' }}/>
            <p className="mt-5 text-white text-xl font-semibold ">Graphic Designing</p>
          </div>
          </Anim_X>

        </div>
      </div>
    </div>
  );
}

