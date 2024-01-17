'use client'

import React from 'react';
import { GiFrozenBlock, GiToken } from 'react-icons/gi';
import { SiBitcoinsv, SiHelpdesk } from 'react-icons/si';
import { IoMdWallet } from 'react-icons/io';
import { FaFileContract } from 'react-icons/fa';
import { AiTwotoneAppstore } from 'react-icons/ai';
import { SiSolidity } from 'react-icons/si';
import { MdSecurity, MdDesignServices } from 'react-icons/md';
import { VscAzureDevops, VscOrganization } from 'react-icons/vsc';
import { TbWorldCode } from 'react-icons/tb';
import { AiOutlineFire } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { BsCloudCheck } from 'react-icons/bs';
import Anim_Y from './Animation/Anim_Y';
import Anim_X from './Animation/Anim_X';
const service = () => {
  return (
    <section id='Servv' className="bg-cart text-white p-6   sm:py-12 sm:px-12 py-20 rounded-3xl " >
           <Anim_Y duration={1} positionValue={'-60%'}  >

      <h1 className=" text-2xl sm:text-4xl md:text-5xl font-semibold sm:font-bold bg-cart text-orange-custom text-center  py-4 mt-20 ">
        Blockchain Solutions
      </h1>
      <p className="text-4xl sm:text-4xl md:text-6xl font-bold sm:mx-6 text-white  text-center mb-14">
      Empowering the Future 
      </p> 
      </Anim_Y>

      {/* <p className='mx-36 text-justify text-lg font-medium  p-4 mb-8 bg-gradient-to-t from-bluecs'>In today's fast-paced digital landscape, businesses need highly-available and scalable infrastructure to support their growth and innovation. Our comprehensive suite of DevOps and cloud computing services empower you to achieve your technological goals, optimize operations, and deliver exceptional value to your customers.</p> */}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {[
          {
            Service: '1',
            icon: GiFrozenBlock,
            title: 'Blockchain networks',
            description:
              'Empower your business with cutting-edge blockchain networks tailored to your needs.Web3fy offers comprehensive blockchain development services, from creating private networks for secure internal operations to implementing scalable solutions on popular public platforms.  Elevate your business with the future of decentralized technology. ',
          },
          {
            icon: SiBitcoinsv,
            title: 'Tokenization',
            description:
              'Transform your assets into digital tokens with our specialized tokenization services. Whether it`s real estate, art, or financial instruments, we provide seamless solutions for creating, managing, and trading digital tokens on blockchain networks. Unlock new possibilities in the world of decentralized finance with our tokenization expertise.',
          },
          {
            icon: IoMdWallet,
            title: 'Blockchain wallets',
            description:
              'Being well-versed in desktop and mobile wallet development, our blockchain company can deliver crypto wallets that abide by stringent security guidelines and operate swiftly. Beyond a neat interface, expect an intuitive UX with a full package of standard and custom features.',
          },
          {
            icon: FaFileContract,
            title: 'Smart contracts development ',
            description:
              'Empower your projects with our precise and secure smart contract development services. We specialize in crafting efficient blockchain-based agreements, ensuring transparency and reliability. Elevate your decentralized applications with our commitment to quality code and industry-leading security practices. ',
          },
          {
            icon: AiTwotoneAppstore,
            title: 'Decentralized apps (dApps)',
            description:
            ' Decentralized applications (DApps) transcend the constraints of traditional apps by operating on distributed blockchain networks, ensuring enhanced data and workflow security. Developed within open-source engineering communities, DApps have become pivotal in reshaping the landscape of cross-market businesses, offering a more secure and transparent alternative to centralized systems.'          },
          {
            icon: SiSolidity,
            title: 'Blockchain-based marketplaces',
            description:
              'Elevate your business with our blockchain-based marketplace solutions. Harness the power of decentralized technologies to create a secure, transparent, and efficient platform for buying and selling goods or services. Our expertise ensures seamless integration of blockchain features, providing users with trust, traceability, and decentralized transactions.',
          },
          {
            icon: MdSecurity,
            title: 'Blockchain Security',
            description:
              'Ensure the utmost security for your blockchain infrastructure with our specialized services. We offer comprehensive solutions to safeguard your decentralized networks, smart contracts, and digital assets. From conducting thorough audits to implementing robust encryption measures, we prioritize the integrity and confidentiality of your blockchain ecosystem. Stay ahead of evolving cyber threats and build trust among your users with our expert blockchain security services.',
          },
          {
            icon: VscOrganization,
            title: 'DAOs',
            description:
              'Empower your organization`s decision-making process with our DAO services. We specialize in designing and implementing DAO structures that enable transparent, decentralized governance. From smart contract development to DAO security audits, we ensure a robust foundation for your decentralized community. Elevate your governance model with our tailored solutions for seamless DAO integration and management.',
          },
          {
            icon: GiToken,
            title: 'NFT Development ',
            description:
              'Empower your brand with our NFT development expertise. We specialize in creating and deploying secure, standards-compliant smart contracts for NFTs. From tokenizing digital assets to building custom NFT marketplaces, we offer end-to-end solutions. Join the NFT revolution and turn your digital content into valuable, tradable assets on the blockchain. Explore limitless possibilities with our streamlined NFT development services.',
          },
          {
            icon: SiHelpdesk,
            title: 'Blockchain Consulting',
            description:
              ' Choose our blockchain consulting services for a precise analysis of your business objectives, organizational readiness, and the forecasted impact on your operations. We specialize in driving enterprise-class transformation through the strategic implementation of blockchain technology, offering a perfect blend of capabilities to tackle complexities and optimize your infrastructure. Trust us to align with your vision, providing a seamless pathway to innovation and transformative success.',
          },
        ].map((service, index) => (          
           <Anim_X duration={2} positionValue={'40%'} key={index} >

          <div key={index} className="text-orange-custom hover:text-black p-6 rounded shadow-md border border-gray-600 hover:bg-black hover:from-orange-custom hover:to-lim   hover:border-orange-custom bg-gradient-to-br from-lim ">
          <service.icon className=" " style={{ width: '70px', height: '70px' }} />
          <h3 className="text-2xl text-white font-extrabold my-4">{service.title}</h3>
          <p className="mb-4 text-white">{service.description}</p>
        </div>
        </Anim_X>

        ))}
      </div>
      <Anim_Y duration={1} positionValue={'-70%'}  >

      <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold sm:font-bold  bg-cart text-orange-custom text-center  py-4 mt-20 ">
        Web Solutions
      </h1>
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white  text-center mb-14">
      Crafting Digital Excellence.
      </p> 
      </Anim_Y>

      {/* <p className='mx-36 text-justify text-lg font-medium  p-4 mb-8 bg-gradient-to-t from-bluecs'>In today's fast-paced digital landscape, businesses need highly-available and scalable infrastructure to support their growth and innovation. Our comprehensive suite of DevOps and cloud computing services empower you to achieve your technological goals, optimize operations, and deliver exceptional value to your customers.</p> */}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          {
            icon: MdDesignServices,
            title: 'Front-End Design & Development',
            description:
              ' Embark on a visually stunning digital journey with our Front-End Design & Development services. Our expert team specializes in creating captivating user interfaces that seamlessly blend aesthetics with functionality. From crafting pixel-perfect designs to implementing responsive and intuitive user experiences, we ensure your website or application stands out. Utilizing the latest technologies and design trends, we elevate your brand\'s online presence, providing users with an engaging and seamless interaction. Let us transform your vision into a visually striking reality, ensuring a delightful and memorable experience for your audience.',
          },
          {
            icon: TbWorldCode,
            title: 'Back-End Web Development',
            description:
              'Empower your digital infrastructure with our Back-End Development services, where our skilled team meticulously architects and implements robust server-side solutions. Ensuring seamless functionality and data management, we prioritize efficiency and reliability in designing scalable databases, optimizing server performance, and managing security protocols and server logic. Partner with us to build a resilient and high-performing back end, supporting your front-end innovation and delivering a powerful digital experience. Trust us to transform your technological vision into a seamlessly integrated reality.',
          },
          {
            icon: AiOutlineFire,
            title: 'Search Engine Optimization (SEO)',
            description:
              ' Enhance your online presence with our SEO services, a strategic approach to elevate your website\'s visibility and attract targeted traffic. Through meticulous keyword analysis and content optimization, we optimize your site to align with search engine algorithms. Our focus on on-page and off-page SEO, coupled with continuous refinement, aims to boost your website\'s search engine rankings. From improving page speed to building authoritative backlinks, our tailored strategies drive organic traffic and increase conversions. Partner with us to navigate the competitive digital landscape and unleash the full potential of your online visibility.',
          },
          {
            icon: AiOutlineFire,
            title: 'API Development',
            description:
              'Unlock seamless connectivity and innovation with our API Development services. Our expert team designs and implements robust Application Programming Interfaces (APIs) tailored to your specific needs. From creating APIs that facilitate data exchange to ensuring seamless integration across diverse platforms, we pave the way for efficient and scalable solutions. Whether it\'s enhancing communication between applications or enabling third-party integrations, our API development expertise fosters agility and innovation. Partner with us to harness the power of well-crafted APIs.',
          },  {
            icon: AiOutlineFire,
            title: 'E-commerce Development',
            description:
              ' Transform your business into a thriving online venture with our E-commerce Development services. Our skilled team creates customized, user-friendly online stores tailored to your brand\'s unique requirements. From secure payment gateways to intuitive product displays, we ensure a seamless and engaging shopping experience for your customers. Leveraging cutting-edge technology, we optimize e-commerce platforms for performance and scalability, empowering your business to handle growing demands. Partner with us to unlock the full potential of e-commerce, driving sales and establishing a dynamic online presence for your brand.',
          },

          {
            icon: BiSupport,
            title: 'Support & Maintenance',
            description:
              'Ensure the longevity and optimal performance of your website with our Web Support and Maintenance services. Our dedicated team stands ready to address updates, troubleshoot issues, and implement security patches, ensuring your site remains current and secure. From content updates to server maintenance, we provide comprehensive support to keep your web presence seamless. Regular monitoring and proactive measures safeguard against potential issues, guaranteeing a reliable and uninterrupted user experience. Partner with us for reliable and proactive web support, allowing you to focus on your business while we take care of the technical details.',
          },
        ].map((service, index) => (
          <Anim_X duration={2} positionValue={'40%'} key={index} >

          <div key={index} className="text-orange-custom hover:text-black p-6 rounded shadow-md border border-gray-600 hover:bg-black hover:from-orange-custom hover:to-lim   hover:border-orange-custom bg-gradient-to-br from-lim ">
          <service.icon className=" " style={{ width: '70px', height: '70px' }} />
          <h3 className="text-2xl text-white font-extrabold my-4">{service.title}</h3>
          <p className="mb-4 text-white">{service.description}</p>
        </div>
                </Anim_X>

        ))}
      </div>
      <Anim_Y duration={1} positionValue={'-60%'}  >

      <h1 className=" text-2xl sm:text-4xl md:text-5xl font-semibold sm:font-bold  bg-cart text-orange-custom text-center sm:pl-14 py-4 mt-20 ">
        Cloud  Services
      </h1>
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white  text-center mb-14">
      Empower Your Cloud Journey
      </p> 
      </Anim_Y>

      {/* <p className='mx-36 text-justify text-lg font-medium  p-4 mb-8 bg-gradient-to-t from-bluecs'>In today's fast-paced digital landscape, businesses need highly-available and scalable infrastructure to support their growth and innovation. Our comprehensive suite of DevOps and cloud computing services empower you to achieve your technological goals, optimize operations, and deliver exceptional value to your customers.</p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          {
            icon: BsCloudCheck,
            title: 'Infrastructure Solutions',
            description: ' We specialize in designing, implementing, and managing tailored cloud (AWS, GCP, Azure) and on-premises infrastructure. Our expertise includes IaC for automated provisioning with tools like Terraform, CloudFormation, or Chef. We also utilize configuration management tools (Ansible, Chef, Puppet) for consistent server, application, and network configurations, enhancing efficiency and maintainability.'
        
           
          },
          {
            icon: VscAzureDevops,
            title: 'Application Development and Deployment',
            description: ' Our expertise includes Docker, Kubernetes, and OpenShift for lightweight, scalable application deployment. We set up CI/CD pipelines to automate development and delivery, ensuring swift and reliable application releases. Additionally, we specialize in cloud-native application development, utilizing containers, microservices, and serverless technologies for efficient and scalable solutions.',
          },
          {
            icon: MdSecurity,
            title: 'Monitoring, Security, and Optimization',
            description: 'We offer centralized logging and monitoring for real-time event tracking and performance analysis. Our cloud-based security solutions, featuring penetration testing and incident response services, protect against cyber threats. With expertise in cloud cost management, we ensure optimal spending through usage monitoring and allocation tools. Our commitment to continuous improvement includes staying current with evolving technologies for enhanced system resilience.',
          },
          {
            icon: BsCloudCheck,
            title: 'Additional services',
            description: 'We specialize in transforming legacy applications for the cloud, optimizing performance, scalability, and security. Our expertise spans DevOps automation, Cloud IAM for centralized access control, secure cloud networking, data analytics for business insights, and resilient disaster recovery plans. Additionally, we excel in setting up and managing secure VPN connections for remote users and sites, following stringent security protocols.'
        
           
          },
          {
            icon: VscAzureDevops,
            title: 'High Availability',
            description: 'High availability cloud services guarantee constant access to resources through redundancy, load balancing, fault tolerance, and geographic distribution. They employ automated monitoring, scalability, data backups, and robust security, adhering to service level agreements. This ensures minimal downtime and optimal performance, with ongoing improvements to adapt to changing demands and threats.',
          },
          {
            icon: BsCloudCheck,
            title: 'Disaster Recovery',
            description: `
            We ensures the protection and rapid restoration of an organization's IT infrastructure and data in the event of disasters. It includes automated backups, defined recovery objectives, quick recovery processes, regular testing, and scalable, cloud-based solutions. With automated monitoring and security measures, DR services aim to minimize downtime and maintain business continuity, offering 24/7 support for swift recovery from unforeseen disruptions.
          `,
          },
         
        ].map((service, index) => (
          <Anim_X duration={2} positionValue={'40%'} key={index} >

          <div key={index} className="text-orange-custom hover:text-black p-6 rounded shadow-md border border-gray-600 hover:bg-black hover:from-orange-custom hover:to-lim   hover:border-orange-custom bg-gradient-to-br from-lim ">
          <service.icon className=" " style={{ width: '70px', height: '70px' }} />
          <h3 className="text-2xl text-white font-extrabold my-4">{service.title}</h3>
          <p className="mb-4 text-white" dangerouslySetInnerHTML={{ __html: service.description }}></p>
        </div>
                </Anim_X>

        ))}
      </div>
      <Anim_Y duration={1} positionValue={'-70%'}  >

<h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold sm:font-bold  bg-cart text-orange-custom text-center  py-4 mt-20 ">
Graphic Design Services
</h1>
<p className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 text-white  text-center mb-14">
Crafting Digital Excellence.
</p> 
</Anim_Y>

{/* <p className='mx-36 text-justify text-lg font-medium  p-4 mb-8 bg-gradient-to-t from-bluecs'>In today's fast-paced digital landscape, businesses need highly-available and scalable infrastructure to support their growth and innovation. Our comprehensive suite of DevOps and cloud computing services empower you to achieve your technological goals, optimize operations, and deliver exceptional value to your customers.</p> */}


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
  {[
    {
      icon: MdDesignServices,
      title: 'Logo & Branding',
      description:
        'Embark on a transformative journey with our Logo & Branding services, unlocking the full potential of your brand identity. Our dedicated team crafts a comprehensive brand image that resonates deeply, capturing the essence of your uniqueness. Through thoughtful design and strategic branding, we ensure every visual element contributes to a cohesive and memorable narrative. Elevate your brand experience with us, setting yourself apart in the minds of your audience. Let us craft a lasting impression that speaks volumes about your identity.',
    },
    {
      icon: TbWorldCode,
      title: 'Web Design Services',
      description:
        'Embark on a digital transformation with our Web Design Services, where creativity converges seamlessly with functionality to craft engaging and user-centric websites. Whether you\'re establishing an online presence, optimizing for e-commerce, or refreshing an existing site, our skilled team ensures visually stunning designs, responsive layouts, and intuitive user experiences. From custom design solutions to SEO-friendly practices, we tailor each project to elevate your brand\'s online identity, fostering a memorable and impactful web presence.',
    },
    {
      icon: AiOutlineFire,
      title: '3D Design Services',
      description:
        'Elevate your brand with our 3D Design Services, where innovation meets visual excellence. We bring concepts to life with precision and creativity, utilizing cutting-edge technology for stunning three-dimensional visuals. From product prototypes to architectural renderings, our skilled team transforms ideas into immersive experiences. Captivate audiences with our 3D solutions, whether enhancing product presentations or crafting virtual simulations. Step into the future of design, where form, function, and boundless creativity converge seamlessly.',
    },
    {
      icon: BiSupport,
      title: 'Character Design Services',
      description:
        ' Embark on a creative journey with our Character Design Services, where imagination meets expertise to craft unique, visually captivating characters. Specializing in animation, gaming, branding, and storytelling, our skilled team collaboratively conceptualizes and refines characters that exceed your vision. From whimsical mascots to intricate fantasy beings, our service aims to create impactful figures, leaving a lasting impression on your audience. Elevate your projects with characters that tell a story, evoke emotions, and stand out visually.',
    },
  ].map((service, index) => (
    <Anim_X duration={2} positionValue={'40%'} key={index} >

    <div key={index} className="text-orange-custom hover:text-black p-6 rounded shadow-md border border-gray-600 hover:bg-black hover:from-orange-custom hover:to-lim   hover:border-orange-custom bg-gradient-to-br from-lim " >
    <service.icon className=" " style={{ width: '70px', height: '70px' }} />
    <h3 className="text-2xl text-white font-extrabold my-4">{service.title}</h3>
    <p className="mb-4 text-white">{service.description}</p>
  </div>
          </Anim_X>

  ))}
</div>
    </section>
  );
};

export default service;
