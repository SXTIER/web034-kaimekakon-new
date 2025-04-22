import React from 'react';
import IMG1 from './svg/img1.svg';
import Credit from '../components/3_Credit.jsx';
import ThreeTopic from '../components/4_ThreeTopic.jsx';
import TheUnseen from '../components/5_TheUnseen.jsx';
import Static from '../components/6_Static.jsx';
import HowTo from '../components/7_HowtoDesign.jsx';
import Tesla from '../components/8_Tesla.jsx';
import Caring from '../components/9_Caring.jsx';
import MainFooter from '../components/10_MainFooter.jsx';

const Home = () => {
  return (
    <div>
      {/* -------------------------------ส่วนด้านบน-(อันแรก)------------------------------- */}
        <div className="my-8 p-10 flex bg-[#F5F7FA] justify-evenly w-full max-w-none max-h-none py-[100px] px-[1px]">
          <div className="container-left w-[560px] h-auto my-15 mb-10">
            <h1 className="text-[60px] font-[600] leading-[65px] text-[rgb(77,77,77)]">
              Lessons and insights
              <h1 className="text-[#4CAF4F]">from 8 years</h1>
            </h1>
            <p className="my-5 text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="text-white my-5 bg-[#4CAF4F] px-[23px] py-[10px] rounded-[2.78px] transition duration-300 ease-in-out hover:bg-[#548e59] hover:scale-105">
              Register
            </button>
          </div>
          <div className="container-right w-auto">
            <img className=" h-[400px]" src={IMG1} alt="img-1" />
          </div>
        </div>
      {/* -------------------------------จบส่วนอันแรก------------------------------- */}

      {/* -------------------------------ส่วนที่สอง------------------------------- */}
        <div className="flex flex-col items-center max-w-none">
          <h1 className="font-bold text-center text-[35px] text-[#4D4D4D] mt-6">
            Our Clients
          </h1>
          <p className="text-center text-[15px] text-[#717171] mt-2">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="mb-5">
          <Credit />
        </div>

        <div className="flex flex-col items-center max-w-none">
          <h1 className="font-bold text-center text-[40px] max-w-[600px] text-[#4D4D4D] mb-3">
            Manage your entire community in a single system
          </h1>
          <p className="text-center text-[15px] text-[#717171] mt-2 mb-5">
            Who is Nextcent suitable for?
          </p>
          <ThreeTopic className="my-5" />
        </div>
      <br />
      <br />
      {/* import จากที่อื่นแล้ว */}
      <TheUnseen className=" my-2" />
      <Static className="my-5" />
      <HowTo className="my-5" />
      <Tesla className="my-5" />
      <Caring className="my-5" />
      <MainFooter className="my-5" />
      {/* import จากที่อื่นแล้ว */}
      {/* -------------------------------จบส่วนที่สอง------------------------------- */}
    </div>
  );
};

export default Home;
