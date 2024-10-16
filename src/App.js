import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="bg-[#141414] min-h-screen text-gray-200 py-2">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="lg:block">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <Dashboard />
    </div>
  );
}

export default App;
