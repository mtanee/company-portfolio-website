'use client'

import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Anim_Y from './Animation/Anim_Y';

const Team1 = () => {
  const services: any[] = [
    
          {       name: 'Yousuf Dangra',
          tagline:'Blockchain Auditor',
          image: '/sir1.jpg',
          alt: 'Blockchain Auditor',
          description:
            'An adept blockchain auditor, ensures the security and integrity of blockchain networks. With keen attention to detail, he upholds transparency and accountability in the dynamic realm of decentralized technologies',
            linkedinLink:'https://www.linkedin.com/in/yousuf-dangra-609691174/',
            mail:'',
            
        },
        {       name: 'Muhammad Taneer',
        tagline:'Web & Blockchain Developer',
        image: '/tan43.jpg',
        alt: 'Front-End Design & Development',
        description:
          'A skilled software engineer specializing in web and blockchain development. With extensive experience, He bring a proven ability to deliver innovative solutions and contribute to projects at the forefront of technology.',
          linkedinLink:'https://www.linkedin.com/in/muhammad-taneer-7a63ba176/',
          mail:'',
          
      },
      {       name: 'Hammad Wahab',
            tagline:'Web & Blockchain Developer',
            image: '/ham2.jpg',
            alt: 'Front-End Design & Development',
            description:
              ' Your go-to expert for Blockchain Development and Full-stack Web Development. As a Blockchain Developer, He specialize in crafting decentralized solutions, smart contracts, and exploring the expansive world of DApps.',
              linkedinLink:'linkedin.com/in/hammad-wahab',
              mail:'hammad.wahab52@gmail.com',
              
          },
          {       name: 'Muhammad Zeeshan',
          tagline:'Web Developer',
          image: '/zesha1.jpg',
          alt: 'Blockchain Auditor',
          description:
            'An experienced web developer, excels in crafting dynamic and responsive websites with a focus on WordPress. His versatile skill set extends to various technologies, ensuring success in diverse web development projects.',
            linkedinLink:'https://www.linkedin.com/in/muhammad-taneer-7a63ba176/',
            mail:'',
            
        },
        {       name: 'Raafay Asif' ,
        tagline:' Blockchain Developer',
        image: '/raf.jpg',
        alt: 'Front-End Design & Development',
        description:
          'A versatile Blockchain Developer and Full-stack Web Developer dedicated to pushing the boundaries of technology. With expertise in crafting decentralized solutions using cutting-edge blockchain technologies and seamlessly blending frontend and backend prowess',
          linkedinLink:'https://www.linkedin.com/in/raafayasif/',
          mail:'Raafayasif@outlook.com',
          
      },
      {       name: 'Aareez ',
            tagline:'Cloud & Devops Engineer',
            image: '/are.jpg',
            alt: 'Cloud & Devops Engineer',
            description:
              'A proficient DevOps engineer, optimizes workflows through advanced automation, ensuring seamless software development and deployment with a focus on collaboration and scalability',
              linkedinLink:'https://www.linkedin.com/in/aareez-asif-852677247/',
              mail:'',
    },
 
{       name: 'hamza ',
tagline:'Devops Engineer',
image: '/hamza.jpg',
alt: 'Front-End Design & Development',
description:
  'A proficient DevOps engineer, optimizes workflows through advanced automation, ensuring seamless software development and deployment with a focus on collaboration and scalability,',
  linkedinLink:'https://www.linkedin.com/in/abdul-qadir-hamza-691b32230/',
  mail:'',
},
        
    
  ];

  return (
    <div id='tea' className="pt-16 text-center pb-12 sm:my-12 sm:mx-12 bg-cart rounded-3xl">
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 bg-orange-custom text-transparent bg-clip-text  sm:pl-14 pb-4 pt-8">TEAM</h1>
         <div className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white sm:pl-14 pb-12">Meet Our Experts</div>
      <div className="flex flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-orange-custom relative group mx-auto text-center "
          >
                    <Anim_Y duration={2} positionValue={"70%"} >
          <div className="relative overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={200}
              className=" cursor-pointer px-8 mt-8 rounded-2xl  "
            />


<div className="absolute custom-lg:pr-20 custom-lg:pl-8 custom-lg1:pr-32 custom-lg1:pl-8 custom-xl:pl-8 custom-xl0:pr-44  custom-xl3:pr-0 custom-xl3:pl-0 top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 rounded-2xl">

<div className="text-white text-center p-4 ">
                <h3 className="hidden md:block   text-2xl font-extrabold mb-2 text-orange-custom">{service.name}</h3>
                <h3 className="hidden 2xl:block  text-2xl font-extrabold mb-2 text-white">{service.tagline}</h3>

                {/* Uncomment the line below to display description on hover */}
                <p className="  text-base  lg:text-base 2xl:hidden text-justify px-6 text-gray-300">{service.description}</p>
                <div className="flex justify-center mt-4">
            <a href={service.linkedinLink} target="_blank" rel="noreferrer">
              <div className="rounded-full bg-gradient-to-r from-orange-custom to-hov2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent mx-2">
                <FaLinkedinIn className="text-black scale-125" />
              </div>
            </a>
            <a href={service.mail} target="_blank" rel="noreferrer">
              <div className="rounded-full bg-gradient-to-r from-orange-custom to-hov2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-transparent mx-2">
                <AiOutlineMail className="text-black scale-125" />
              </div>
            </a>
           
          </div>
              </div>



            </div>
            

            </div>
            <h3 className="text-2xl font-extrabold my-1  text-orange-custom">{service.name}</h3>
            <div className="text-white text-base font-bold sm:text-center mb-4 ">{service.tagline}</div>
            </Anim_Y>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Team1;
