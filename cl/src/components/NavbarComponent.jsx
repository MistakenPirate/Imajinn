import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { TbShoppingCartCheck } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between items-center border-b-2">
      <div className="flex items-center space-x-5">
        <div>
          <img src="12.png" alt="" className="w-32 ml-3 mr-0 my-3" />
        </div>
        {!isMobile && (
          <>
            <div>Inspiration</div>
            <div>Find Work</div>
            <div>Go Pro</div>
            <div>Learn Design</div>
            <div>Hire Designers</div>
          </>
        )}
      </div>
      <div className="flex space-x-5 pr-8 items-center">
        {!isMobile && (
          <button className="flex items-center justify-around bg-slate-200 py-1 px-2 rounded-xl">
            <IoSearchSharp /> Search
          </button>
        )}
        <TbShoppingCartCheck />
        <img src="1.png" className="w-10 rounded-full bg-slate-200 border h-10" alt="" />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold px-2 py-2 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
        {isMobile && (
          <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      {isMobile && showMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md z-10">
          <div className="flex flex-col space-y-4 p-4">
            <div>Inspiration</div>
            <div>Find Work</div>
            <div>Go Pro</div>
            <div>Learn Design</div>
            <div>Hire Designers</div>
            <button className="flex items-center justify-around bg-slate-200 py-1 px-2 rounded-xl">
              <IoSearchSharp /> Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;