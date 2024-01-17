'use client'
import { useIsSSR } from "@react-aria/ssr";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { T_Data } from "./W-data";
import Image from 'next/image';
import Anim_opacity from "./Animation/Anim_opacity";
import Link from "next/link";

const slide_L = (event: Event) => {
  event.preventDefault();
  const slider = document.getElementById("sliderr");
  if (slider !== null) {
    slider.scrollLeft = slider.scrollLeft - 650;
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
    }
  }
};

const slide_R = (event: Event) => {
  event.preventDefault();
  const slider = document.getElementById("sliderr");
  if (slider !== null) {
    slider.scrollLeft = slider.scrollLeft + 650;
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }
};

function Team() {
  const isServer = useIsSSR();
  console.log(isServer ? "Server" : "Client");

  return (
    <section id="work" className=" bg-cart pb-16 sm:my-12 sm:mx-12  rounded-3xl">
      <div className="pt-16">
        <div className='text-2xl sm:text-4xl font-extrabold text-orange-custom    pb-6 text-center '>Recent Projects</div>
        <div className="text-white font-semibold text-3xl sm:text-5xl text-center">Our Latest works gallery</div>
        <Anim_opacity duration={3} >

        <div className='w-full mt-10'>
          <div className="flex justify-items-center my-8">
            <MdChevronLeft onClick={slide_L} size={60} className="rounded-md self-center   text-white left-0" />
            <div id='sliderr' className="scrollbar scrollbar-none item-center snap-mandatory snap-always snap-x flex-1 flex-shrink-0 flex flex-row w-full sm:w-[90%] h-[100%] space-x-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">

              {T_Data.map((item) => (

                <div key={item.id} className=" bg-gradient-to-r to-lim from-black w-full sm:w-4/5 scroll-smooth rounded-3xl overflow-hidden snap-center h-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row  ">

                    <div className="w-full lg:w-3/5">
                      <Image className="md:w-full  object-cover cursor-pointer " src={item.src} alt="profile image" width={900} height={370} />
                    </div>
                    <div className="max-h-full   lg:w-3/4 bg-gradient-to-r from-lim  bg-black  px-4   pb-10  sm:pb-4 sm:rounded-lg">
                      <div className="mt-6 text-orange-custom text-opacity-90 font-bold text-lg sm:text-2xl underline whitespace-pre-wrap">{item.Name}</div>
                      <div className="mt-6  text-gray-200 line-clamp-6 md:line-clamp-none font-normal text-sm mb-4 whitespace-pre-wrap">{item.Exp}</div>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <button className=" rounded-3xl px-3 py-2 text-xl font-semibold bg-gradient-to-r from-orange-custom to-lim hover:from-white hover:to-white hover:text-black">View Project</button>
                        </a>
                    </div>
                  </div>
                  <div className="w-full h-10 sm:mt-12  bg-gradient-to-r to-orange-custom from-black"></div>
                </div>

              ))}
            </div>

              <MdChevronRight onClick={slide_R} size={60} className="rounded-md self-center text-white left-0" />

          </div>
        </div>
        </Anim_opacity>

      </div>
    </section>
  )
}

export default Team;

