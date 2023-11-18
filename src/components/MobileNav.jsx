import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../App.css';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <GiHamburgerMenu size={30} color="#d4f938" onClick={handleMenuOpen} />
      <div className={`menu ${menuOpen ? '' : 'menu-closed'} pl-10 pt-16 `}>
        <img src="../assets/icons/home.svg" alt="logo" /> <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
      </div>
    </div>
  );
};

export default MobileMenu;
