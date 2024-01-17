'use client'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Anim_Y from "./Animation/Anim_Y"
import StarRating from "./StarRating"
import { T_Data } from "./CRev-data";
import Image from 'next/image';
import { useState, useEffect } from 'react';



function ClientRev() {
    const [v, setV] = useState(0);

    const slide_L = (event: Event) => {
        event.preventDefault();
        const slider = document.getElementById("sldd");
        if (slider !== null) {
            slider.scrollLeft = slider.scrollLeft - (650+v);
            if (slider.scrollLeft <= 0) {
                slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
            }
        }
    };

    const slide_R = (event: Event) => {
        event.preventDefault();
        const slider = document.getElementById("sldd");
        if (slider !== null) {
            slider.scrollLeft = slider.scrollLeft + (650+v);
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0;
            }
        }
    };
    const [rating, setRating] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the value of v based on the screen size
      if (window.innerWidth < 640) {
        setV(-400); // Small screen (sm)
      } else if (window.innerWidth < 768) {
        setV(0); // Medium screen (md)
      } else if (window.innerWidth < 1024) {
        setV(200); // Large screen (lg)
      }else if (window.innerWidth < 1280) {
        setV(400); // Extra Large screen (lg)
      }else if (window.innerWidth < 1536) {
        setV(600); // 2xl screen (lg)
      } else {
        setV(0); // Default value for extra-large screen (xl) and others
      }
    };

    // Initial call to set the initial value
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const handleRatingChange = () => {
        setRating(4);
    };

    return (
        <section className="z-50 bg-black bg-carta pb-16 sm:my-12 sm:mx-12  rounded-3xl">
            <div className="pt-16 bg-black">
                <div className='text-2xl sm:text-4xl font-extrabold text-orange-custom    pb-6 text-center '>Client Review</div>
                <div className="text-white font-semibold text-3xl sm:text-5xl text-center">What Our Clients Are Saying</div>

                <div className='w-full mt-10'>
                    <div className="flex justify-items-center my-8">
                        <MdChevronLeft onClick={slide_L} size={60} className="rounded-md self-center   text-white left-0" />
                        <div id='sldd' className="scrollbar scrollbar-none item-center snap-mandatory snap-always snap-x flex-1 flex-shrink-0 flex flex-row w-full sm:w-[90%] h-[100%] space-x-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">

                            {T_Data.map((item) => (
                                <div key={item.id} className="bg-gradient-to-r from-lim to-lim w-full sm:w-4/12 scroll-smooth rounded-3xl overflow-hidden snap-center h-full flex-shrink-0">
                                    <Anim_Y duration={1} positionValue='10%'>
                                        <div className=" ">
                                            <div className="w-fit mx-auto sm:w-2/4">
                                                <Image className="w-fit h-auto object-cover rounded-full p-4  cursor-pointer" src={item.src} alt="profile image" width={300} height={370} />
                                                <div className="w-fit mx-auto">
                                                    {/* <StarRating initialRating={4} onRatingChange={handleRatingChange} /> */}
                                                    <StarRating initialRating={4} onRatingChange={handleRatingChange} value={item.rating} />
                                                </div>
                                            </div>
                                            <div className=" sm:mx-6 sm:pr-6 max-h-full w-fit mx-auto  px-1  pb-10 pl-4 sm:pl-4 sm:pb-4">
                                                <div className="mt-2 mx-auto w-fit text-orange-custom text-opacity-90 font-bold text-xl sm:text-2xl">{item.Name}</div>
                                                <p className="mt-1 mx-auto text-gray-100 line-clamp-6 text-sm sm:text-lg1 sm:text-justify text-center pr-8a sm:font-semibold  whitespace-pre-wrap">{item.Exp}</p>
                                                <div className="h-2/5  text-white flex justify-end items-end">

                                                </div>
                                            </div>
                                        </div>
                                    </Anim_Y>
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