// import Image from 'next/image';
// import React from 'react';

// const Hserv = () => {
//   const commonTagline = "We Provide Digital Services";

//   return (
//     <div
//       className='h-screen hero-section flex flex-col justify-center items-center text-center'
      
//     >
//       <h1 className="text-6xl md:text-2xl lg:text-8xl font-extrabold  sm:font-bold text-black  ">Services</h1>
      
//       <div className="my-8">
//         <p className="text-2xl md:text-xl lg:text-5xl font-semibold font-sans shadow-xl shadow-black text-orange-custom bg-gradient-to-r from-black rounded-3xl p-2 pr-3 ">{commonTagline}</p>
//         <Image src={'/hser2.jpg'} alt={'hser'} width={500} height={200} className='hero-section' />
//       </div>
//     </div>
//   );
// }

// export default Hserv;
'use client'

import Image from 'next/image';
import Anim_Y from './Animation/Anim_Y';

const Hserv = () => {
  return (
    <div id='hom' className="relative hero-section  min-h-screen  " style={{ backgroundImage: "url('/hser1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-blue pb-36 mx-2">
      <Anim_Y duration={1} positionValue={'-100%'}  >

        <h1 className="text-6xl md:mx-10 lg:mx-0 font-extrabold text-center sm:font-bold text-orange-custom mt-20 mb-4 ">Elevate Digital Presence with Web3fy</h1>
        <div className="my-4">
          <p className="text-2xl md:text-3xl lg:text-3xl md:mx-24 lg:mx-0 font-semibold text-center font-sans text-gray-50">Your Vision, Our Expertise – Transforming Ideas into Web3 Realities</p>
        </div>
        </Anim_Y>

      </div>
      {/* <div className="flex justify-center pt-60 sm:pt-80">
        <div style={{ maxWidth: '100%', height: 'auto' }}>
          <Image
            src="/hser.jpg" // The path to your image in the public directory
            alt="My Image Alt Text"
            width={900}
            height={400}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hserv;
