import React, { useEffect, useRef, useState } from "react";
import ProfilePopUp from "./ProfilePopUp";
import { MdKeyboardArrowDown } from "react-icons/md";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);

    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [profileRef]);

  return (
    <div className="relative" ref={profileRef}>
      <div
        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg lg:hover:bg-gray-800"
        onClick={toggleDropdown}
      >
        <img
          src="/images/profile.jpeg"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <div className="lg:block hidden">
          <p className="text-white font-semibold">Dinesh</p>
          <p className="text-gray-400 text-sm">dinesh@example.com</p>
        </div>
        <div className={`transform rotate-180 lg:block hidden`}>
          <MdKeyboardArrowDown size={18} />
        </div>
      </div>

      {isOpen && <ProfilePopUp toggleDropdown={toggleDropdown} />}
    </div>
  );
};

export default Profile;
