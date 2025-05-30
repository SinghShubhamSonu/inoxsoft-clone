import React from 'react';

const ReactNativeTextSection1 = () => {
  return (
    <section className="py-0 pb-20 relative bg-white">
      {/* Shadow element */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent"></div> */}
      
      <div className="container mx-auto px-4 ">
        <div>
          <p>
            <span className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed ">
              React Native smoothly interacts with native components via bridge. 
              Starting with event updates, it collects data and notifies JS, then processing 
              the event React Native updates the UI.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReactNativeTextSection1;