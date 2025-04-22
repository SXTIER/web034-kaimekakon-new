import React from 'react';
import PeopleLogo from './Static_SVG/people.svg';
import ClickLogo from './Static_SVG/click.svg';
import CardLogo from './Static_SVG/card.svg';
import HandLogo from './Static_SVG/3hand.svg';

const Static = () => {
  const statsData = [
    {
      imgSrc: PeopleLogo,
      number: '2,245,341',
      label: 'Members',
      className: 'text-green-500',
    },
    {
      imgSrc: HandLogo,
      number: '46,328',
      label: 'Clubs',
      className: 'text-blue-500',
    },
    {
      imgSrc: ClickLogo,
      number: '828,867',
      label: 'Event Bookings',
      className: 'text-purple-500',
    },
    {
      imgSrc: CardLogo,
      number: '1,926,436',
      label: 'Payments',
      className: 'text-yellow-500',
    },
  ];

  return (
    <div className="bg-[#F5F7FA] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-evenly">
      {/* ข้อความด้านซ้าย */}
      <div className="mb-10 md:mb-0 max-w-md">
        <h2 className="text-3xl md:text-4xl font-[500] text-[#4D4D4D] leading-[45px]">
          Helping a local <br />
          <span className="text-[#4CAF4F]">business reinvent itself</span>
        </h2>
        <p className="text-[14px] text-[#18191F] mt-4">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-14 gap-y-6">
        {statsData.map(({ imgSrc, number, label, className }, index) => (
          <StatItem
            key={index}
            imgSrc={imgSrc}
            number={number}
            label={label}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ imgSrc, number, label, className }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img src={imgSrc} alt={label} className="w-16 h-16 object-contain" />
      <div>
        <p className="text-xl font-bold text-[#4D4D4D]">{number}</p>
        <p className="text-sm text-[#717171]">{label}</p>
      </div>
    </div>
  );
};

export default Static;
