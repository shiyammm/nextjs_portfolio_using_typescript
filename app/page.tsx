import Navbar from '@/containers/Navbar';
import React from 'react';
import Hero from '@/containers/Hero';
import About from '@/containers/About';
import Works from '@/containers/Works';

const page = () => {
  return (
    <main className="bg-gray px-16">
      <Navbar />
      <Hero />
      <About />
      <Works />
    </main>
  );
};

export default page;
