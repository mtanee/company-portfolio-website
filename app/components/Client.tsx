// "use client"
// import React from "react"
// import "./styles.css"
// import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import Image from "next/image"
// import Animate from "./Animation/Anim_Y"

// const carousel: KeenSliderPlugin = (slider) => {
//   const z = 300
//   function rotate() {
//     const deg = 360 * slider.track.details.progress
//     slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
//   }
//   slider.on("created", () => {
//     const deg = 360 / slider.slides.length
//     slider.slides.forEach((element, idx) => {
//       element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
//     })
//     rotate()
//   })
//   slider.on("detailsChanged", rotate)
// }

// export default function App() {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//       selector: ".carousel__cell",
//       renderMode: "custom",
//       mode: "free-snap",
//     },
//     [carousel]
//   )

//   return (
//     <div className="pt-16 bg-black h-screen sm:my-12 sm:mx-12">
//           <h1 className=" text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-6 bg-orange-custom text-transparent bg-clip-text  sm:pl-14 pb-4 pt-8">Clients</h1>
//          <div className=" text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white sm:pl-14 pb-20">Our Clients</div>
//     <div className="wrapper ">
      
//       <Animate duration={2} positionValue="100%">
        
//       <div className="scene">
//         <div className="carousel keen-slider" ref={sliderRef}>
//           <div className="carousel__cell number-slide4 ">
//             {/* <Animate duration={2} positionValue="20%"> */}
//               <div className="flex flex-col justify-center ">
//                 <Image src="/client21.png" alt="Digital Marketing" width={500} height={80} className="rounded" />
//                 <p className=" text-xl mx-auto font-bold">PIAIC</p>
//               </div>
//             {/* </Animate> */}
//           </div>
//           <div className="carousel__cell number-slide5 ">
//             {/* <Animate duration={2} positionValue="20%"> */}
//               <div className="flex flex-col justify-center p-2">
//                 <Image src="/client9.webp" alt="Digital Marketing" width={300} height={80} className="rounded scale-95" />
//                 <p className=" text-2xl mx-auto font-bold">MOITT</p>
//               </div>
//             {/* </Animate> */}
//           </div>
//           <div className="carousel__cell number-slide2">
//             {/* <Animate duration={2} positionValue="20%"> */}
//               <div className="flex flex-col justify-center p-2">
//                 <Image src="/client33.png" alt="Digital Marketing" width={500} height={80} className="rounded" />
//                 <p className=" text-2xl mx-auto font-bold">Code Bite</p>
//               </div>
//             {/* </Animate> */}
//           </div>
//           <div className="carousel__cell number-slide1">
//             {/* <Animate duration={2} positionValue="20%"> */}
//               <div className="flex flex-col justify-center p-2">
//                 <Image src="/client11.png" alt="Digital Marketing" width={500} height={80} className="rounded" />
//                 <p className=" text-2xl mx-auto font-semibold">Doblier</p>
//               </div>
              
//             {/* </Animate> */}
//           </div>
//           <div className="carousel__cell number-slide1">
//             {/* <Animate duration={2} positionValue="20%"> */}
//               <div className="flex flex-col justify-center p-2">
//                 <Image src="/clientm2.png" alt="Digital Marketing" width={500} height={80} className="rounded" />
//                 <p className=" text-2xl mx-auto font-semibold">Mass Tech</p>
//               </div>
              
//             {/* </Animate> */}
//           </div>
//           <div className="carousel__cell number-slide1">
//             {/* <Animate duration={2} positionValue="20%"> */}
//               <div className="flex flex-col justify-center p-2">
//                 <Image src="/client222.png" alt="Digital Marketing" width={500} height={80} className="rounded" />
//                 <p className=" text-2xl mx-auto font-semibold">PIAIC</p>
//               </div>
              
//             {/* </Animate> */}
//           </div>
        
          
//           {/* <div className="carousel__cell number-slide4">4</div>
//           <div className="carousel__cell number-slide5">5</div>
//           <div className="carousel__cell number-slide6">6</div> */}
//         </div>
//       </div>
      
//       </Animate>
//       </div>
//     </div>
    
//   )
// }
"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { T_Data } from './CR-data';
import Anim_Y from "./Animation/Anim_Y";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import './style.css';
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <><p></p></>;

  return (
    <div className="bg-cart text-white pt-10 w-full h-full min-h-screen relative  sm:my-12 ">
      <Anim_Y duration={1} positionValue="20%">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-6 bg-orange-custom text-transparent bg-clip-text sm:pl-14 pb-4 pt-8">
          Clients
        </h1>
        <div className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white sm:pl-14">
          We Work With Amazing Clients
        </div>
        <Swiper
          className="mySwipera"
          autoplay={{ delay: 2000 }}
          mousewheel={true}
          slidesPerView={1} // Set to 1 for responsiveness
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay, Mousewheel]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {T_Data.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="text-2xl font-semibold text-center bg-red-100a"
            >
              <Image
                className="w-2/4 h-2/4 object-scale-down mx-auto"
                priority={false}
                src={item.src}
                width={100}
                height={100}
                alt={item.Name}
              />
              {item.Name}
            </SwiperSlide>
          ))}
        </Swiper>
      </Anim_Y>
    </div>
  );
}
