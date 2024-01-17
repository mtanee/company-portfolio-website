"use client";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { T_Data } from "./T_Data";
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const slide_L = () => {
  const slider = document.getElementById("slider");
  if (slider !== null) {
    slider.scrollLeft = slider.scrollLeft - 250;
    if (slider.scrollLeft <= 0) {
      console.log("slider.scrollLeft==>",slider.scrollLeft)
      // If you've scrolled past the beginning, loop to the end.
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
      
  }
  }
};

const slide_R = () => {
  const slider = document.getElementById("slider");
  if (slider !== null) {
    slider.scrollLeft = slider.scrollLeft + 250;
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      // If you've scrolled past the end, loop to the beginning.
      slider.scrollLeft = 0;
  }
  }
};

function Team() {
  return (
    <section id='tea' className=' pb-12  sm:my-12 sm:mx-12 bg-cart rounded-3xl'>
      <div className="pt-16   text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 bg-orange-custom text-transparent bg-clip-text  sm:pl-14 pb-4 pt-8">TEAM</h1>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white sm:pl-14">Meet Our Experts</div>
        <div className="w-full mt-10">
          <div className="flex items-center ">
            <MdChevronLeft onClick={slide_L} size={60} className="rounded-md self-center sm:mb-60 text-gray-100 absolute1 left-0" />
            <div id="slider" className=" scroll-smooth snap-mandatory snap-always snap-x scrollbar scrollbar-none   flex flex-row pl-101 w-full h-96 sm:h-[30rem] md:h-[40rem] space-x-4 overflow-x-scroll snap-type-x proximity">
              {T_Data.map((item) => (
                <div key={item.id} className="w-full snap-center sm:w-1/2 md:w-1/2 lg:w-1/3  rounded-xl  flex-shrink-0 bg-neutral-800 sm:bg-transparent bg-opacity-40 ">
                  <Image className="w-full  cursor-pointer  px-8 mt-8 rounded-2xl " src={item.src} alt="profile image" width={500} height={200} />
                  <div className="bg-orange-custom text-transparent bg-clip-text   sm:text-center mt-4 text-2xl font-extrabold">{item.Name}</div>
                  <div className="text-white text-base font-bold sm:text-center mb-4">{item.Exp}</div>
                  <div className=" hidden  text-gray-300 text-xs font-medium text-justify px-20  mb-4 ">{item.det}</div>
                   {/* <div id='icon'className='flex justify-center mt-6 '>
        <a className=' bg-transparent'
              href='https://www.linkedin.com/in/muhammad-taneer-7a63ba176/'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' ml-3  rounded-full bg-gradient-to-r from-orange-custom to-orange-custom  p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent '>
                <FaLinkedinIn className=' bg-transparent  text-black font-bold scale-125 ' />
              </div>
            </a>
            <a className=' bg-transparent'
              href='https://github.com/mtanee'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' ml-3  rounded-full bg-gradient-to-r from-orange-custom to-hov2   p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent '>
                <FaGithub className=' bg-transparent  text-black scale-125' />
              </div>
            </a>
          
            </div> */}
                </div>
              ))}
            </div>
            <MdChevronRight onClick={slide_R} size={60} className=" rounded-md self-center sm:mb-60 text-gray-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
