import React, { useState, useEffect, useContext } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { TbShoppingCartCheck } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { UserContext } from '../providers/UserContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { thumbnail } from '@cloudinary/url-gen/actions/resize';

const NavbarComponent = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { userInfo, setUserInfo } = useContext(UserContext);
  const isLoggedIn = localStorage.getItem('token')// Check if user is logged in

  // console.log(userInfo)

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


  const handleLogout = () => {
    // Handle logout logic here
    setUserInfo({})
    localStorage.removeItem('token');
    alert("Logged out Successfully")
    navigate('/')
    window.location.reload();
    // console.log('Logout clicked');
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dlywhxskx"
    }
  });

  const img = cld.image(`${userInfo.username}`)
  img.resize(thumbnail().width(50).height(50))
  // const img = cld.image(`${userInfo.username}`)

  return (
    <div className="flex justify-between items-center border-b-2">
      <div className="flex items-center space-x-5">
        <div>
          <Link to='/'>
          <img src="12.png" alt="" className="w-32 ml-3 mr-0 my-3"/>
          </Link>
          
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
        <div className='flex flex-row relative'>
          {/* <img src={userInfo.imageURL} className="w-10 rounded-full bg-slate-200 hover:cursor-pointer border h-10" alt="" onClick={toggleMenu} /> */}
          <AdvancedImage cldImg={img} className="w-10 rounded-full bg-slate-200 hover:cursor-pointer border h-10" alt="" onClick={toggleMenu} />
          {showMenu && (
            <div className="absolute top-full mt-1 ml-3 bg-white shadow-md rounded-md p-2">
              <div className="flex items-center space-x-2 ">
                {/* <img src={img} alt="Profile" className="w-8 h-8 rounded-full" /> */}
                <AdvancedImage cldImg={img} className="w-8 h-8 rounded-full"></AdvancedImage>
              </div>
              <span className="text-gray-700">{userInfo.name}</span>
              {isLoggedIn ? ( // Check if user is logged in
                <button className="block text-sm text-gray-600 mt-2" onClick={handleLogout}>Logout</button>
              ) : (
                <Link to='/login'>
                  <button className="block text-sm text-gray-600 mt-2">
                    Login
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>

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
