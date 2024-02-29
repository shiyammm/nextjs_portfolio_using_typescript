import React from 'react';
import Blob from '@/components/Blob';

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center relative z-10">
      <Blob />
      <div className="mt-[14rem]">
        <h1 className="leading-[11rem] font-roslindale-display text-[11rem] text-white">
          Let's innovate <br />
          <span className="flex items-center gap-8 justify-center h-full w-full">
            <span className="inline-block font-acme text-2xl mt-6 font-semibold tracking-wide bg-cyan px-6 py-4 rounded-full text-black">
              digital experiences
            </span>{' '}
            together,
          </span>
        </h1>
        <span className="text-[2rem] font-circular-book flex justify-center mt-10 text-white ">
          crafting them with code
        </span>
      </div>
    </div>
  );
};

export default Hero;
