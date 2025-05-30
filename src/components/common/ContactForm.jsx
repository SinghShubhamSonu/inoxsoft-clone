// // import React, { useState, useRef } from 'react';

// // const ContactForm = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [info, setInfo] = useState('');
// //   const [fileName, setFileName] = useState('Attach file');
// //   const fileInputRef = useRef(null);

// //   const handleFileChange = (e) => {
// //     if (e.target.files.length > 0) {
// //       setFileName(e.target.files[0].name);
// //     } else {
// //       setFileName('Attach file');
// //     }
// //   };

// //   const handleFileClick = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Form submission logic here
// //     console.log({ name, email, info });
// //   };

// //   return (
// //     <section className="py-12 bg-white">
// //       <div className="container mx-auto px-4 max-w-6xl">
// //         <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
// //           {/* Left side with heading */}
// //           <div className="w-full md:w-2/5 bg-white p-8 flex items-center">
// //             <h2 className="text-4xl font-bold text-gray-800 leading-tight">
// //               START BUILDING <br /> YOUR <br className="hidden sm:block md:hidden" /> SOFTWARE.<br /> CONTACT US<br /> NOW
// //             </h2>
// //           </div>

// //           {/* Right side with form */}
// //           <div className="w-full md:w-3/5 bg-white p-8">
// //             {/* Contact person */}
// //             <div className="mb-8">
// //               <div className="flex items-center">
// //                 <div className="mr-4">
// //                   <img 
// //                     src="/wp-content/uploads/2023/11/gray-2.png" 
// //                     alt="Oleksii Kamynin" 
// //                     className="w-24 h-24 rounded-full object-cover"
// //                   />
// //                 </div>
// //                 <div>
// //                   <div className="text-lg font-bold">Oleksii Kamynin</div>
// //                   <div className="text-gray-600">Business Development Executive</div>
// //                   <div className="mt-2">
// //                     <a 
// //                       href="https://www.linkedin.com/in/alex-kamynin-328357149/" 
// //                       target="_blank" 
// //                       rel="nofollow"
// //                       className="text-blue-600"
// //                     >
// //                       <i className="fab fa-linkedin"></i>
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Form */}
// //             <form onSubmit={handleSubmit}>
// //               <div className="mb-6 relative">
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
// //                   required
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                 />
// //                 <label 
// //                   htmlFor="name" 
// //                   className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
// //                 >
// //                   Name
// //                 </label>
// //               </div>

// //               <div className="mb-6 relative">
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
// //                   required
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //                 <label 
// //                   htmlFor="email" 
// //                   className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
// //                 >
// //                   E-mail
// //                 </label>
// //               </div>

// //               <div className="mb-6 relative">
// //                 <input
// //                   type="text"
// //                   id="info"
// //                   className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
// //                   required
// //                   value={info}
// //                   onChange={(e) => setInfo(e.target.value)}
// //                 />
// //                 <label 
// //                   htmlFor="info" 
// //                   className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
// //                 >
// //                   What we can do for you?
// //                 </label>
// //               </div>

// //               {/* CAPTCHA-like verification (for visual purposes only) */}
// //               <div className="flex justify-center mb-6">
// //                 <div className="border border-gray-300 rounded p-2 flex items-center">
// //                   <input type="checkbox" id="verify" className="mr-2" />
// //                   <label htmlFor="verify" className="text-sm text-gray-600">Verify you are human</label>
// //                 </div>
// //               </div>

// //               <div className="mt-8">
// //                 <div className="flex flex-col sm:flex-row items-start sm:items-center">
// //                   <button 
// //                     type="submit" 
// //                     className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 text-sm font-bold"
// //                   >
// //                     SEND A MESSAGE
// //                   </button>

// //                   <div className="relative mt-4 sm:mt-0 sm:ml-4 flex items-center">
// //                     <button 
// //                       type="button" 
// //                       className="inline-flex items-center text-gray-500 hover:text-gray-700 border border-gray-300 rounded p-2 mr-2"
// //                       onClick={handleFileClick}
// //                       aria-label="Upload button"
// //                     >
// //                       <i className="fa fa-paperclip"></i>
// //                     </button>
// //                     <div className="text-gray-500 text-sm">{fileName}</div>
// //                     <input 
// //                       ref={fileInputRef}
// //                       id="file-input"
// //                       type="file"
// //                       className="hidden"
// //                       accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
// //                       onChange={handleFileChange}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactForm;
// import React, { useState, useRef } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [info, setInfo] = useState('');
//   const [fileName, setFileName] = useState('Attach file');
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     if (e.target.files.length > 0) {
//       setFileName(e.target.files[0].name);
//     } else {
//       setFileName('Attach file');
//     }
//   };

//   const handleFileClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic here
//     console.log({ name, email, info });
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Left side with heading */}
//           <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
//             <div className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
//               START BUILDING <br /> 
//               YOUR SOFTWARE.<br /> 
//               CONTACT US<br /> 
//               NOW
//               <div className="mt-3 w-16 h-0.5 bg-blue-600 relative">
//                 <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//                   <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M23.5303 6.53033C23.8232 6.23744 23.8232 5.76256 23.5303 5.46967L18.7574 0.696699C18.4645 0.403806 17.9896 0.403806 17.6967 0.696699C17.4038 0.989593 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM0 6.75H23V5.25H0V6.75Z" fill="#1E40AF"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side with form */}
//           <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
//             {/* Contact person */}
//             <div className="mb-8 flex items-center">
//               <div className="mr-4">
//                 <img 
//                   src="/api/placeholder/70/70" 
//                   alt="Oleksii Kamynin" 
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//               </div>
//               <div>
//                 <div className="text-base font-bold text-gray-800">Oleksii Kamynin</div>
//                 <div className="text-sm text-gray-600">Business Development Executive</div>
//                 <div className="mt-1">
//                   <a 
//                     href="#" 
//                     className="text-blue-600"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#2563EB">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="mt-4">
//               <div className="mb-6 relative">
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <label 
//                   htmlFor="name" 
//                   className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                 >
//                   Name *
//                 </label>
//               </div>

//               <div className="mb-6 relative">
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label 
//                   htmlFor="email" 
//                   className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                 >
//                   E-mail *
//                 </label>
//               </div>

//               <div className="mb-10 relative">
//                 <input
//                   type="text"
//                   id="info"
//                   className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                   required
//                   value={info}
//                   onChange={(e) => setInfo(e.target.value)}
//                 />
//                 <label 
//                   htmlFor="info" 
//                   className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                 >
//                   What we can do for you? *
//                 </label>
//               </div>

//               {/* Cloudflare Turnstile */}
//               <div className="flex justify-center mb-8">
//                 <div className="flex items-center gap-2">
//                   <input type="checkbox" id="verify" className="w-4 h-4" />
//                   <label htmlFor="verify" className="text-sm text-gray-600">Verify you are human</label>
//                   <img src="/api/placeholder/90/20" alt="Cloudflare" className="h-5 ml-1" />
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <button 
//                   type="submit" 
//                   className="bg-white border border-gray-300 text-blue-600 px-6 py-2 rounded-full hover:bg-gray-50 transition duration-300 text-sm font-medium"
//                 >
//                   SEND A MESSAGE
//                 </button>

//                 <div className="flex items-center text-blue-600">
//                   <button 
//                     type="button" 
//                     onClick={handleFileClick}
//                     aria-label="Attach file"
//                     className="text-blue-600"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
//                     </svg>
//                   </button>
//                   <span className="ml-2 text-sm text-blue-600">Attach file</span>
//                   <input 
//                     ref={fileInputRef}
//                     type="file"
//                     className="hidden"
//                     accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
//                     onChange={handleFileChange}
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
// import React, { useState, useRef } from 'react';
// // import SoundFlare from '../../assets/images/Cloudflare_Logo.svg';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [info, setInfo] = useState('');
//     const [fileName, setFileName] = useState('Attach file');
//     const fileInputRef = useRef(null);

//     const handleFileChange = (e) => {
//         if (e.target.files.length > 0) {
//             setFileName(e.target.files[0].name);
//         } else {
//             setFileName('Attach file');
//         }
//     };

//     const handleFileClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Form submission logic here
//         console.log({ name, email, info });
//     };

//     return (
//         <section className="py-24 bg-white flex justify-center items-center">
//             <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row  gap-8 md:gap-20">
//                 {/* Left side with heading (outside the card) */}
//                 <div className="w-full md:w-2/5">
//                     <div className="text-left">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mt-4">
//                             START BUILDING <br />
//                             YOUR SOFTWARE.<br />
//                             CONTACT US<br />
//                             NOW
                            
                              
//                                     <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/form-arrow.svg" alt="arrow" className="w-44 ml-28 h-10 -mt-10" />
                               
                          
//                         </h2>
//                     </div>
//                 </div>

//                 {/* Right side with form (inside the card) */}
//                 <div className="w-full md:w-3/5">
//                     <div className="bg-white rounded-lg shadow-lg p-8">
//                         {/* Contact person */}
//                         <div className="mb-8 flex items-center">
//                             <div className="mr-4">
//                                 <img
//                                     src="https://inoxoft.com/wp-content/uploads/2023/11/gray-2.png"
//                                     alt="Oleksii Kamynin"
//                                     className="w-12 h-12 rounded-full object-cover"
//                                 />
//                             </div>
//                             <div>
//                                 <div className="text-base font-bold text-gray-800">Oleksii Kamynin</div>
//                                 <div className="text-sm text-gray-600">Business Development Executive</div>
//                                 <div className="mt-1 ">
//                                     <a
//                                         href="#"
//                                         className="text-[#1a5c8d]"
//                                     >
//                                         <i className="fab fa-linkedin " aria-hidden="true"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <div className="mb-6 relative">
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="name"
//                                     className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     Name *
//                                 </label>
//                             </div>

//                             <div className="mb-6 relative">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     E-mail *
//                                 </label>
//                             </div>

//                             <div className="mb-10 relative">
//                                 <input
//                                     type="text"
//                                     id="info"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={info}
//                                     onChange={(e) => setInfo(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="info"
//                                     className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     What we can do for you? *
//                                 </label>
//                             </div>

//                             {/* Cloudflare Turnstile */}
//                             {/* <div className="flex justify-center mb-8">
//                                 <div className="flex items-center gap-5">
//                                     <input type="checkbox" id="verify" className="w-4 h-4" />
//                                     <label htmlFor="verify" className="text-sm mr-12  text-gray-600">Verify you are human</label>
//                                     <img src={SoundFlare} alt="Cloudflare" className="h-8 ml-1" />
//                                 </div>
//                             </div> */}

//                             <div className="flex items-center gap-4 mt-10">
//                                 <button
//                                     type="submit"
//                                     className="bg-white border border-gray-300 text-blue-600 px-6 py-2 rounded-full hover:bg-gray-50 transition duration-300 text-sm font-medium cursor-pointer"
//                                 >
//                                     SEND A MESSAGE
//                                 </button>

//                                 <div className="flex items-center text-blue-600">
//                                     <button
//                                         type="button"
//                                         onClick={handleFileClick}
//                                         aria-label="Attach file"
//                                         className="text-blue-600 cursor-pointer"
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
//                                         </svg>
//                                     </button>
//                                     <span className="ml-2 text-sm text-blue-600">Attach file</span>
//                                     <input
//                                         ref={fileInputRef}
//                                         type="file"
//                                         className="hidden"
//                                         accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactForm;
// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// // import SoundFlare from '../../assets/images/Cloudflare_Logo.svg';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [info, setInfo] = useState('');
//     const [fileName, setFileName] = useState('');
//     const fileInputRef = useRef(null);
//     const buttonRef = useRef(null);
//     const pseudoElementRef = useRef(null);

//     const handleFileChange = (e) => {
//         if (e.target.files.length > 0) {
//             setFileName(e.target.files[0].name);
//         } else {
//             setFileName('');
//         }
//     };

//     const handleFileClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleMouseEnter = () => {
//         gsap.to(buttonRef.current, {
//             duration: 0.2,
//             ease: "power1.out"
//         });

//         gsap.to(pseudoElementRef.current, {
//             width: '500px',
//             duration: 1,
//             ease: "power2.out"
//         });
//     };

//     const handleMouseLeave = () => {
//         gsap.to(buttonRef.current, {
//             duration: 0.2,
//             ease: "power1.out"
//         });

//         gsap.to(pseudoElementRef.current, {
//             width: '0px',
//             duration: 1,
//             ease: "power2.out"
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Form submission logic here
//         console.log({ name, email, info });
//     };

//     return (
//         <section className="py-24 bg-white flex justify-center items-center">
//             <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row gap-8 md:gap-20">
//                 {/* Left side with heading (outside the card) */}
//                 <div className="w-full md:w-2/5">
//                     <div className="text-left">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-4">
//                             START BUILDING <br />
//                             YOUR SOFTWARE.<br />
//                             CONTACT US<br />
//                             NOW
                            
                              
//                             <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/form-arrow.svg" alt="arrow" className="w-52 ml-32 h-12 -mt-10" />
                               
                          
//                         </h2>
//                     </div>
//                 </div>

//                 {/* Right side with form (inside the card) */}
//                 <div className="w-full md:w-3/5">
//                     <div className="bg-white rounded-lg shadow-xl p-10 border border-gray-100">
//                         {/* Contact person */}
//                         <div className="mb-16 flex items-center">
//                             <div className="mr-4">
//                                 <img
//                                     src="https://inoxoft.com/wp-content/uploads/2023/11/gray-2.png"
//                                     alt="Oleksii Kamynin"
//                                     className="w-12 h-12 rounded-full object-cover"
//                                 />
//                             </div>
//                             <div>
//                                 <div className="text-base font-bold text-gray-800">Oleksii Kamynin</div>
//                                 <div className="text-sm text-gray-600">Business Development Executive</div>
//                                 <div className="mt-1 ">
//                                     <a
//                                         href="#"
//                                         className="text-[#1a5c8d]"
//                                     >
//                                         <i className="fab fa-linkedin " aria-hidden="true"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <div className="mb-8 relative">
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="name"
//                                     className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     Name *
//                                 </label>
//                             </div>

//                             <div className="mb-8 relative">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     E-mail *
//                                 </label>
//                             </div>

//                             <div className="mb-10 relative">
//                                 <input
//                                     type="text"
//                                     id="info"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={info}
//                                     onChange={(e) => setInfo(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="info"
//                                     className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     What we can do for you? *
//                                 </label>
//                             </div>

//                             {/* Attached file display */}
//                             {fileName && (
//                                 <div className="mb-6 py-2 px-4 bg-gray-50 rounded-md flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a5c8d]">
//                                         <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
//                                     </svg>
//                                     <span className="ml-2 text-sm text-gray-700 truncate max-w-xs">{fileName}</span>
//                                     <button 
//                                         type="button" 
//                                         className="ml-auto text-gray-500 hover:text-gray-700"
//                                         onClick={() => setFileName('')}
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             )}

//                             <div className="flex items-center gap-72 mt-20">
//                                 <div className="relative inline-block">
//                                     <button
//                                         type="submit"
//                                         ref={buttonRef}
//                                         className="relative inline-flex items-center px-10 py-4 hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden text-sm font-medium cursor-pointer "
//                                         onMouseEnter={handleMouseEnter}
//                                         onMouseLeave={handleMouseLeave}
//                                     >
//                                         <span className="relative z-10 hover:text-white">
//                                             SEND A MESSAGE
//                                         </span>
//                                         <span
//                                             ref={pseudoElementRef}
//                                             className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
//                                         ></span>
//                                     </button>
//                                 </div>

//                                 <div className="flex items-center text-[#1a5c8d]">
//                                     <button
//                                         type="button"
//                                         onClick={handleFileClick}
//                                         aria-label="Attach file"
//                                         className="text-[#1a5c8d] cursor-pointer"
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
//                                         </svg>
//                                     </button>
//                                     <span 
//                                         className="ml-2 text-xl text-[#1a5c8d] cursor-pointer" 
//                                         onClick={handleFileClick}
//                                     >
//                                         Attach file
//                                     </span>
//                                     <input
//                                         ref={fileInputRef}
//                                         type="file"
//                                         className="hidden"
//                                         accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactForm;
// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// // import SoundFlare from '../../assets/images/Cloudflare_Logo.svg';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [info, setInfo] = useState('');
//     const [fileName, setFileName] = useState('');
//     const fileInputRef = useRef(null);
//     const buttonRef = useRef(null);
//     const pseudoElementRef = useRef(null);

//     const handleFileChange = (e) => {
//         if (e.target.files.length > 0) {
//             setFileName(e.target.files[0].name);
//         } else {
//             setFileName('');
//         }
//     };

//     const handleFileClick = () => {
//         fileInputRef.current.click();
//     };

//     // New function to handle file removal
//     const handleRemoveFile = () => {
//         setFileName('');
//         // Reset the file input value so the same file can be selected again
//         if (fileInputRef.current) {
//             fileInputRef.current.value = '';
//         }
//     };

//     const handleMouseEnter = () => {
//         gsap.to(buttonRef.current, {
//             duration: 0.2,
//             ease: "power1.out"
//         });

//         gsap.to(pseudoElementRef.current, {
//             width: '500px',
//             duration: 1,
//             ease: "power2.out"
//         });
//     };

//     const handleMouseLeave = () => {
//         gsap.to(buttonRef.current, {
//             duration: 0.2,
//             ease: "power1.out"
//         });

//         gsap.to(pseudoElementRef.current, {
//             width: '0px',
//             duration: 1,
//             ease: "power2.out"
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Form submission logic here
//         console.log({ name, email, info });
//     };

//     return (
//         <section className="py-24 bg-white flex justify-center items-center">
//             <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row gap-8 md:gap-20">
//                 {/* Left side with heading (outside the card) */}
//                 <div className="w-full md:w-2/5">
//                     <div className="text-left">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-4">
//                             START BUILDING <br />
//                             YOUR SOFTWARE.<br />
//                             CONTACT US<br />
//                             NOW
                            
                              
//                             <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/form-arrow.svg" alt="arrow" className="w-40 ml-32 h-14 -mt-14" />
                               
                          
//                         </h2>
//                     </div>
//                 </div>

//                 {/* Right side with form (inside the card) */}
//                 <div className="w-full md:w-3/5">
//                     <div className="bg-white rounded-lg shadow-xl p-10 border border-gray-100">
//                         {/* Contact person */}
//                         <div className="mb-16 flex items-center">
//                             <div className="mr-4">
//                                 <img
//                                     src="https://inoxoft.com/wp-content/uploads/2023/11/gray-2.png"
//                                     alt="Oleksii Kamynin"
//                                     className="w-12 h-12 rounded-full object-cover"
//                                 />
//                             </div>
//                             <div>
//                                 <div className="text-base font-bold text-gray-800">Oleksii Kamynin</div>
//                                 <div className="text-sm text-gray-600">Business Development Executive</div>
//                                 <div className="mt-1 ">
//                                     <a
//                                         href="#"
//                                         className="text-[#1a5c8d]"
//                                     >
//                                         <i className="fab fa-linkedin " aria-hidden="true"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <div className="mb-8 relative">
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="name"
//                                     className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     Name *
//                                 </label>
//                             </div>

//                             <div className="mb-8 relative">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     E-mail *
//                                 </label>
//                             </div>

//                             <div className="mb-10 relative">
//                                 <input
//                                     type="text"
//                                     id="info"
//                                     className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
//                                     required
//                                     value={info}
//                                     onChange={(e) => setInfo(e.target.value)}
//                                 />
//                                 <label
//                                     htmlFor="info"
//                                     className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
//                                 >
//                                     What we can do for you? *
//                                 </label>
//                             </div>

//                             {/* Attached file display */}
//                             {fileName && (
//                                 <div className="mb-6 py-2 px-4 bg-gray-50 rounded-md flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a5c8d]">
//                                         <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
//                                     </svg>
//                                     <span className="ml-2 text-sm text-gray-700 truncate max-w-xs">{fileName}</span>
//                                     <button 
//                                         type="button" 
//                                         className="ml-auto text-gray-500 hover:text-gray-700"
//                                         onClick={handleRemoveFile}
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             )}

//                             {/* Made responsive with flex-col on mobile and flex-row on larger screens */}
//                             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-20">
//                                 <div className="relative inline-block">
//                                     <button
//                                         type="submit"
//                                         ref={buttonRef}
//                                         className="relative inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden text-sm font-medium cursor-pointer"
//                                         onMouseEnter={handleMouseEnter}
//                                         onMouseLeave={handleMouseLeave}
//                                     >
//                                         <span className="relative z-10 hover:text-white">
//                                             SEND A MESSAGE
//                                         </span>
//                                         <span
//                                             ref={pseudoElementRef}
//                                             className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
//                                         ></span>
//                                     </button>
//                                 </div>

//                                 <div className="flex items-center text-[#1a5c8d]">
//                                     <button
//                                         type="button"
//                                         onClick={handleFileClick}
//                                         aria-label="Attach file"
//                                         className="text-[#1a5c8d] cursor-pointer"
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
//                                         </svg>
//                                     </button>
//                                     <span 
//                                         className="ml-2 text-lg sm:text-xl text-[#1a5c8d] cursor-pointer" 
//                                         onClick={handleFileClick}
//                                     >
//                                         Attach file
//                                     </span>
//                                     <input
//                                         ref={fileInputRef}
//                                         type="file"
//                                         className="hidden"
//                                         accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactForm;
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import SoundFlare from '../../assets/images/Cloudflare_Logo.svg';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);
    const buttonRef = useRef(null);
    const pseudoElementRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    // New function to handle file removal
    const handleRemoveFile = () => {
        setFileName('');
        // Reset the file input value so the same file can be selected again
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log({ name, email, info });
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#f9fbfb] flex justify-center items-center w-full shadow-2xl">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 lg:gap-20">
                {/* Left side with heading (outside the card) */}
                <div className="w-full md:w-2/5 mb-8 md:mb-0">
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-4">
                            START BUILDING <br />
                            YOUR SOFTWARE.<br />
                            CONTACT US<br />
                            NOW
                            
                            <div className="relative">  
                                <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/form-arrow.svg" alt="arrow" className="w-24 sm:w-32 md:w-40 h-10 sm:h-12 md:h-14 ml-20 sm:ml-24 md:ml-32 -mt-10 sm:-mt-12 md:-mt-14" />
                            </div>
                        </h2>
                    </div>
                </div>

                {/* Right side with form (inside the card) */}
                <div className="w-full md:w-3/5">
                    <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
                        {/* Contact person */}
                        <div className="mb-10 sm:mb-16 flex items-center">
                            <div className="mr-4">
                                <img
                                    src="https://inoxoft.com/wp-content/uploads/2023/11/gray-2.png"
                                    alt="Oleksii Kamynin"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-sm sm:text-base font-bold text-gray-800">Oleksii Kamynin</div>
                                <div className="text-xs sm:text-sm text-gray-600">Business Development Executive</div>
                                <div className="mt-1">
                                    <a
                                        href="#"
                                        className="text-[#1a5c8d]"
                                    >
                                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-6 sm:mb-8 relative">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
                                >
                                    Name *
                                </label>
                            </div>

                            <div className="mb-6 sm:mb-8 relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
                                >
                                    E-mail *
                                </label>
                            </div>

                            <div className="mb-8 sm:mb-10 relative">
                                <input
                                    type="text"
                                    id="info"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
                                    required
                                    value={info}
                                    onChange={(e) => setInfo(e.target.value)}
                                />
                                <label
                                    htmlFor="info"
                                    className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
                                >
                                    What we can do for you? *
                                </label>
                            </div>

                            {/* Attached file display */}
                            {fileName && (
                                <div className="mb-6 py-2 px-3 sm:px-4 bg-gray-50 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a5c8d] flex-shrink-0">
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                    </svg>
                                    <span className="ml-2 text-xs sm:text-sm text-gray-700 truncate max-w-[calc(100%-60px)]">{fileName}</span>
                                    <button 
                                        type="button" 
                                        className="ml-auto text-gray-500 hover:text-gray-700 p-1"
                                        onClick={handleRemoveFile}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            )}

                            {/* Made responsive with flex-col on mobile and flex-row on larger screens */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20">
                                <div className="relative inline-block mb-4 sm:mb-0">
                                    <button
                                        type="submit"
                                        ref={buttonRef}
                                        className="relative inline-flex items-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden text-xs sm:text-sm font-medium cursor-pointer w-full sm:w-auto justify-center"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <span className="relative z-10 hover:text-white">
                                            SEND A MESSAGE
                                        </span>
                                        <span
                                            ref={pseudoElementRef}
                                            className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
                                        ></span>
                                    </button>
                                </div>

                                <div className="flex items-center text-[#1a5c8d]">
                                    <button
                                        type="button"
                                        onClick={handleFileClick}
                                        aria-label="Attach file"
                                        className="text-[#1a5c8d] cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                        </svg>
                                    </button>
                                    <span 
                                        className="ml-2 text-base sm:text-lg md:text-xl text-[#1a5c8d] cursor-pointer" 
                                        onClick={handleFileClick}
                                    >
                                        Attach file
                                    </span>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        className="hidden"
                                        accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;