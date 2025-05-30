import React, { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';

const ContactForm = () => {
    const buttonRef = useRef(null);
    const pseudoElementRef = useRef(null);

    const handleMouseEnter = () => {
        if (pseudoElementRef.current) {
            pseudoElementRef.current.style.transition = 'width 0.3s ease';
            pseudoElementRef.current.style.width = '100%';
            pseudoElementRef.current.style.left = '0';
        }
    };

    const handleMouseLeave = () => {
        if (pseudoElementRef.current) {
            pseudoElementRef.current.style.transition = 'width 0.3s ease';
            pseudoElementRef.current.style.width = '0';
        }
    };

    const personInfo = {
        imageUrl: '/src/assets/images/Chin.JPG',
        name: 'Chinmat Daroloiya',
        designation: 'Founder',
        position: 'CEO',
        linkedin: 'YOUR_LINKEDIN_URL_1',
    };

    return (
        <div className="w-full font-sans bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="px-6 py-4 lg:px-0">
                    <h1 className="text-3xl font-bold text-[#00283b] mb-4">CONTACT US</h1>
                </div>

                <div className="flex flex-col lg:flex-row bg-white overflow-hidden border border-gray-100 rounded shadow-md">
                    {/* Contact Form Section */}
                    <div className="w-full lg:w-1/2 p-8">
                        <p className="text-base text-gray-700 mb-6">
                            If you have any questions, feel free to contact us.
                        </p>

                        <div className="flex items-start mb-6">
                            <div className="w-14 h-14 mr-4 overflow-hidden rounded-full bg-gray-100">
                                <img
                                    src={personInfo.imageUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/150';
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-[#00283b]">{personInfo.name}</h3>
                                <p className="text-sm text-gray-600">{personInfo.designation}</p>
                                <p className="text-sm text-gray-600">{personInfo.position}</p>
                                <a
                                    href={personInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-1"
                                >
                                    <div className="bg-[#0077b5] text-white w-5 h-5 flex items-center justify-center rounded">
                                        <FaLinkedin size={12} />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <form className="space-y-3">
                            {/* Reduced space-y */}
                            <div>
                                <label htmlFor="name" className="block text-gray-600 text-sm font-normal ">
                                    Name <span className="text-blue-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-0 py-1 border-t-0 border-l-0 border-r-0 border-b border-gray-300 focus:outline-none focus:border-[#00283b]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-600 text-sm font-normal ">
                                    E-mail <span className="text-blue-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-0 py-1 border-t-0 border-l-0 border-r-0 border-b border-gray-300 focus:outline-none focus:border-[#00283b]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-600 text-sm font-normal ">
                                    What we can do for you? <span className="text-blue-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="message"
                                    className="w-full px-0 py-1 border-t-0 border-l-0 border-r-0 border-b border-gray-300 focus:outline-none focus:border-[#00283b]"
                                    required
                                />
                            </div>

                            <div className="pt-2 flex items-center justify-between">
                                {/* Adjusted pt-4 to pt-2 and added justify-between */}
                                <button
                                    ref={buttonRef}
                                    className="relative inline-flex items-center px-8 py-2 text-black hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    type="submit"
                                >
                                    <span className="relative z-10 font-medium px-9 py-1">
                                        Send
                                    </span>
                                    <span
                                        ref={pseudoElementRef}
                                        className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
                                    ></span>
                                </button>
                                 <button type="button" className=" text-gray-400 hover:text-gray-600">

                                    <FaPaperclip size={14} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Company Stats Section */}
                    <div className="w-full lg:w-1/2 bg-[#00283b] text-white p-8 lg:py-12 lg:px-16 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-12">
                            Top-Rated Software Development<br />Company
                        </h2>

                        <div className="grid grid-cols-3 gap-6 mb-12">
                            {/* Reduced gap-6 to gap-4 and mb-16 to mb-12 */}
                            <div>
                                <p className="text-4xl font-bold">230+</p>
                                <p className="text-sm mt-1">Experts</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">9+</p>
                                <p className="text-sm mt-1">
                                    Years on the
                                    <br />
                                    market
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">180+</p>
                                <p className="text-sm mt-1">Happy clients</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {/* Reduced gap-6 to gap-4 */}
                            <div>
                                <p className="text-4xl font-bold">200+</p>
                                <p className="text-sm mt-1">Projects</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">60%</p>
                                <p className="text-sm mt-1">Startups</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold">40%</p>
                                <p className="text-sm mt-1">Existing businesses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
