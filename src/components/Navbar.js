import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className='navbar'>
      <div className='menu-toggle' onClick={handleToggle}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href='#home' onClick={(e) => { e.preventDefault(); scrollToElement("home"); }}>Home</a></li>
        <li><a href='#about' onClick={(e) => { e.preventDefault(); scrollToElement("about"); }}>About</a></li>
        <li><a href='#courses' onClick={(e) => { e.preventDefault(); scrollToElement("courses"); }}>All Courses</a></li>
        <li><a href='#team' onClick={(e) => { e.preventDefault(); scrollToElement("team"); }}>Team</a></li>
        <li><a href='#pricing' onClick={(e) => { e.preventDefault(); scrollToElement("pricing"); }}>Pricing</a></li>
        <li><a href='#blog' onClick={(e) => { e.preventDefault(); scrollToElement("blog"); }}>Blog</a></li>
        <li><a href='#contact' onClick={(e) => { e.preventDefault(); scrollToElement("contact"); }}>Contact Us</a></li>
      </ul>
      <button className={`get-certificate ${isOpen ? 'show' : ''}`} onClick={()=>scrollToElement("courses")}>Get Certificate</button>
    </nav>
  );
}

export default Navbar;
