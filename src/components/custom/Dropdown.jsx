import React, { useEffect, useRef, useState } from "react";
import { BiCode } from "react-icons/bi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-24 lg:w-36" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full bg-transparent text-sm border-[1px] border-gray-700 py-2 px-[.5rem] lg:px-4 rounded-lg flex items-center justify-between focus:outline-none "
      >
        <h5 className="text-xs lg:text-sm">Last week</h5>
        <BiCode className="lg:ml-2 ml-0 text-gray-400 rotate-90" />
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-full bg-opacity-95 bg-[#232323] text-white rounded-lg shadow-lg mt-2">
          <li
            className="px-4 text-xs py-2 hover:bg-[#383838] hover:rounded-lg cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Last week
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
