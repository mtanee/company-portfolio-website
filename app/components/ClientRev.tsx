'use client'
import { useIsSSR } from "@react-aria/ssr";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { T_Data } from "./CR-data";
import Image from 'next/image';

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

function ClientRev() {
  const isServer = useIsSSR();
  console.log(isServer ? "Server" : "Client");

  return (
    <section className=" bg-cart pb-16 sm:my-12 sm:mx-12  rounded-3xl">
      <div className="pt-16">
        <div className='text-2xl sm:text-4xl font-extrabold text-orange-custom    pb-6 text-center '>Client Review</div>
        <div className="text-white font-semibold text-3xl sm:text-5xl text-center">What Our Clients Are Saying</div>

        <div className='w-full mt-10'>
          <div className="flex justify-items-center my-8">
            <MdChevronLeft onClick={slide_L} size={60} className="rounded-md self-center   text-white left-0" />
            <div id='sliderr' className="scrollbar scrollbar-none item-center snap-mandatory snap-always snap-x flex-1 flex-shrink-0 flex flex-row w-full sm:w-[90%] h-[100%] space-x-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">

              {T_Data.map((item) => (
                <div key={item.id} className="bg-gradient-to-r from-lim  to-lim w-full sm:w-8/12 scroll-smooth rounded-3xl overflow-hidden snap-center h-full flex-shrink-0">
                  <div className="flex flex-col sm:flex-col  ">
                    <div className="w-full sm:w-2/4">
                      <Image className="w-2/4 h-auto object-cover rounded-full p-4  cursor-pointer" src={item.src} alt="profile image" width={500} height={370} />
                    </div>
                    <div className=" sm:mx-6 sm:pr-6 max-h-full w-full    px-1  pb-10 pl-4 sm:pl-4 sm:pb-4">
                      <div className="mt-6 text-orange-custom text-opacity-90 font-bold text-xl sm:text-2xl whitespace-pre-wrap">{item.Name}</div>
                      <div className="mt-6 text-white text-sm sm:text-lg sm:text-justify pr-8 sm:font-semibold mb-4 whitespace-pre-wrap">{item.Exp}</div>
                      <div className="h-2/5 bg-red-2001 text-white flex justify-end items-end">

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          
              <MdChevronRight onClick={slide_R} size={60} className="rounded-md self-center text-white left-0" />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientRev;
