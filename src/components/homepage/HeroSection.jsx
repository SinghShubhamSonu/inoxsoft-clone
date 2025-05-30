// // // src/components/HomePage/HeroSection.jsx
// // import React from 'react';

// // function HeroSection() {
// //   return (
// //     <div className="bg-[#003047] text-white py-24 relative overflow-hidden">
// //       <div className="container mx-auto px-4">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //           {/* Left Column: Text Content */}
// //           <div>
// //             <h1 className="text-4xl font-bold mb-4">CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY</h1>
// //             <p className="text-lg mb-6">We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.</p>
// //             <button className="bg-white text-black rounded-full py-3 px-8 font-semibold">BOOK A CALL &gt;</button>
// //           </div>

// //           {/* Right Column: Geometric Design */}
// //           <div className="flex justify-center items-center relative">
// //             {/* <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor" className="text-[#003DA5] opacity-50">
// //               <path d="M47.519 50.321c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.617 2.122-9.503 7.466-9.503 13.433v0c0 5.967 3.886 11.312 9.503 13.433l29.998 11.334c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.617 2.122-9.503 7.466-9.503 13.433v0c0 5.967 3.886 11.312 9.503 13.433l61.481-23.234c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.617 2.122-9.503 7.466-9.503 13.433v0c0 5.967 3.886 11.312 9.503 13.433l29.998 11.334c5.617 2.122 9.503 7.466 9.503 13.433v0c0 5.967-3.886 11.312-9.503 13.433l92.964-35.067c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.617 2.122-9.503 7.466-9.503 13.433v0c0 5.967 3.886 11.312 9.503 13.433l29.998 11.334c5.617 2.122 9.503 7.466 9.503 13.433v0c0 5.967-3.886 11.312-9.503 13.433l29.998 11.334c5.617 2.122 9.503 7.466 9.503 13.433v-68.776c0-5.967-3.886-11.312-9.503-13.433l-29.998-11.334c-5.617-2.122-9.503-7.466-9.503-13.433v-25.179c0-5.967 3.886-11.312 9.503-13.433l29.998-11.334c5.617-2.122 9.503-7.466 9.503-13.433v0c0-5.967-3.886-11.312-9.503-13.433l-61.481 23.234c-5.617-2.122-9.503-7.466-9.503-13.433v-25.179c0-5.967 3.886-11.312 9.503-13.433l29.998-11.334c5.617-2.122 9.503-7.466 9.503-13.433v0c0-5.967-3.886-11.312-9.503-13.433l-29.998-11.334c-5.617-2.122-9.503-7.466-9.503-13.433v0c0-5.967 3.886-11.312 9.503-13.433l-92.964 35.067c-5.617-2.122-9.503-7.466-9.503-13.433v-25.179c0-5.967 3.886-11.312 9.503-13.433l29.998-11.334c5.617-2.122 9.503-7.466 9.503-13.433v0c0-5.967-3.886-11.312 9.503-13.433l-29.998-11.334c-5.617-2.122-9.503-7.466-9.503-13.433v0c0-5.967 3.886-11.312 9.503-13.433l-29.998-11.334c-5.617-2.122-9.503-7.466-9.503-13.433" />
// //             </svg> */}
// //           </div>

// //             {/* Logo list (place below geometric design) */}
// //             <div className="absolute bottom-0 left-0 w-full py-4">
// //               <div className="container mx-auto px-4 flex justify-between items-center">
// //                 {/* Add partner logos here */}
// //                 <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp" alt="ISO 27001" className="h-20" />
// //                 <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp" alt="Microsoft Gold Partner" className="h-20" />
// //                 <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp" alt="Google Cloud Partner" className="h-20" />
// //                 <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp" alt="ISTQB Silver Partner" className="h-20" />
// //                 <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp" alt="Clutch Firms That Deliver" className="h-20" />
// //                 <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp" alt="Lviv IT Cluster" className="h-20" />
// //               </div>
// //             </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HeroSection;
// // src/components/HomePage/HeroSection.jsx
// // import React from 'react';

// // function HeroSection() {
// //     return (
// //         <div className="bg-[#003047] text-white relative overflow-hidden min-h-[700px] mt-[109px]"> {/* Set minimum height using Tailwind class */}
// //             <div className="container mx-auto px-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
// //                     {/* Left Column: Text Content */}
// //                     <div>
// //                         <h1 className="text-4xl font-bold mb-4">CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY</h1>
// //                         <p className="text-lg mb-6">We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.</p>
// //                         <button className="bg-white text-black rounded-full py-3 px-8 font-semibold">BOOK A CALL &gt;</button>
// //                     </div>

// //                     {/* Right Column: Geometric Design */}
// //                     <div className="flex justify-center items-center relative">
// //                         {/* <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor" className="text-[#003DA5] opacity-50">
// //                             <path d="M47.519 50.321c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.617 2.122-9.503 7.466-9.503 13.433v0c0 5.967 3.886 11.312 9.503 13.433l29.998 11.334c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.617 2.122-9.503 7.466-9.503 13.433v0c0 5.967 3.886 11.312 9.503 13.433l61.481-23.234c5.617 2.122 9.503 7.466 9.503 13.433v25.179c0 5.967-3.886 11.312-9.503 13.433l-29.998 11.334c-5.
// //                             // SVG path continues...
// //                         </svg> */}
// //                     </div>

// //                     {/* Partner Logos: Implementing the "owl-carousel" style */}
// //                     <div className="absolute bottom-0 left-0 w-full py-4 flex justify-around items-center">
// //                         {/* Add partner logos here */}
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp" alt="ISO 27001" className="h-20" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp" alt="Microsoft Gold Partner" className="h-20" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp" alt="Google Cloud Partner" className="h-20" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp" alt="ISTQB Silver Partner" className="h-20" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp" alt="Clutch Firms That Deliver" className="h-20" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp" alt="Lviv IT Cluster" className="h-20" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default HeroSection;
// // src/components/HomePage/HeroSection.jsx
// // import React from 'react';
// // import SymbolBanner from '../../assets/images/symbol_banner.jpg'; // Adjust the path as necessary

// // function HeroSection() {
// //     return (
// //         <div className="relative text-white overflow-hidden min-h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${SymbolBanner})` }}>
// //             <div className="container mx-auto px-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
// //                     {/* Left Column: Text Content */}
// //                     <div>
// //                         <h1 className="text-4xl font-bold mb-4">CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY</h1>
// //                         <p className="text-lg mb-6">We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.</p>
// //                         <button className="bg-white text-black rounded-full py-3 px-8 font-semibold">BOOK A CALL &gt;</button>
// //                     </div>

// //                     {/* Right Column: Placeholder for additional content */}
// //                     <div className="flex justify-center items-center relative">
// //                         {/* You can add any additional content here if needed */}
// //                     </div>

// //                     {/* Partner Logos: Implementing the "owl-carousel" style */}
// //                     <div className="absolute bottom-0 left-0 w-full py-4 flex justify-around items-center">
// //                         {/* Add partner logos here */}
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp" alt="ISO 27001" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp" alt="Microsoft Gold Partner" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp" alt="Google Cloud Partner" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp" alt="ISTQB Silver Partner" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp" alt="Clutch Firms That Deliver" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp" alt="Lviv IT Cluster" className="h-16" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default HeroSection;
// // src/components/HomePage/HeroSection.jsx
// // import React from 'react';
// // import SymbolBanner from '../../assets/images/symbol_banner.jpg'; // Adjust the path as necessary

// // function HeroSection() {
// //     return (
// //         <div 
// //             className="relative text-white overflow-hidden min-h-[650px] bg-cover bg-center mt-[108px]" // Added margin-top to push it below the header
// //             style={{ backgroundImage: `url(${SymbolBanner})` }} // Using inline style for background image
// //         >
// //             <div className="container mx-auto px-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-28">
// //                     {/* Left Column: Text Content */}
// //                     <div>
// //                         <h1 className="text-4xl font-bold mb-4">CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY</h1>
// //                         <p className="text-lg mb-6">We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.</p>
// //                         <button className="bg-white text-black rounded-full py-3 px-8 font-semibold">BOOK A CALL &gt;</button>
// //                     </div>

// //                     {/* Right Column: Placeholder for additional content */}
// //                     <div className="flex justify-center items-center relative">
// //                         {/* You can add any additional content here if needed */}
// //                     </div>

// //                     {/* Partner Logos: Implementing the "owl-carousel" style */}
// //                     <div className="absolute bottom-0 left-0 w-full py-4 flex justify-around items-center">
// //                         {/* Add partner logos here */}
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp" alt="ISO 27001" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp" alt="Microsoft Gold Partner" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp" alt="Google Cloud Partner" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp" alt="ISTQB Silver Partner" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp" alt="Clutch Firms That Deliver" className="h-16" />
// //                         <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp" alt="Lviv IT Cluster" className="h-16" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default HeroSection;
// // src/components/HomePage/HeroSection.jsx
// // import React from 'react';

// // function HeroSection() {
// //     return (
// //         <div
// //             className="relative text-white overflow-hidden min-h-[620px] bg-cover bg-center bg-[#003047] pt-[108px]"
// //         >
// //             {/* Background Shape */}
// //             <div className="absolute inset-0 bg-[url('https://inoxoft.com/wp-content/themes/inoxoft/images/symbol_banner.webp')] bg-no-repeat bg-right-top opacity-10"></div>

// //             <div className="container mx-auto px-4 relative z-10">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
// //                     {/* Left Column: Text Content */}
// //                     <div>
// //                         <h1 className="text-4xl font-bold mb-4">CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY</h1>
// //                         <p className="text-lg mb-6">
// //                             We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.
// //                         </p>
// //                         <button className="bg-white text-black rounded-full py-3 px-8 font-semibold">
// //                             BOOK A CALL &gt;
// //                         </button>
// //                     </div>

// //                     {/* Right Column: Placeholder for additional content */}
// //                     <div></div>
// //                 </div>

// //                 {/* Partner Logos */}
// //                 <div className="flex justify-around items-center mt-12">
// //                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp" alt="ISO 27001" className="h-12" />
// //                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp" alt="Microsoft Gold Partner" className="h-12" />
// //                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp" alt="Google Cloud Partner" className="h-12" />
// //                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp" alt="ISTQB Silver Partner" className="h-12" />
// //                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp" alt="Clutch Firms That Deliver" className="h-12" />
// //                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp" alt="Lviv IT Cluster" className="h-12" />
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default HeroSection;
// // src/components/HomePage/HeroSection.jsx
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap'; // Ensure GSAP is installed: npm install gsap
// import SymbolBanner from '../../assets/images/symbol_banner.jpg'; // Adjust the path as necessary


// function HeroSection() {

//     const bannerRef = useRef(null);
//     const headingRef = useRef(null);
//     const paragraphRef = useRef(null);
//     const buttonRef = useRef(null);
//     const logoRef = useRef(null);
//     const pseudoElementRef = useRef(null);


//     const handleMouseEnter = () => {
//         gsap.to(buttonRef.current, {
//             duration: 0.2,
//             ease: "power1.out"
//         });

//         gsap.to(pseudoElementRef.current, {
//             width: '500px', // Animate the width
//             duration: 1,     // Match the transition duration
//             ease: "power2.out"
//         });
//     };

//     const handleMouseLeave = () => {
//         gsap.to(buttonRef.current, {
//             duration: 0.2,
//             ease: "power1.out"
//         });

//         gsap.to(pseudoElementRef.current, {
//             width: '0px',    // Animate the width back to 0
//             duration: 1,     // Match the transition duration
//             ease: "power2.out"
//         });
//     };

//     useEffect(() => {
//         // GSAP Animations
//         gsap.fromTo(
//             bannerRef.current,
//             { opacity: 0, y: 50 },
//             { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//         );

//         gsap.fromTo(
//             headingRef.current,
//             { opacity: 0, y: 30 },
//             { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
//         );

//         gsap.fromTo(
//             paragraphRef.current,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
//         );

//         // gsap.fromTo(
//         //     buttonRef.current,
//         //     { opacity: 0, scale: 0.8 },
//         //     { opacity: 1, scale: 1, duration: 0.6, delay: 0.7, ease: "power3.out" }
//         // );

//         gsap.fromTo(
//           logoRef.current,
//           { opacity: 0, y: 20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             delay: 0.5,
//             ease: "power3.out",
//             stagger: 0.2, // Stagger the logo animations
//           }
//         );
//         // Initialize Owl Carousel after component mounts
//         // $(document).ready(function(){
//         //     $(".owl-carousel").owlCarousel({
//         //         loop:true,
//         //         margin:10,
//         //         nav:true,
//         //         responsive:{
//         //             0:{
//         //                 items:1
//         //             },
//         //             600:{
//         //                 items:2
//         //             },
//         //             1000:{
//         //                 items:3
//         //             }
//         //         }
//         //     });
//         // });

//     }, []);

//     return (
//         <>
//         <div
//             ref={bannerRef}
//             className="relative text-white overflow-hidden min-h-[750px] mt-24 bg-cover bg-center pt-[108px]"
//             style={{ backgroundImage: `url(${SymbolBanner})` }}
//         >
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-14">
//                     {/* Left Column: Text Content */}
//                     <div>
//                         <h1 ref={headingRef} className="text-4xl font-bold mb-4">
//                             CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY
//                         </h1>
//                         <p ref={paragraphRef} className="text-lg mb-6">
//                             We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.
//                         </p>
//                         <div className="relative inline-block">
//                             <button
//                                 ref={buttonRef}
//                                 className="relative inline-flex items-center px-6 py-3 text-black hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
//                                 onMouseEnter={handleMouseEnter}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 <span className='relative z-10 hover:text-white'>
//                                     BOOK A CALL &gt;
//                                 </span>
//                                 <span
//                                     ref={pseudoElementRef}
//                                     className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
//                                 ></span>
//                             </button>
//                         </div>

//                     </div>

//                     {/* Right Column: Placeholder for additional content */}
//                     {/* <div className="flex justify-center items-center relative"> */}
//                         {/* You can add any additional content here if needed */}
//                     {/* </div> */}
//                 </div>

//                 {/* Partner Logos: Implementing the "owl-carousel" style */}
//                 <div ref={logoRef} className="absolute bottom-0 left-0 w-full py-4 flex justify-around items-center">
//                     {/* Add partner logos here */}
//                     <img
//                         src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp"
//                         alt="ISO 27001"
//                         className="h-20"
//                     />
//                     <img
//                         src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp"
//                         alt="Microsoft Gold Partner"
//                         className="h-20"
//                     />
//                     <img
//                         src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp"
//                         alt="Google Cloud Partner"
//                         className="h-20"
//                     />
//                     <img
//                         src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp"
//                         alt="ISTQB Silver Partner"
//                         className="h-20"
//                     />
//                     <img
//                         src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp"
//                         alt="Clutch Firms That Deliver"
//                         className="h-20"
//                     />
//                     <img
//                         src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp"
//                         alt="Lviv IT Cluster"
//                         className="h-20"
//                     />
//                 </div>
//             </div>
//         </div>

//         {/* Additional Section Below Hero Section */}
//         <section className="bg-gray-50 py-12">
//               <div className="container mx-auto px-20">
//                   <div className="flex justify-between items-start text-gray-700">


//                       {/* Product Development */}
//                       <div className="w-1/4 pr-4 relative">

//                           <h3 className="text-xl font-semibold mb-2">Product Development</h3>
//                           <p className="text-sm mb-4">Want to develop a new product but have no experience in software development? Provide us a need, vision, and get a comprehensive business solution.</p>
//                           <div className="flex justify-end">
//                               <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5" />
//                           </div>
//                           {/* Vertical Separator */}
//                           <div className="absolute top-0 bottom-0 right-0 w-px mr-3  bg-black"></div>
//                       </div>

//                       {/* Team Extension */}
//                       <div className="w-1/4 pr-4 relative">
//                           <h3 className="text-xl font-semibold mb-2">Team Extension</h3>
//                           <p className="text-sm mb-4">Already defined requirements, budget, and time frames? Hire our experts and we’ll realize your vision planned in advance.</p>
//                           <div className="flex justify-end">
//                               <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5" />
//                           </div>
//                           {/* Vertical Separator */}
//                           <div className="absolute top-0 bottom-0 right-0 w-px mr-3  bg-black"></div>
//                       </div>

//                       {/* Dedicated Team */}
//                       <div className="w-1/4 pr-4 relative">
//                           <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
//                           <p className="text-sm mb-4">Stay engaged in the development of your product; create, view, and deliver side-by-side with a team of experienced people.</p>
//                           <div className="flex justify-end">
//                               <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5" />
//                           </div>
//                           {/* Vertical Separator */}
//                           <div className="absolute top-0 bottom-0 right-0 w-px mr-3  bg-black"></div>
//                       </div>

//                       {/* AI Development */}
//                       <div className="w-1/4 pr-4 relative">
//                           <h3 className="text-xl font-semibold mb-2">AI Development</h3>
//                           <p className="text-sm mb-4">Rely on our AI expertise to unlock the untapped potential of vast data amounts and achieve tangible results.</p>
//                           <div className="flex justify-end">
//                               <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5" />
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </section>
//      </>
//     );
// }

// export default HeroSection;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Ensure GSAP is installed: npm install gsap
import SymbolBanner from '../../assets/images/symbol_banner.webp'; // Adjust the path as necessary

function HeroSection() {
    const bannerRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const logoRef = useRef(null);
    const pseudoElementRef = useRef(null);
    const cursorRef = useRef(null);
    const cursorOuterRef = useRef(null);

    // Button hover animation
    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            duration: 0.2,
            ease: "power1.out"
        });

        gsap.to(pseudoElementRef.current, {
            width: '500px',
            duration: 1,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            duration: 0.2,
            ease: "power1.out"
        });

        gsap.to(pseudoElementRef.current, {
            width: '0px',
            duration: 1,
            ease: "power2.out"
        });
    };

    useEffect(() => {
        // GSAP Animations for content
        gsap.fromTo(
            bannerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
        );

        gsap.fromTo(
            logoRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
                stagger: 0.2,
            }
        );

        // Set initial position and properties for cursors
        gsap.set([ cursorRef.current,cursorOuterRef.current], {
            xPercent: -50,
            yPercent: -50,
            opacity: 0
        });

        // Mouse move handler function for custom cursor
        const handleMouseMove = (e) => {
            if ( !cursorRef.current|| !cursorOuterRef.current || !bannerRef.current) return;
            
            // Get the hero section's bounds
            const heroRect = bannerRef.current.getBoundingClientRect();
            
            // Check if mouse is over the hero section
            const isOverHero = 
                e.clientX >= heroRect.left &&
                e.clientX <= heroRect.right &&
                e.clientY >= heroRect.top &&
                e.clientY <= heroRect.bottom;
                
            // Check if mouse is over the button
            const isOverButton = buttonRef.current && 
                buttonRef.current.contains(document.elementFromPoint(e.clientX, e.clientY));
            
            // Only show and move the cursor if over hero section but not over button
            if (isOverHero && !isOverButton) {
                // Main cursor and outer cursor move together with no delay
                gsap.to([ cursorRef.current,cursorOuterRef.current], {
                    x: e.clientX,
                    y: e.clientY,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                // Hide cursors when outside hero section or over button
                gsap.to([ cursorRef.current,cursorOuterRef.current], {
                    opacity: 0,
                    duration: 0.2
                });
            }
        };
        
        // Add mousemove event listener
        document.addEventListener("mousemove", handleMouseMove);
        
        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Custom cursor elements */}
            <div 
                ref={cursorRef} 
                className="cursor"
                style={{ 
                    width: '10px',
                    height: '10px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    backgroundColor: '#1a5c8d',
                    pointerEvents: 'none',
                    zIndex: 1000,
                    opacity: 0,
                    mixBlendMode: 'difference',
                    filter: 'blur(35px)',
                }}
            ></div>
            <div 
                ref={cursorOuterRef} 
                className="cursor-outer"
                style={{ 
                    width: '50px',
                    height: '50px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    backgroundColor: '#5ac8ff', // Lighter shade of blue
                    pointerEvents: 'none',
                    zIndex: 999,
                    opacity: 0,
                    mixBlendMode: 'difference',
                    filter: 'blur(35px)',
                }}
            ></div>
            
            <div
                ref={bannerRef}
                className="relative text-white overflow-hidden min-h-[750px] mt-24 bg-cover bg-center pt-[108px]"
                style={{ backgroundImage: `url(${SymbolBanner})` }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-14">
                        {/* Left Column: Text Content */}
                        <div>
                            <h1 ref={headingRef} className="text-4xl font-bold mb-4">
                                CUSTOM SOFTWARE <br /> DEVELOPMENT COMPANY
                            </h1>
                            <p ref={paragraphRef} className="text-lg mb-6">
                                We create cutting-edge digital solutions that empower startups, and small to medium-sized companies to achieve their business goals.
                            </p>
                            <div className="relative inline-block">
                                <button
                                    ref={buttonRef}
                                    className="relative inline-flex items-center px-6 py-3 text-black hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className='relative z-10 hover:text-white'>
                                        BOOK A CALL &gt;
                                    </span>
                                    <span
                                        ref={pseudoElementRef}
                                        className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
                                    ></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Partner Logos */}
                    <div ref={logoRef} className="absolute bottom-0 left-0 w-full py-4 flex justify-around items-center">
                        <img
                            src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp"
                            alt="ISO 27001"
                            className="h-20"
                        />
                        <img
                            src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp"
                            alt="Microsoft Gold Partner"
                            className="h-20"
                        />
                        <img
                            src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp"
                            alt="Google Cloud Partner"
                            className="h-20"
                        />
                        <img
                            src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp"
                            alt="ISTQB Silver Partner"
                            className="h-20"
                        />
                        <img
                            src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp"
                            alt="Clutch Firms That Deliver"
                            className="h-20"
                        />
                        <img
                            src="https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp"
                            alt="Lviv IT Cluster"
                            className="h-20"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;



//    {/* Additional Section Below Hero Section */}
//    <section className="bg-gray-50 py-24">
//    <div className="container mx-auto px-10">
       
//        <div className="flex justify-between items-start text-gray-700">


//            {/* Product Development */}
           
//            <div className="w-1/4 mx-1 pl-4 pr-7 relative">
//            <div className="absolute top-0 bottom-0 right-0 mr-3  border-l border-[#00283b]"></div>
//                <h3 className="text-xl font-semibold mb-2">Product Development</h3>
//                <p className="text-sm mb-4">Want to develop a new product but have no experience in software development? Provide us a need, vision, and get a comprehensive business solution.</p>
//                <div className="flex justify-end">
//                    <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5 mt-5 " />
//                </div>
//                {/* Vertical Separator */}
//                <div className="absolute top-0 bottom-0 right-0  mr-3  border-l border-[#00283b] "></div>
//            </div>

//            {/* Team Extension */}
//            <div className="w-1/4 mx-1 pl-4 pr-7 relative">
//                <h3 className="text-xl font-semibold mb-2">Team Extension</h3>
//                <p className="text-sm mb-4">Already defined requirements, budget, and time frames? Hire our experts and we’ll realize your vision planned in advance.</p>
//                <div className="flex justify-end">
//                    <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5 mt-10" />
//                </div>
//                {/* Vertical Separator */}
//                <div className="absolute top-0 bottom-0 right-0 mr-3  border-l border-[#00283b]"></div>
//            </div>

//            {/* Dedicated Team */}
//            <div className="w-1/4 mx-1 pl-4 pr-7 relative">
//                <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
//                <p className="text-sm mb-4">Stay engaged in the development of your product; create, view, and deliver side-by-side with a team of experienced people.</p>
//                <div className="flex justify-end">
//                    <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5 mt-10" />
//                </div>
//                {/* Vertical Separator */}
//                <div className="absolute top-0 bottom-0 right-0 mr-3  border-l border-[#00283b]"></div>
//            </div>

//            {/* AI Development */}
//            <div className="w-1/4 mx-1 pl-4 pr-7 relative">
//                <h3 className="text-xl font-semibold mb-2">AI Development</h3>
//                <p className="text-sm mb-4">Rely on our AI expertise to unlock the untapped potential of vast data amounts and achieve tangible results.</p>
//                <div className="flex justify-end">
//                    <img src="https://inoxoft.com/wp-content/uploads/2024/07/Arrow-2.svg" alt="Arrow" className="h-5 mt-10" />
//                </div>
//            </div>
//        </div>
//    </div>
// </section>



