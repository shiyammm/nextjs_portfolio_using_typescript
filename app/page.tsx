import Navbar from '@/containers/Navbar';
import React from 'react';
import Hero from '@/containers/Hero';
import About from '@/containers/About';

const page = () => {
  return (
    <main className=" w-full h-screen">
      <div className="px-16 py-10 bg-gray">
        <Navbar />
        <Hero />
      </div>
      <About />
    </main>
  );
};

export default page;
