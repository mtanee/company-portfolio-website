import Image from 'next/image';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

const Footer = () => {
    return (
      <footer>
        <div className="bg-cart text-white py-7 ">
            
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="flex-col pt-5 sm:pt-0 space-y-5 items-center md:px-4">
            <Image className="h-10 w-auto sm:w-24 md:w-auto lg:w-44 xl:w-44 object-cover" alt='logow' width={600} height={800} src="/2.png"  />          <p className='sm:text-base text-justify text-sm font-medium'>Web3fy is a dynamic digital agency that bridges technology, creativity, and innovation to deliver impactful solutions. Elevate your online presence with Web3fy`s visionary services and redefine your digital future.</p>
          
        </div>

              <div className='md:ml-20'>
                <h2 className="text-xl font-bold mb-4 text-orange-custom">Quick Links</h2>
                <ul className='space-y-2 font-medium '>
                  <li className='hover:text-orange-custom'>
                    <a href="#hom">Home</a>
                  </li>
                  <li className='hover:text-orange-custom'>
                    <a href="#abou">About Us</a>
                  </li>
                  <li className='hover:text-orange-custom'>
                    <a href="#servv">Explore Services</a>
                  </li>
                  <li className='hover:text-orange-custom'>
                    <a href="#tea">Meet Our Team</a>
                  </li>
                  <li className='hover:text-orange-custom'>
                    <a href="#cont">Contact</a>
                  </li>
                </ul>
              </div>
{/*     
              <div>
                <h2 className="text-xl font-bold mb-4">Our Address</h2>
                <p>
                  T : 123 456 789 0
                  <br />
                  (+321) 123 456 789 0
                  <br />
                  A : 80 Pine St. 10th Floor
                  <br />
                  New York, NY 10005, USA
                  <br />
                  E : techoes@mail.com
                  <br />
                  techoes_project@mail.com
                </p>
              </div> */}
    
              <div>
                <h2 className="text-xl font-bold mb-4 text-orange-custom">Follow Us</h2>
                <div id='icon'className='flex  mt-6'>
        <a className=' bg-transparent'
              href='https://www.linkedin.com/company/web3fytech/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='  rounded-full shadow-lg shadow-orange-custom bg-gradient-to-r from-white to-white p-4 cursor-pointer hover:scale-110 hover:from-orange-custom hover:to-orange-custom ease-in duration-300 bg-transparent '>
                <FaLinkedinIn className=' bg-transparent  text-black font-bold scale-125 ' />
              </div>
            </a>
            <a className=' bg-transparent'
              href='https://www.facebook.com/profile.php?id=61554592342016&mibextid=9R9pXO'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' ml-3 rounded-full shadow-lg shadow-orange-custom bg-gradient-to-r from-white to-white p-4 cursor-pointer hover:scale-110 hover:from-orange-custom hover:to-orange-custom ease-in duration-300 bg-transparent '>
                <SiInstagram className=' bg-transparent  text-black scale-125' />
              </div>
            </a>
            <a href='#Cont' className=' bg-transparent '>
            <div className=' ml-3 rounded-full shadow-lg shadow-orange-custom bg-gradient-to-r from-white to-white p-4 cursor-pointer hover:scale-110 hover:from-orange-custom hover:to-orange-custom ease-in duration-300 bg-transparent '>
                <AiOutlineMail  className=' bg-transparent text-black scale-125'/>
              </div>
            </a>
            <a href='https://www.facebook.com/profile.php?id=61554592342016&mibextid=9R9pXO' className=' bg-transparent  '>
            <div className=' ml-3 rounded-full shadow-lg shadow-orange-custom bg-gradient-to-r from-white to-white p-4 cursor-pointer hover:scale-110 hover:from-orange-custom hover:to-orange-custom ease-in duration-300 bg-transparent '>
                <FaFacebookF className=' bg-transparent text-black scale-125' />
              </div>
            </a>
            </div>
        
               
        

              
              </div>
            </div>
            {/* <div className="text-center mt-8">
                {/* <hr /> */}
             
              
            {/* </div> */}
          </div>
        </div>
        <div className='text-white text-sm pb-6 bg-cart  text-center pt-4 '>
          {/* <p>contact@web3fy.com</p> */}
        <p >
              © Copyright 2023 <span className='font-extrabold text-orange-custom'>Web3fy</span> |  All right reserved
              </p>
              
              </div>
        </footer>
      );
    };
export default Footer