import React from 'react';
import TeslaLogo from './Tesla_LOGO/tesla.svg';
import { Link } from 'react-router-dom';

import FL1 from '../pages/svg/svg2/img2_1.svg';
import FL2 from '../pages/svg/img1_2.svg';
import FL3 from '../pages/svg/img1_3.svg';
import FL4 from '../pages/svg/img1_4.svg';
import FL5 from '../pages/svg/img1_5.svg';
import FL6 from '../pages/svg/img1_6.svg';

const Tesla = () => {
  return (
    <div>
      <div className="max-w-none mx-auto px-4 py-10 bg-[#F5F7FA]">
        {/* Card container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-[950px] max mx-auto">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              className="w-auto h-[400px] md:w-[320px] md:h-[320px] object-contain mx-auto"
              src={TeslaLogo}
              alt="Tesla Logo"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4 text-center md:text-left px-2 md:px-0">
            <p className="text-[#717171] text-[14px] leading-relaxed">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <div>
              <p className="text-[#4CAF4F] font-semibold">Tim Smith</p>
              <p className="text-sm text-[#89939E]">
                British Dragon Boat Racing Association
              </p>
            </div>

            {/* Logos and link */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
              <img src={FL1} className="w-[40px] h-[40px]" alt="ICON" />
              <img src={FL2} className="w-[40px] h-[40px]" alt="ICON" />
              <img src={FL3} className="w-[40px] h-[40px]" alt="ICON" />
              <img src={FL4} className="w-[40px] h-[40px]" alt="ICON" />
              <img src={FL5} className="w-[40px] h-[40px]" alt="ICON" />
              <img src={FL6} className="w-[40px] h-[40px]" alt="ICON" />

              <Link
                to="#"
                className="text-green-600 font-semibold hover:underline whitespace-nowrap mt-2 md:mt-0"
              >
                Meet all customers →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tesla;
