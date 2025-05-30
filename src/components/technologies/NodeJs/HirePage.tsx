import React from 'react'
import OutsourceButton from './OutsourceButton';

const HirePage = () =>{
   const stats = [
       { number: "170+", text: "experts" },
       { number: "10+", text: "years of experience" },
       { number: "200+", text: "satisfied clients" },
       { number: "230+", text: "projects" }
     ];
   
     // for carousel section
     const images = [
       { src: '/src/assets/images/outsourcepage/partner1.webp', alt: "ISO 27001" },
       { src: '/src/assets/images/outsourcepage/partner2.webp', alt: "Microsoft Gold Partner" },
       { src: '/src/assets/images/outsourcepage/partner3.webp', alt: "Google Cloud Partner" },
       { src: '/src/assets/images/outsourcepage/partner4.webp', alt: "ISTQB Silver Partner" },
       { src: '/src/assets/images/outsourcepage/partner5.webp', alt: "Clutch Firms That Deliver" },
       { src: '/src/assets/images/outsourcepage/partner6.webp', alt: "Lviv IT Cluster" }
     ];
   
     return (
       <section className="h-full mt-4 bg-cover bg-center bg-no-repeat bg-[url('https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2020/03/Frame-8644-7.jpg.webp')] xl:bg-[url('/src/assets/images/outsource-bg.jpg')]">
         <div className="max-w-full overflow-hidden mt-27"> {/* Prevent overflow */}
           <div className="text-left px-4 sm:px-8 md:px-20">
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white pt-14 mt-4">
             Hire a Dedicated Node.js Developer
             </h1>
   
             <p className="text-white mb-4 text-lg sm:text-xl md:text-2xl pt-5 pr-0 md:pr-6 leading-7 md:leading-9">
             Hire Node.js developers with Inoxoft to access top-notch services,<br/>
             including software building, updating, and scaling, all while <br/>
             enjoying quicker hiring and considerable cost savings.
             </p>
   
             <div className='pt-4'>
               <OutsourceButton />
             </div>
           </div>
   
           {/* Banner Code  */}
           <div className="mt-8 sm:mt-12 md:mt-28 px-4 sm:px-8 md:px-20">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
               {stats.map((item, index) => (
                 <div
                   key={index}
                   className="bg-opacity-50 border border-white p-2 md:p-4 rounded-lg"
                 >
                   <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-left">{item.number}</div>
                   <div className="text-xs sm:text-sm md:text-2xl pt-1 md:pt-2 text-white text-left">{item.text}</div>
                 </div>
               ))}
             </div>
           </div>
   
           {/* Carousel Section */}
           <div className="container mx-auto py-6 md:py-10 px-4 sm:px-8 md:px-14 mt-2 md:mt-4">
             <div className="flex flex-wrap justify-center">
               {images.map((image, index) => (
                 <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-1 md:p-2"> 
                   <img
                     src={image.src}
                     alt={image.alt}
                     className="object-contain w-full h-16 sm:h-20 md:h-32 lg:h-36"
                   />
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>
     );
}

export default HirePage