import React from 'react';
import Design from './HTDesign_SVG/design.svg';

const Howto = () => {
  return (
    <div className='mb-4'>
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={Design}
            alt="Illustration"
            className="max-w-none w-auto h-[420px]"
          />
        </div>

        
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            How to design your site footer like we did
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Howto;
