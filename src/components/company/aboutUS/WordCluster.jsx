import React from 'react';

const WordCluster = () => {
    return (
        <div className="bg-[#001b29] text-white min-h-screen flex flex-col items-center">
          {/* Top Section */}
          <div className="bg-[#01426a] w-full py-12 flex flex-col items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-4">
              Build market-leading tech solutions with us
            </h2>
            <button className="relative inline-flex items-center px-6 py-3 text-black hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden">
              JOIN OUR TEAM 
            </button>
          </div>
      
          {/* Word Cluster Section */}
          <div className="p-4 md:p-8 w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
              WHAT PEOPLE VALUE THE MOST AT CODETHICS SOLUTIONS
            </h1>
            
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
              {/* Word Cloud (2/3 width) */}
              <div className="relative w-full md:w-2/3 h-96 md:h-[500px] lg:h-[550px] group hover:scale-135 transition-transform duration-500 ease-in-out">
                {/* Word elements */}
                <div className="absolute text-xs md:text-sm lg:text-base text-[#7dd3fc] transform -rotate-90 top-[45%] left-[10%] group-hover:text-white transition-colors duration-300">support</div>
                <div className="absolute text-base md:text-lg lg:text-xl text-white transform -rotate-90 top-[40%] left-[14%] group-hover:text-[#7dd3fc] transition-colors duration-300">development</div>
                <div className="absolute text-xs md:text-sm lg:text-base text-[#7dd3fc] top-[85%] left-[16%] group-hover:text-white transition-colors duration-300">people</div>
                <div className="absolute text-xl md:text-2xl lg:text-3xl text-[#7dd3fc] transform -rotate-90 top-[35%] left-[21%] group-hover:text-white transition-colors duration-300">support</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[23%] left-[38%] group-hover:text-[#7dd3fc] transition-colors duration-300">fun</div>
                <div className="absolute text-xl md:text-2xl lg:text-3xl font-bold text-white top-[53%] left-[28%] group-hover:text-[#7dd3fc] transition-colors duration-300">grow</div>
                <div className="absolute text-xl md:text-2xl lg:text-3xl text-[#7dd3fc] top-[70%] left-[28%] group-hover:text-white transition-colors duration-300">flexibility</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[75%] left-[23%] group-hover:text-[#7dd3fc] transition-colors duration-300">honesty</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[65%] left-[33%] group-hover:text-[#7dd3fc] transition-colors duration-300">help</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[85%] left-[33%] group-hover:text-[#7dd3fc] transition-colors duration-300">self-development</div>
                <div className="absolute text-xs md:text-sm lg:text-base text-[#7dd3fc] top-[18%] left-[43%] group-hover:text-white transition-colors duration-300">improve</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[33%] left-[40%] group-hover:text-[#7dd3fc] transition-colors duration-300">make it garno</div>
                <div className="absolute text-base md:text-lg lg:text-xl text-[#7dd3fc] top-[45%] left-[38%] group-hover:text-white transition-colors duration-300">professionalism</div>
                <div className="absolute text-xl md:text-2xl lg:text-3xl text-[#7dd3fc] top-[57%] left-[43%] group-hover:text-white transition-colors duration-300">take challenges</div>
                <div className="absolute text-base md:text-lg lg:text-xl text-white top-[65%] left-[58%] group-hover:text-[#7dd3fc] transition-colors duration-300">community</div>
                <div className="absolute text-base md:text-lg lg:text-xl text-white top-[28%] left-[56%] group-hover:text-[#7dd3fc] transition-colors duration-300">teamwork</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[65%] left-[40%] group-hover:text-[#7dd3fc] transition-colors duration-300">transparency</div>
                <div className="absolute text-xs md:text-sm lg:text-base text-[#7dd3fc] top-[80%] left-[48%] group-hover:text-white transition-colors duration-300">be sharp</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[48%] left-[53%] group-hover:text-[#7dd3fc] transition-colors duration-300">teamwork</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[40%] left-[60%] group-hover:text-[#7dd3fc] transition-colors duration-300">cozy</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[53%] left-[63%] group-hover:text-[#7dd3fc] transition-colors duration-300">trust</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white top-[75%] left-[63%] group-hover:text-[#7dd3fc] transition-colors duration-300">realize</div>
                <div className="absolute text-base md:text-lg lg:text-xl text-white transform -rotate-90 top-[45%] left-[73%] group-hover:text-[#7dd3fc] transition-colors duration-300">realize</div>
                <div className="absolute text-sm md:text-base lg:text-lg text-white transform -rotate-90 top-[60%] left-[77%] group-hover:text-[#7dd3fc] transition-colors duration-300">atmosphere</div>
                <div className="absolute text-xs md:text-sm lg:text-base text-[#7dd3fc] top-[30%] left-[78%] group-hover:text-white transition-colors duration-300">do better</div>
                <div className="absolute text-xs md:text-sm lg:text-base text-[#7dd3fc] transform -rotate-90 top-[65%] left-[73%] group-hover:text-white transition-colors duration-300">cooperate</div>
              </div>
              
              {/* Metrics Box (1/3 width) */}
              <div className="w-full md:w-1/3 flex flex-col justify-center space-y-6 p-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white">eNPS 76.6%*</div>
                  <div className="text-sm mt-2 opacity-80">*Average for last 3 years</div>
                </div>
                
                {/* <div className="w-full max-w-xs h-px bg-white/20 mx-auto"></div> */}
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white">4.78/5</div>
                  <div className="text-sm mt-2 text-white/90">Employee satisfaction with the company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default WordCluster;