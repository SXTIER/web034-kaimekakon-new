import React from 'react';
import IMG from './TheUn_SVG/img.svg'

const TheUnseen = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center px-3 py-6 mb-10 bg-white max-h-none max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={IMG}
          alt="Illustration"
          className="max-w-none w-auto h-[450px]"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          The unseen of spending three<br />
          years at Pixelgrade
        </h2>
        <p className="mt-4 text-sm text-gray-600 leading-relaxedmax-w-6xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
          Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
          porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TheUnseen;
