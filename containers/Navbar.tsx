'use client';
import React from 'react';
import Menu from '@/components/Menu';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <header className="font-roslindale-display text-3xl text-white">
        Shiyam
      </header>
      <Menu />
    </div>
  );
};

export default Navbar;
