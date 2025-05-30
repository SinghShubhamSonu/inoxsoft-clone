import React, { useState } from "react";

const values = [
  {
    title: "REALIZE",
    icon: "💡",
    content: "Understanding the bigger picture and making informed decisions.",
  },
  {
    title: "IMPROVE",
    icon: "💎",
    content: "Striving for excellence through continuous learning and growth.",
  },
  {
    title: "CARE",
    icon: "❤️",
    content: "Showing empathy, supporting others, and fostering a positive environment.",
  },
  {
    title: "BE SHARP",
    icon: "🚀",
    content: "Staying proactive, innovative, and ready to tackle new challenges.",
  },
];

const ValuesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#00263D]">
        OUR VALUES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative w-64 h-64 perspective"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative w-full h-full text-white rounded-lg transform transition-transform duration-500 ${
                hoveredIndex === index ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Side - Icons & Titles */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#00263D] rounded-lg"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-4xl text-blue-300">{value.icon}</span>
                <h3 className="mt-2 text-lg font-bold">{value.title}</h3>
              </div>

              {/* Back Side - Content & Title */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#00263D] rounded-lg transform rotate-y-180"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-md font-medium">{value.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
