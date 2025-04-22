import React from 'react';
import FL1 from '../pages/svg/img1_1.svg';
import FL2 from '../pages/svg/img1_2.svg';
import FL3 from '../pages/svg/img1_3.svg';
import FL4 from '../pages/svg/img1_4.svg';
import FL5 from '../pages/svg/img1_5.svg';
import FL6 from '../pages/svg/img1_6.svg';

const Credit = () => {
  return (
    <div>
      <div className="flex justify-evenly max-w-none mx-auto py-10">
        <img src={FL1} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
        <img src={FL2} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
        <img src={FL3} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
        <img src={FL4} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
        <img src={FL5} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
        <img src={FL6} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
        <img src={FL3} className="w-[40px] h-[40px] mx-[20px]" alt="IMG_FOOTER" />
      </div>
    </div>
  );
};

export default Credit;
