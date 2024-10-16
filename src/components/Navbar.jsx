import { HiMenuAlt4 } from "react-icons/hi";
import Profile from "./Profile";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 w-full bg-[#141414] text-white flex justify-between p-4 lg:hidden z-50">
      <button onClick={toggleSidebar} className="text-xl">
        <HiMenuAlt4 />
      </button>
      <div className="text-lg">
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
