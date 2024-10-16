import { MdAccountCircle } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

const ProfilePopUp = ({ toggleDropdown }) => {
  return (
    <div
      className={`absolute right-0 top-16 lg:right-auto lg:left-0 lg:top-auto lg:bottom-16 bg-opacity-50 backdrop-blur-md bg-[#232323] z-50 shadow-lg rounded-lg p-4 w-72 text-white`}
    >
      <ul className="text-sm">
        <li
          className="flex pl-2 items-center py-2 gap-2 hover:bg-[#383838] rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <MdAccountCircle />
          My account
        </li>
        <hr className="border-gray-700 border-t-[1px] my-1" />
        <li
          className="flex pl-2 items-center py-2 gap-2 hover:bg-[#383838] rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <MdPrivacyTip />
          Privacy policy
        </li>
        <li
          className="flex pl-2 items-center py-2 gap-2 hover:bg-[#383838] rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <BsFillLightbulbFill />
          Share feedback
        </li>
        <hr className="border-gray-700 border-t-[1px] my-1" />
        <li
          className="flex items-center pl-2 py-2 gap-2 hover:bg-[#383838] rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <TbLogout />
          Sign out
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopUp;
