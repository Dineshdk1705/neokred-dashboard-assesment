import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaClone } from "react-icons/fa";
import { RiSettings3Fill, RiShoppingBagFill } from "react-icons/ri";
import { IoIosClose, IoLogoSlack } from "react-icons/io";
import Profile from "./Profile";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleSelectMenu = (menu) => {
    setActiveMenu(menu);
    toggleSidebar();
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#080808] text-white w-64 lg:w-70 lg:border-none border-[1px] border-[#282828] rounded-lg lg:rounded-none transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 flex flex-col z-50`}
    >
      <div className="pt-8 pb-5 px-3 block lg:hidden" onClick={toggleSidebar}>
        <IoIosClose size={26} />
      </div>
      <div className="flex items-center px-4 justify-between h-16 border-b-[1px] border-gray-800">
        <div className="flex items-center gap-2">
          <IoLogoSlack />
          <h1 className="text-xl font-semibold">Neo UI</h1>
        </div>
        <MdKeyboardArrowDown size={20} />
      </div>
      <div className="flex flex-col justify-between h-full p-2">
        <div className="flex flex-col">
          <nav className="flex-grow px-2 mt-5">
            <ul className="text-sm text-gray-400">
              <li
                className="py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg"
                onClick={toggleSidebar}
              >
                <div
                  className={`flex items-center gap-2 px-2 ${
                    activeMenu === "Home" ? "text-white" : ""
                  }`}
                  onClick={() => handleSelectMenu("Home")}
                >
                  <IoMdHome size={18} />
                  <h4>Home</h4>
                </div>
              </li>
              <li
                className="py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg"
                onClick={() => handleSelectMenu("Events")}
              >
                <div
                  className={`flex items-center gap-2 px-3 ${
                    activeMenu === "Events" ? "text-white" : ""
                  }`}
                >
                  <FaClone size={12} />
                  <h4>Events</h4>
                </div>
              </li>
              <li
                className="py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg"
                onClick={() => handleSelectMenu("Orders")}
              >
                <div
                  className={`flex items-center gap-2 px-2 ${
                    activeMenu === "Orders" ? "text-white" : ""
                  }`}
                >
                  <RiShoppingBagFill size={18} />
                  <h4>Orders</h4>
                </div>
              </li>
              <li
                className="py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg"
                onClick={() => handleSelectMenu("Settings")}
              >
                <div
                  className={`flex items-center gap-2 px-2 ${
                    activeMenu === "Settings" ? "text-white" : ""
                  }`}
                >
                  <RiSettings3Fill size={18} />
                  <h4>Settings</h4>
                </div>
              </li>
            </ul>
          </nav>
          <nav className="flex-grow mt-9 px-2 lg:block hidden">
            <h5 className="text-xs px-2 text-gray-400 mb-3">Upcoming Events</h5>
            <ul className="text-sm">
              <li className="px-2 py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg">
                Bear Hug: Live in Concert
              </li>
              <li className="px-2 py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg">
                Six figures- DJ Set
              </li>
              <li className="px-2 py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg">
                We All Look The Same
              </li>
              <li className="px-2 py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg">
                Viking People
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="lg:block hidden">
            <div className="flex items-center gap-2 px-2 text-sm py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg">
              <HiQuestionMarkCircle size={18} />
              <h4>Support</h4>
            </div>
            <div className="flex items-center gap-2 px-2 text-sm py-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg">
              <BsStars size={18} />
              <h4>Changelog</h4>
            </div>
            <hr className="border-gray-800 border-t-[1px] my-1 w-full" />
          </div>
          <div className="lg:block hidden">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
