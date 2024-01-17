'use client'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdOutlineRocketLaunch } from 'react-icons/md';
import Anim_X from './Animation/Anim_X';
import Anim_opacity from './Animation/Anim_opacity';

const Contact = () => {
  return (

    <div id='cont' className="hero-section flex flex-col sm:flex-row items-center justify-center min-h-screen py-12  ">

      <div className="w-full md:w-2/3 lg:w-1/3 text-left pl-4">
      <Anim_X duration={1} positionValue={"-70%"} >

        <MdOutlineRocketLaunch className="text-black text-4xl md:text-5xl lg:text-6xl" />

        <h1 className=" text-orange-custom shadow-xl shadow-orange-custom bg-gradient-to-r from-black rounded-xl pl-2 pb-2 pt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
          REACH OUT
        </h1>
        <h2 className="py-4 text-3xl md:text-4xl lg:text-6xl font-extrabold">
          Ready to Build Something Great?
        </h2>
        <h2 className="text-lg md:text-xl lg:text-lg font-medium">
          Partner with us to develop technology to grow your business.
        </h2>
        </Anim_X>

        <div className=' shadow-xl shadow-black rounded-md p-6'>
          <Anim_opacity duration={2} >
        <div className='flex mb-2'>
        <FaLocationDot className=" text-4xl md:text-5xl bg-gradient-to-r from-lim bg-black text-orange-custom p-3 rounded-full lg:text-5xl " />
        
        <div className='text-lg  font-normal px-4'>location <br /> <div className='font-bold font-sans'> 582 Main address, 2nd floor, USA</div></div>
        </div>
        <div className='flex mb-2'>
        <MdEmail className=" text-4xl md:text-5xl bg-gradient-to-r from-lim bg-black text-orange-custom p-3 rounded-full lg:text-5xl " />
        
        <div className='text-lg  font-normal px-4'>Email Address <br /> <div className='font-bold font-sans'> info@web3fy.com</div></div>
        </div>
        <div className='flex'>
        <AiTwotonePhone className=" text-4xl md:text-5xl bg-gradient-to-r from-lim bg-black text-orange-custom  p-3 rounded-full lg:text-5xl " />
        
        <div className='text-lg  font-normal px-4'>Phone Number <br /> <div className='font-bold font-sans'> +1 (872) 336-2604</div></div>
        </div>
        </Anim_opacity>

        </div>
      </div>
      
      <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
        <div className="container p-4 md:p-8  shadow-md rounded-md max-w-md mx-auto">
        <Anim_X duration={1} positionValue={"70%"} >

          <form>
            <div className="mb-4">
              <label className="block text-gray-900 font-semibold">Welcome! What should we call you?*</label>
              <input
                type="text"
                className="w-full border  border-black rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-black focus:border-none bg-transparent placeholder-white"
                placeholder=" Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 font-semibold">Would you let us know your email address?</label>
              <input
                type="email"
                className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-black focus:border-none bg-transparent  placeholder-white"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 font-semibold">Enter your Contact Number *</label>
              <input
                type="tel"
                className="w-full border  border-black rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-black focus:border-none bg-transparent  placeholder-white"
                placeholder="Your Phone"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 font-semibold">Your Message</label>
              <textarea
                className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-black focus:border-none bg-transparent  placeholder-white"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className=" shadow-xl shadow-orange-custom bg-gradient-to-r from-black to-black hover:to-white hover:from-white  border border-black  text-orange-custom  py-2 px-6 sm:px-12 sm:py-3 rounded-xl text-base font-bold transition duration-300 transform hover:px-14 hover:py-3"
              >
                Send
              </button>
            </div>
          </form>
          </Anim_X>

        </div>
      </div>

    </div>

  );
};

export default Contact;



// 'use client'
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";

// // npm i @emailjs/browser

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_hiodk3h",
//         "template_oc66amq",
//         form.current,
//         "0_JTQveGIF1xJpz-7"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <StyledContactForm>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="from_name" />
//         <label>Email</label>
//         <input type="email" name="to_name" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </StyledContactForm>
//   );
// };
// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;