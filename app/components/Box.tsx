
'use client'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF, FaSquareFacebook } from 'react-icons/fa6'
import { SiInstagram } from 'react-icons/si'

function Box() {
  return (
    <div className='hidden absolute  top-52 sm:flex left-0 rotate-90 origin-left ml-11 p-4 rounded-md -mt-28 items-centera justify-betweena max-w-[330px] bg-transparent '>
            <a className=' bg-transparent'
              href='https://www.linkedin.com/company/web3fytech/'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' ml-3 -rotate-90 rounded-full bg-gradient-to-r from-black to-black shadow-2xl shadow-white p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-transparent '>
                <FaLinkedinIn className=' bg-transparent   text-orange-custom font-bold scale-125 ' />
              </div>
            </a>
            <a className=' bg-transparent'
              href='https://www.linkedin.com/company/web3fytech/'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' ml-3 -rotate-90 rounded-full bg-gradient-to-r from-black to-black shadow-2xl shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent '>
                <SiInstagram className=' bg-transparent  text-orange-custom scale-125' />
              </div>
            </a>
            <Link href={'/#cont'} className=' -rotate-90 bg-transparent ml-3'>
              <div className='rounded-full bg-gradient-to-r from-black to-black shadow-2xl shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent'>
                <AiOutlineMail  className=' bg-transparent text-orange-custom scale-125'/>
              </div>
            </Link>
            <a href='https://www.facebook.com/profile.php?id=61554592342016&mibextid=9R9pXO' className=' bg-transparent -rotate-90 ml-3 '>
              <div className='rounded-full bg-gradient-to-r from-black to-black shadow-2xl shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent'>
                <FaFacebookF className=' bg-transparent text-orange-custom scale-125' />
              </div>
            </a>
            </div>
  )
}

export default Box
