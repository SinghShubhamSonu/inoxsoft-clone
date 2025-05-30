import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
// import chinImage from './assets/images/Chin.JPG';

const TeamMember = ({ imageUrl, name, designation, linkedin, isTextBox }) => {
  const [isHovered, setIsHovered] = useState(false);

  // If this is the text box (first item in the grid)
  if (isTextBox) {
    return (
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="relative w-full h-96 bg-[#002a3a] rounded-none flex items-center">
          <div className="p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Fulfill your business goals under the expert vision of the Inoxoft leadership team.</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-96 overflow-hidden rounded-none">
        <img
          src={imageUrl || "https://via.placeholder.com/360x360"}
          alt={name || "Team Member"}
          className="w-full h-full object-cover"
        />
        
        {/* Always show the name and designation on the image */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-opacity-80 transition-all duration-300 ${isHovered ? 'bg-white text-[#002a3a]' : 'bg-[#6b7f88] text-white'}`}>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-base">{designation}</p>
          
          {isHovered && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 inline-block"
            >
              <FaLinkedin size={24} className="text-[#0077b5]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ children, bgColor }) => {
  return (
    <div className={`${bgColor} p-8 flex flex-col justify-center h-64`}>
      {children}
    </div>
  );
};

const CoreTeam = () => {
  const teamMembers = [
    {
      isTextBox: true,
    },
    {
      imageUrl: '/src/assets/images/Chin.jpg',
      name: 'Chinmay Daroloya',
      designation: 'Founder',
      linkedin: 'YOUR_LINKEDIN_URL_1',
    },
    {
      imageUrl: '/src/assets/images/par.png',
      name: 'Paresh Borana',
      designation: 'CFO',
      linkedin: 'YOUR_LINKEDIN_URL_5',
    },
    {
      imageUrl: '/src/assets/images/man.png',
      name: 'Manish Malav',
      designation: 'CBO',
      linkedin: 'YOUR_LINKEDIN_URL_4',
    },
    {
      imageUrl: '/src/assets/images/raju.png',
      name: 'Rajendra Singh Rao',
      designation: 'CTO',
      linkedin: 'YOUR_LINKEDIN_URL_2',
    },
    {
      imageUrl: '/src/assets/images/bhav.jpeg',
      name: 'Bhavesh Sharma',
      designation: 'CNO',
      linkedin: 'YOUR_LINKEDIN_URL_3',
    },
    
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Core Team Section */}
      <h2 className="text-4xl font-bold text-center mb-12 text-[#002a3a]">CORE TEAM</h2>
      <div className="flex flex-wrap mb-16">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageUrl={member.imageUrl}
            name={member.name}
            designation={member.designation}
            linkedin={member.linkedin}
            isTextBox={member.isTextBox}
          />
        ))}
      </div>
            {/* Team Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Average Age Box */}
        <StatBox bgColor="bg-[#1a5682]">
          <div className="text-white">
            <h2 className="text-6xl font-bold mb-4">30+</h2>
            <p className="text-2xl">Average Age</p>
          </div>
        </StatBox>

        {/* Gender Correlation Box */}
        <StatBox bgColor="bg-[#002a3a]">
          <div className="text-white flex flex-col">
            <h3 className="text-2xl mb-6 font-bold">Gender Correlation</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BsGenderMale className="text-[#5a87a0] mr-2 text-xl" />
                <span className="text-[#5a87a0] text-6xl font-bold">60%</span>
              </div>
              <div className="flex items-center">
                <BsGenderFemale className="text-white mr-2 text-xl" />
                <span className="text-white text-6xl font-bold">40%</span>
              </div>
            </div>
          </div>
        </StatBox>

        {/* Staff Distribution Box */}
        <div className="md:col-span-1">
          <StatBox bgColor="bg-[#002a3a]">
            <div className="text-white grid grid-cols-2 gap-y-3">
              <div>
                <p className="text-xl">Junior staff –</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">22%</span>
              </div>
              <div>
                <p className="text-xl">Middle staff –</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">49%</span>
              </div>
              <div>
                <p className="text-xl">Senior staff –</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">29%</span>
              </div>
            </div>
          </StatBox>
        </div>

        {/* Team Size Box */}
        <StatBox bgColor="bg-[#1a5682]">
          <div className="text-white">
            <h2 className="text-6xl font-bold mb-4">130+</h2>
            <p className="text-2xl font-bold">Our team</p>
          </div>
        </StatBox>
      </div>
    </div>
  );
};

export default CoreTeam;