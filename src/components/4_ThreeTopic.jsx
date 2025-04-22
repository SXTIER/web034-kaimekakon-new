import React from 'react';
import Tlogo1 from './TT_SVG/1.svg';
import Tlogo2 from './TT_SVG/2.svg';
import Tlogo3 from './TT_SVG/3.svg';

const ThreeTopic = () => {
  return (
    <div>
      <div className="w-full gap-[50px] max-w-6xl mx-auto my-2 mt-15 justify-evenly flex items-center h-[196px]">
        <div className="mt-10 p-5 w-[260px] h-[270px] max-h-[1000px] rounded-[5.6px] text-center shadow-[0px_1.39px_2.78px_#ABBED133]">
          <img
            src={Tlogo1}
            alt="Tlogo1"
            className="mx-auto mb-3 w-[60px] h-auto "
          />
          <h1 className="mx-auto w-[175px] font-Inter leading-7 text-[25px] font-[700] text-[#4D4D4D]">
            Membership Organisations
          </h1>
          <p className="text-[14px] text-[#717171] mt-5">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="mt-6 p-5   w-[260px] h-[300px] rounded-[5.6px] text-center shadow-[0px_1.39px_2.78px_#ABBED133]">
          <img
            src={Tlogo2}
            alt="Tlogo2"
            className="mx-auto mb-3 w-[60px] h-auto"
          />
          <h1 className="mx-auto w-[175px] font-Inter leading-7 text-[25px] font-[700] text-[#4D4D4D] ">
            National Associations
          </h1>
          <p className="text-[14px] text-[#717171] mt-5">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="mt-10 p-5  w-[260px] h-[270px] max-h-[1000px] rounded-[5.6px] text-center shadow-[0px_1.39px_2.78px_#ABBED133]">
          <img
            src={Tlogo3}
            alt="Tlogo3"
            className="mx-auto mb-3 w-[60px] h-auto"
          />
          <h1 className="mx-auto w-[140px] font-Inter leading-8 text-[25px] font-[700] text-[#4D4D4D]">
            Clubs And Groups
          </h1>
          <p className=" text-[14px] text-[#717171] mt-3">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeTopic;
