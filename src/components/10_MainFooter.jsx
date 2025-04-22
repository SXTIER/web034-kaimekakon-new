import React from 'react';
import Logo from './Footer_SVG/logo.svg';
import IG from './Footer_SVG/ig.svg';
import TW from './Footer_SVG/twitter.svg';
import WB from './Footer_SVG/website.svg';
import YT from './Footer_SVG/yt.svg';
import SEND from './Footer_SVG/send.svg';

const MainFooter = () => {
  return (
    <div>
      <div>
        {/* CTA Section */}
        <section className="bg-gray-50 text-center pb-10  pt-10">
          <div className="flex flex-col items-center justify-center px-4">
            <h2 className="text-[60px] font-[600] font-Inter text-[#263238] mb-8 max-w-3xl leading-[65px]">
              Pellentesque suscipit fringilla libero eu.
            </h2>
            <button className="bg-[#4CAF4F] hover:bg-green-600 text-white px-7 py-3 rounded-md text-sm">
              Get a Demo →
            </button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[#263238] text-white py-12 px-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo + Socials replaced with image and social icons as images */}
            <div className="w-[300px] h-auto">
              <div className="my-6 mb-9">
                <img className="w-[180px] h-auto" src={Logo} alt="Logo" />
              </div>
              <p className=" text-sm text-[#F5F7FA] mb-4 leading-6">
                Copyright © 2020 Landify UI Kit. <br />
                All rights reserved
              </p>
              <div className="flex space-x-4 ">
                <img className="w-[35px] h-auto" src={IG} alt="social1" />

                <img className="w-[35px] h-auto" src={WB} alt="social2" />

                <img className="w-[35px] h-auto" src={TW} alt="social3" />

                <img className="w-[35px] h-auto" src={YT} alt="social4" />
              </div>
            </div>

            {/* Company - moved closer to center */}
            <div className="md:ml-32 mt-6">
              <h3 className="text-[20px] font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-[#F5F7FA] mt-6">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>

            {/* Support - moved slightly right */}
            <div className="md:ml-8 mt-6">
              <h3 className="text-[20px] font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-[#F5F7FA] mt-6">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="md:ml-8 mt-6">
              <h3 className="text-[20px] font-semibold mb-4">Stay up to date</h3>
              <div className="flex mt-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-l-md bg-gray-700 text-white text-sm border border-gray-700"
                />
                <button className="bg-gray-700 px-4 rounded-r-md">
                  <img className="w-[25px] h-auto" src={SEND} alt="send email" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainFooter;
